import * as cluster from "cluster";
import * as mkdirp from "mkdirp";
import * as path from "path";
import {configs} from "../configs/configs";
import {transports} from "winston";
import {Request, Response} from "express";

const winston = require("winston");

let config = configs.getLoggingConfig();
config.file.filename = `${path.join(config.directory, "..\\logs")}\\${config.file.filename}`;

if (cluster.isMaster) {
  mkdirp.sync(path.join(config.directory, "..\\logs"));
}

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
      new winston.transports.File({ filename: config.file.filename.replace('.log', '.error.log'), level: 'error' }),
      new winston.transports.File({ filename: config.file.filename.replace('.log', '.debug.log'), level: 'debug' }),
      new winston.transports.File({ filename: config.file.filename.replace('.log', '.combined.log') }),
      new transports.Console(config.console)
  ],
});

console.log("error log path: " + config.file.filename.replace('.log', '.error.log'));
console.log("debug log path: " + config.file.filename.replace('.log', '.debug.log'));
console.log("combined log path: " + config.file.filename.replace('.log', '.combined.log'));

logger.error('error');
logger.warn('warn');
logger.info('info');
logger.verbose('verbose');
logger.debug('debug');
logger.silly('silly');

export const skip = (req: Request, res: Response): boolean => {
  return res.statusCode >= 200;
};

export const stream = {
  write: (message: string, encoding: string): void => {
    logger.info(message);
  }
};
