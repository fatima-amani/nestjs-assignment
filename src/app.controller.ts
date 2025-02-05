import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-user')
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get()
  // getTodos(): string[] {
  //   return this.appService.getTodos();
  // }

  // @Get(':index')
  // getTodoByIndex(@Param('index', ParseIntPipe) index: number): string {
  //   return this.appService.getTodoByIndex(index);
  // }

  // @Post()
  // createTodo(@Body('task') task: string): string[] {
  //   return this.appService.createTodo(task);
  // }

  // @Put(':index')
  // updateTodo(
  //   @Param('index', ParseIntPipe) index: number,
  //   @Body('task') task: string,
  // ): string[] {
  //   return this.appService.updateTodo(index, task);
  // }

  // @Delete(':index')
  // deleteTodo(@Param('index', ParseIntPipe) index: number): string[] {
  //   return this.appService.deleteTodo(index);
  // }
}
