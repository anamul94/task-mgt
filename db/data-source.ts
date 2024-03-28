import { ConnectionOptions } from "tls";
import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

const type: any = process.env.DB_TYPE;

export const dataSourceOptions: DataSourceOptions = {
  type: type,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DBNAME,
  synchronize: false,
  entities: ["dist/**/*.entity.js"],
  migrations: ["dist/db/migrations/*.js"],
};

const datasource = new DataSource(dataSourceOptions);
export default datasource;
