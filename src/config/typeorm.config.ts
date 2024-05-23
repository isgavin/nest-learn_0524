// src/config/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// 数据库配置信息
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '8.140.205.224',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'test',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
