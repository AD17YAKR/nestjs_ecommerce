import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { 'first time then': 'Hello World!' };
  }
}
