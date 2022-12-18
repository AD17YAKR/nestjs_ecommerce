import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  //TODO: change url to env variable
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/e_commerce')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
