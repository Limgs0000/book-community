import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('/')
@ApiTags('/index')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/eco')
  getEco(): string {
    return '이건 controller에서 호출 됬습니다.';
  }

  @Get('/ecoService')
  getEcoService(): string {
    return this.appService.getEcoService();
  }
}
