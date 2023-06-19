import { Module } from '@nestjs/common';
import { UserModule } from './user/user.modulo';
import { ServiceModule } from './service/service.modulo';

@Module({
  imports: [UserModule, ServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
