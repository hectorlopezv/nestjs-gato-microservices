import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //listen for this event
  @EventPattern('user_created')
  async handleUserCreated(data: Record<string, unknown>) {
    console.log('handlerUserCreated - CoMMUNICATION', data);
  }
}
