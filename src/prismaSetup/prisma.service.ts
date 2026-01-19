import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client'; // NOT ../generated/prisma/client
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaMariaDb({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT ?? 3306),
      connectionLimit: 10,
    });

    super({ adapter });
  }
}
