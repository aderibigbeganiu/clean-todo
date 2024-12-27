import Todo from "../entities/todo";
import ITodo from "interface/todo/todo.interface";
import ITodoRepository from "interface/todo/todoRepository.interface";

export default class TodoRepository implements ITodoRepository {
  todos: Todo[] = [];

  async getTodos(): Promise<Todo[]> {
    return this.todos;
  }

  async getTodo(input: number): Promise<ITodo> {
    return this.todos.find((todo) => todo.id === input)!;
  }

  async createTodo(input: { task: string }): Promise<ITodo> {
    const newTodo = new Todo({
      id: this.todos.length + 1,
      task: input.task,
      completed: false,
    });
    this.todos.push(newTodo);
    return newTodo;
  }
}
