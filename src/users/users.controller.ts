import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { JoinRequestDto } from "./dto/join.request.dto";
import { UsersService } from "./users.service";
import * as http from 'http';

@Controller('api/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }
  // Body를 받을 떄는 Dto를 정의해줘야 편의하다!
  // Dto는 클래스로 정의하는게 좋다!
  @Post()
  postUsers(@Body() data: JoinRequestDto) {
    this.userService.postUsers(data.email, data.nickname, data.password);
    return;

  }
  @Post('login')
  logIn(@Req() req) {
    return req.user;
  }
  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.loOut();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
