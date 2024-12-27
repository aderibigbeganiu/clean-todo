import Todo from "entities/todo";

export interface ITodoInteractor {
  getTodos(): Promise<Todo[]>;
  getTodo(input: number): Promise<Todo>;
  createTodo(input: { task: string }): Promise<Todo>;
}
