import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly analytics = [];

  handlerUserCreated(data: Record<string, unknown>) {
    console.log('handlerUserCreated - ANALYTICS', data);
    this.analytics.push({
      email: data.email,
      timestamp: new Date().toISOString(),
    });
  }
  getAnalytics() {
    return [...this.analytics];
  }
}
