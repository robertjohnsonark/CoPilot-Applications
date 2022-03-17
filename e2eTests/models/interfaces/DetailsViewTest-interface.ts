import {Instance} from "sequelize";

export interface DetailsViewTestAttributes {
  Area: string;
  Controller: string;
  Action: string;
  ParameterName: string;
  ParameterValue: number;
}

export interface DetailsViewTestInstance extends Instance<DetailsViewTestAttributes> {
  dataValues: DetailsViewTestAttributes;
}
