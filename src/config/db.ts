import { Sequelize } from "sequelize-typescript";
import dotev from 'dotenv';

dotev.config();



const db = new Sequelize(process.env.DATABASE_URL!, {
    models:[__dirname + '/../models/**/*'],
    logging: false,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // Puedes ajustar esto según tus necesidades de seguridad
        }
    }
})

export default db;