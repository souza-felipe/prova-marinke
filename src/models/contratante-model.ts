import { Model, DataTypes } from "sequelize";
import  sequelize  from "../shared/connection";

class Contratante extends Model {
    public id!: number; 
    public nomeCompleto!: string; 
}

Contratante.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nomeCompleto: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
    },
    {
        sequelize,
        modelName: "Contratante",
        tableName: "contratante",
        timestamps: false,
        freezeTableName: true,
    }
);

export default Contratante;
