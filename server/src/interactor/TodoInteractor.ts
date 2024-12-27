import Todo from "entities/todo";
import { ITodoInteractor } from "interface/todo/todoInteractor.interface";
import ITodoRepository from "interface/todo/todoRepository.interface";

export default class TodoInteractor implements ITodoInteractor {
  constructor(private repository: ITodoRepository) {
    this.repository = repository;
  }
  async getTodos(): Promise<Todo[]> {
    return await this.repository.getTodos();
  }

  async getTodo(input: number): Promise<Todo> {
    return await this.repository.getTodo(input)
  }

  async createTodo(input: { task: string }): Promise<Todo> {
    return await this.repository.createTodo(input);
  }
}
