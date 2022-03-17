import {logger} from "../utils/logger";
import {models, sequelize} from "../models/index";
import {TestUserAttributes, TestUserInstance} from "../models/interfaces/TestUser-interface";
import {Transaction} from "sequelize";

export class TestUserService {
  createTest(userAttributes: TestUserAttributes): Promise<TestUserInstance> {
    let promise = new Promise<TestUserInstance>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.TestUser.create(userAttributes).then((test: TestUserInstance) => {
          logger.info(`Created user ${userAttributes.RoleName}, ${userAttributes.Username}, ${userAttributes.Password}.`);
          resolve(test);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  retreiveTest(rolename: string, username: string, password: string): Promise<TestUserInstance> {
    let promise = new Promise<TestUserInstance>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.TestUser.findOne({where: {RoleName: rolename, Username: username, Password: password}}).then((user: TestUserInstance) => {
          if (user) {
            logger.info(`Retrieved user ${user.dataValues.RoleName}, ${user.dataValues.Username}, ${user.dataValues.Password}.`);
          } else {
            logger.info(`TestUser does not exist.`);
          }
          resolve(test);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  retreiveTests(): Promise<Array<TestUserInstance>> {
    let promise = new Promise<Array<TestUserInstance>>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.TestUser.findAll().then((users: Array<TestUserInstance>) => {
          logger.info("Retrieved all users.");
          resolve(users);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  updateTest(rolename: string, username: string, password: string, userAttributes: any): Promise<void> {
    let promise = new Promise<void>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.TestUser.update(userAttributes, {where: {RoleName: rolename, Username: username, Password: password}})
          .then((results: [number, Array<TestUserInstance>]) => {
          if (results.length > 0) {
            logger.info(`Updated user ${rolename}, ${username}, ${password}.`);
          } else {
            logger.info(`TestUser ${rolename}, ${username}, ${password} does not exist.`);
          }
          resolve(null);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  deleteTest(rolename: string, username: string, password: string): Promise<void> {
    let promise = new Promise<void>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.TestUser.destroy({where: {RoleName: rolename, Username: username, Password: password}}).then((afffectedRows: number) => {
          if (afffectedRows > 0) {
            logger.info(`Deleted user ${rolename}, ${username}, ${password}.`);
          } else {
            logger.info(`TestUser ${rolename}, ${username}, ${password} does not exist.`);
          }
          resolve(null);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }
}

export const productService = new TestUserService();
