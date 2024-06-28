const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mysql://root:root@localhost:3306/user_auth");

export async function authenticateDB() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
