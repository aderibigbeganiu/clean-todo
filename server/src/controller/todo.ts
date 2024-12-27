import { RequestHandler } from "express";
import { ITodoInteractor } from "interface/todo/todoInteractor.interface";

export default class TodoController {
  private interactor: ITodoInteractor;

  constructor(interactor: ITodoInteractor) {
    this.interactor = interactor;
  }

  onGetTodos: RequestHandler = async (req, res) => {
    const todos = await this.interactor.getTodos();
    res.status(200).json(todos);
  };

  onGetTodo: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const todo = await this.interactor.getTodo(Number(id));
    if(!todo) {
      res.status(404).json({})
    }
    res.status(200).json(todo);
  };

  onCreateTodo: RequestHandler = async (req, res) => {
    const { task } = req.body;
    const newTodo = await this.interactor.createTodo({ task });
    res.status(201).json(newTodo);
  };
}
