import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { query } from "express";

@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChat(@Query('perPage') perPage, @Query('page') page) {
    console.log(perPage, page);
  }
  // @Get(':id/chats')
  // getChat(@Param('id') id, @Param('url') url) {
  //   console.log(id);
  //   console.log(url);
  // }
  // @Get(':id/chats')
  // getChat(@Query() query) {
  //   console.log(query.perPage, query.page);
  // }

  // Body를 받을 떄는 Dto를 정의해줘야 편의하다!
  @Post(':id/chats')
  postChat(@Body() body) {

  }
}
