import { DataTypes, Model } from "sequelize";

import { sequelizeConnection } from "../database";

export class UserModel {
    public id: string;
    public name: string;
    public password: string;
    public email: string;

    constructor(id: string, name: string, password: string, email: string) {
        this.name = name;
        this.id = id;
        this.password = password;
        this.email = email;
    }
}

export class UserSchema extends Model {}

UserSchema.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        name: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    { sequelize: sequelizeConnection, modelName: "users", timestamps: false }
);
