import mysql from 'mysql2';
// import { Db } from 'mongodb';
import config from '../config';
import { Pool } from 'mysql2/promise';

export default async (): Promise<Pool> => {
  const connectionPool = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    database: 'nikshala',
    password: 'Faisal@123',
  });
  return connectionPool.promise();
};
