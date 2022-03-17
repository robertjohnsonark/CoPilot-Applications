/* tslint:disable:variable-name */

import * as SequelizeStatic from "sequelize";
import {DataTypes, Sequelize} from "sequelize";
import {DetailsViewTestAttributes, DetailsViewTestInstance} from "./interfaces/DetailsViewTest-interface";

export default function(sequelize: Sequelize, dataTypes: DataTypes):
  SequelizeStatic.Model<DetailsViewTestInstance, DetailsViewTestAttributes> {
  let DetailsViewTest = sequelize.define<DetailsViewTestInstance, DetailsViewTestAttributes>("DetailsViewTest", {
    Area: {type: dataTypes.STRING, allowNull: false},
    Controller: {type: dataTypes.STRING, allowNull: false},
    Action: {type: dataTypes.STRING, allowNull: false},
    ParameterName: {type: dataTypes.STRING, allowNull: false},
    ParameterValue: {type: dataTypes.INTEGER, allowNull: false}
  }, {
    indexes: [],
    classMethods: {},
    timestamps: false
  });

  return DetailsViewTest;
}
