import {logger} from "../utils/logger";
import {models, sequelize} from "../models/index";
import {DetailsViewTestAttributes, DetailsViewTestInstance} from "../models/interfaces/DetailsViewTest-interface";
import {Transaction} from "sequelize";

export class DetailsViewTestService {
  createTest(testAttributes: DetailsViewTestAttributes): Promise<DetailsViewTestInstance> {
    let promise = new Promise<DetailsViewTestInstance>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.DetailsViewTest.create(testAttributes).then((test: DetailsViewTestInstance) => {
          logger.info(`Created test with name ${testAttributes.Area}, ${testAttributes.Controller}, ${testAttributes.Action}.`);
          resolve(test);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  retreiveTest(area: string, controller: string, action: string): Promise<DetailsViewTestInstance> {
    let promise = new Promise<DetailsViewTestInstance>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.DetailsViewTest.findOne({where: {Area: area, Controller: controller, Action: action}}).then((test: DetailsViewTestInstance) => {
          if (test) {
            logger.info(`Retrieved test with route ${test.dataValues.Area}, ${test.dataValues.Controller}, ${test.dataValues.Action}.`);
          } else {
            logger.info(`DetailsViewTest does not exist.`);
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

  retreiveTests(): Promise<Array<DetailsViewTestInstance>> {
    let promise = new Promise<Array<DetailsViewTestInstance>>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.DetailsViewTest.findAll().then((tests: Array<DetailsViewTestInstance>) => {
          logger.info("Retrieved all tests.");
          resolve(tests);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  updateTest(area: string, controller: string, action: string, testAttributes: any): Promise<void> {
    let promise = new Promise<void>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.DetailsViewTest.update(testAttributes, {where: {Area: area, Controller: controller, Action: action}})
          .then((results: [number, Array<DetailsViewTestInstance>]) => {
          if (results.length > 0) {
            logger.info(`Updated test with route ${area}, ${controller}, ${action}.`);
          } else {
            logger.info(`DetailsViewTest with route ${area}, ${controller}, ${action} does not exist.`);
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

  deleteTest(area: string, controller: string, action: string): Promise<void> {
    let promise = new Promise<void>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.DetailsViewTest.destroy({where: {Area: area, Controller: controller, Action: action}}).then((afffectedRows: number) => {
          if (afffectedRows > 0) {
            logger.info(`Deleted test with route ${area}, ${controller}, ${action}.`);
          } else {
            logger.info(`DetailsViewTest with name ${area}, ${controller}, ${action} does not exist.`);
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

export const productService = new DetailsViewTestService();
