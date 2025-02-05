import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private todo: string[] = ['sleep', 'eat', 'travel'];

  getTodos(): string[] {
    return this.todo;
  }

  getTodoByIndex(index: number): string {
    return this.todo[index];
  }

  createTodo(task: string): string[] {
    this.todo.push(task);
    return this.todo;
  }

  updateTodo(index: number, task: string): string[] {
    this.todo[index] = task;
    return this.todo;
  }

  deleteTodo(index: number): string[] {
    this.todo.splice(index, 1);
    return this.todo;
  }

  
}
