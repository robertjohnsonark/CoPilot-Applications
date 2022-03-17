import * as fs from "fs";
import * as webdriver from "selenium-webdriver";
import * as chai from "chai";
import config from '../src/config';
import { sequelize, models } from "../models/index";
import { DetailsViewTestService } from "../services/DetailsViewTestService";
import { DetailsViewTestInstance } from '../models/interfaces/DetailsViewTest-interface';
import { TestUserService } from "../services/TestUserService";
import { TestUserInstance } from '../models/interfaces/TestUser-interface';

var should = chai.should;
var until = webdriver.until;
var WebElement = webdriver.WebElement;

should();

// skipping this test run until configuring headless chrome for travis CI
describe("Portal 2 DetailsView Test Suite", function() {
    let driver;
    let userService: TestUserService;
    let testService: DetailsViewTestService;
    // time out for test execution
    this.timeout(60000);

    before(function() {
        // initializing chrome driver
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        // maximizing chrome browser
        driver.manage().window().maximize();
        // connect to SQL Server
        userService = new TestUserService();
        let users = userService.retreiveTests();
        sequelize.Promise.each(users, user => {
            console.log('Users: ' + user.dataValues.RoleName + ', ' + user.dataValues.Username + ', ' + user.dataValues.Password + ', ' + user.dataValues.Enabled);
        });
        testService = new DetailsViewTestService();
        let tests = testService.retreiveTests();
        sequelize.Promise.each(tests, test => {
            console.log('Detail View Test: ' + test.dataValues.Area + ', ' + test.dataValues.Controller + ', ' + test.dataValues.Action);
        });
        let test = testService.retreiveTest("Employee", "PeopleController", "Details");
        test.then((test: DetailsViewTestInstance) => {
            if (test !== null)
                console.log('Read Detail View Test: ' + test.dataValues.Area + ', ' + test.dataValues.Controller + ', ' + test.dataValues.Action);
            else
                console.log('Read Detail View Test Failed: ' + "Employee" + ', ' + "PeopleController" + ', ' + "Details");
        });
    });

    afterEach(function() {
        let testCaseName: string = this.currentTest.title;
        let testCaseStatus: string = this.currentTest.state;
        if (testCaseStatus === "failed") {
            console.log(`Test: ${testCaseName}, Status: Failed!`);
            // capturing screenshot if test fails
            driver.takeScreenshot().then(data => {
                let screenshotPath = `TestResults/Screenshots/${testCaseName}.png`;
                console.log(`Saving Screenshot as: ${screenshotPath}`);
                fs.writeFileSync(screenshotPath, data, "base64");
            });
        } else if (testCaseStatus === "passed") {
            console.log(`Test: ${testCaseName}, Status: Passed!`);
        } else {
            console.log(`Test: ${testCaseName}, Status: Unknown!`);
        }
    });

    after(function() {
        sequelize.close().then(() => console.log('sequelize shut down gracefully'));        
        driver.quit();
    });

    it('should login to Portal2 target as Developer', function() {
        let Url: string = config.baseUrl;
        return driver.navigate().to(Url).then(function() {
            console.log(`Page: "${Url}" opened`);
        })
        .then(() => {
            driver.getTitle().then(function(title) { console.log("Page Title: " + title); });
            return driver.getCurrentUrl().then(currentUrl => {
                currentUrl.should.include(Url, `Expected url: ${Url}, Actual url: ${currentUrl}`);
            })
            .then(() => {
                let searchBox = driver.findElement(webdriver.By.id("Email")).sendKeys("tparker@baronbudd.com");
                let passwordBox = driver.findElement(webdriver.By.id("Password")).sendKeys("B@dl@nds2018");
                let submitButton = driver.findElement(webdriver.By.id("Login")).click();
            })
            .then(() => {
                return driver.getCurrentUrl().then(currentUrl => {
                    currentUrl.should.include('Employee', `Redirected url: ${currentUrl}`);
                });
            });
        });
    });

    it ('should navigate to the Employee Home page', function () {
        let Url: string = config.employeeHomeUrl;
        return driver.navigate().to(Url).then(function() {
            console.log(`Page: "${Url}" opened`);
        }).then(() => {
            return driver.getCurrentUrl().then(currentUrl => {
                currentUrl.should.include(Url, `Expected url: ${Url}, Actual url: ${currentUrl}`);
            });
        }).then(() => {
            let elementPromise = driver.wait(until.elementLocated(webdriver.By.id('FullName')));
            elementPromise.getText().then((value) => {
                console.log(`FullName: "${value}"`);
                value.should.equal('Thomas Alan Parker');
            });
        });
    });

    it("should navigate to the Employee People Details page", function() {
        let Url: string = config.employeeProfileUrl;
        return driver.navigate().to(Url).then(function() {
            console.log(`Page: "${Url}" opened`);
        }).then(() => {
            return driver.getCurrentUrl().then(currentUrl => {
                console.log(currentUrl);
                currentUrl.should.include(Url, `Expected url: ${Url}, Actual url: ${currentUrl}`
            );
            }).then(() => {
                let detailsCardHeader = driver.wait(until.elementLocated(webdriver.By.id("DetailsCardHeader")));
                detailsCardHeader.getAttribute("value").then(value => {
                    console.log("DetailsCardHeader: " + value);
                });

                let loader = driver.findElement(webdriver.By.css(".preloader"));
                driver.wait(until.elementIsNotVisible(loader));

                let elementsPromise = driver.findElements(webdriver.By.css('#detailDiv > div > ul > li'));
                let page: number = 1;
                elementsPromise.then((elements) => {
                    for (var i = 0; i < elements.length; i++) {
                        let elementPromise = elements[i];
                        elementPromise.getText().then((value) => {
                            console.log(`Load Tab: "${value}"`);
                            let selector: string = '#detailDiv > div > ul > li:nth-child(' + page.toString() + ')';
                            driver.wait(until.elementLocated(webdriver.By.css(selector))).click();
                            driver.sleep(1000);
                            page++;
                        });
                    }
                });
            });
        });
    });
});
