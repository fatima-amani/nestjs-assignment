import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TodoModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
  exports:[]
})
export class AppModule {}
