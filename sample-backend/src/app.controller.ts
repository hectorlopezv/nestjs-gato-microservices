import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { CreateUserRequest } from './create-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('analitics')
  getAnalytics(): Observable<any> {
    return this.appService.getAnalitics();
  }
  @Post()
  createUser(@Body() createUserRequest: CreateUserRequest) {
    return this.appService.createUserEvent(createUserRequest);
  }
}
