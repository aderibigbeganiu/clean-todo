import Todo from "./todo.interface";

export default interface ITodoRepository {
  getTodos(): Promise<Todo[]>;
  getTodo(input: number): Promise<Todo>;
  createTodo(input: { task: string }): Promise<Todo>;
}
