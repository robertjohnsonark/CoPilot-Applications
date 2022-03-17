import {Instance} from "sequelize";

export interface TestUserAttributes {
  RoleName: string;
  Username: string;
  Password: string;
  Enabled: boolean;
}

export interface TestUserInstance extends Instance<TestUserAttributes> {
  dataValues: TestUserAttributes;
}
