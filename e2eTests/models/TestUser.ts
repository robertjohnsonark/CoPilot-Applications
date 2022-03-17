/* tslint:disable:variable-name */

import * as SequelizeStatic from "sequelize";
import {DataTypes, Sequelize} from "sequelize";
import {TestUserAttributes, TestUserInstance} from "./interfaces/TestUser-interface";

export default function(sequelize: Sequelize, dataTypes: DataTypes):
  SequelizeStatic.Model<TestUserInstance, TestUserAttributes> {
  let TestUser = sequelize.define<TestUserInstance, TestUserAttributes>("TestUser", {
    RoleName: {type: dataTypes.STRING, allowNull: false},
    Username: {type: dataTypes.STRING, allowNull: false},
    Password: {type: dataTypes.STRING, allowNull: false},
    Enabled: {type: dataTypes.BOOLEAN, allowNull: false}    
  }, {
    indexes: [],
    classMethods: {},
    timestamps: false
  });

  return TestUser;
}
