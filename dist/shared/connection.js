import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
    dialect: "mysql",
    database: "bcofionode",
    username: "root",
    password: "supre123",
    host: "localhost",
    port: 3307,
    //logging: false,
});
export default sequelize;
