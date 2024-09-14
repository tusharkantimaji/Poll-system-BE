import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TableModule } from './table/modle';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '127.0.0.1',
      database: 'poll_sys',
      username: 'postgres',
      password: 'postgres',
      timezone: '+05:30',
      autoLoadModels: true,
      synchronize: false,
    }),
    TableModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
