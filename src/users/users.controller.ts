import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('/users')
@ApiTags('유저 API')
export class UsersController {
  @Get('/one')
  getUserOne(): string {
    return '유저 1명 호출.';
  }

  @Get('/user-info')
  getUserInfoByUserId(): string {
    return '구현중입니다.';
  }
}
