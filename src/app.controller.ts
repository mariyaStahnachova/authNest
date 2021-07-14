import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import {UserDto} from "./DTO/user.dto";

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post('/registration')
  // @ts-ignore
  registration(@Body() userData : UserDto): Promise<any> {
    return this.appService.registration(userData);
  }

  @Post('/login')
  login(): string {
    return this.appService.login();
  }
  @Post('/logout')
  logout(): string {
    return this.appService.logout();
  }
  @Get('/activate/:link')
  activate(): string {
    return this.appService.activate();
  }
  @Get('/refresh')
  refresh(): string {
    return this.appService.refresh();
  }

  @Get('/users')
  getHello(): string {
    return this.appService.getHello();
  }

}
