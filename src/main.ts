import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const url = process.env.MONGO_URL;
  console.log(url);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
