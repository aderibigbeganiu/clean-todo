import { Router } from "express";
import TodoInteractor from "../interactor/TodoInteractor";
import TodoRepository from "../repository/todo.repository";
import TodoController from "../controller/todo";

const router = Router();

const todoRepository = new TodoRepository();
const todoInteractor = new TodoInteractor(todoRepository);
const todoController = new TodoController(todoInteractor);

router.get("/", todoController.onGetTodos.bind(todoController));
router.get("/:id", todoController.onGetTodo.bind(todoController));
router.post("/", todoController.onCreateTodo.bind(todoController));

export default router;
