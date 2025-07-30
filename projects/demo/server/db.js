import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres', 'postgres', 'password', {
  host: 'db-service',
  dialect: 'postgres'
});

export default sequelize;
