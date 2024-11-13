import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AreasModule } from './modules/area.module';
import { ProcessesModule } from './modules/process.module';
import { Area } from './entities/area.entity';
import { Process } from './entities/process.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Area, Process],
      synchronize: true,
    }),
    AreasModule,
    ProcessesModule,
  ],
})
export class AppModule {}
