import ITodo from "interface/todo/todo.interface";

export default class Todo {
  public id: number;
  public task: string;
  public completed: boolean = false;
  constructor(todo: ITodo) {
    this.id = todo.id;
    this.task = todo.task;
    this.completed = todo.completed;
  }
}
