import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './create-request.dto';

@Injectable()
export class AppService {
  private users = [];
  constructor(
    @Inject('communication')
    private communicationClient: ClientProxy,
    @Inject('analitica')
    private analyticsClient: ClientProxy,
  ) {}

  async createUserEvent(createUserRequest: CreateUserRequest) {
    this.users.push(createUserRequest);
    //emit event to communication service
    this.communicationClient.emit('user_created', {
      email: createUserRequest.email,
      password: createUserRequest.password,
    });

    this.analyticsClient.emit('user_created', {
      email: createUserRequest.email,
      password: createUserRequest.password,
    });
  }

  getAnalitics() {
    return this.analyticsClient.send({ cmd: 'analaticacmd' }, {});
  }
}
