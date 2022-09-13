import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('user_created')
  handlerUserCreated(data: Record<string, unknown>) {
    this.appService.handlerUserCreated(data);
  }
  @MessagePattern({ cmd: 'analaticacmd' })
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}
