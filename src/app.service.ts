import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'test.';
  }

  getEcoService(): string {
    return 'appService에서 값 가져옴. ';
  }
}
