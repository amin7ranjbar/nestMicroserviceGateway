import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController] ,
  exports: [UsersController]
})
export class UsersModule {}
