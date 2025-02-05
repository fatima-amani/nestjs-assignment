import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ApiBody } from '@nestjs/swagger';
import { createTodo } from 'src/dto/createTodo';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos(): string[] {
    return this.todoService.getTodos();
  }

  @Get(':index')
  getTodoByIndex(@Param('index', ParseIntPipe) index: number): string {
    return this.todoService.getTodoByIndex(index);
  }

  @Post()
  @ApiBody({type: createTodo})
  createTodo(@Body('task') task: string): string[] {
    return this.todoService.createTodo(task);
  }

  @Put(':index')
  @ApiBody({type: createTodo})
  updateTodo(
    @Param('index', ParseIntPipe) index: number,
    @Body('task') task: string,
  ): string[] {
    return this.todoService.updateTodo(index, task);
  }

  @Delete(':index')
  deleteTodo(@Param('index', ParseIntPipe) index: number): string[] {
    return this.todoService.deleteTodo(index);
  }
}
