import express, { Application } from "express";
import apiRouter from "../routes";

export default class ExpressServer {
  private app: Application;

  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
  }

  private setupMiddleware(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private setupRoutes(): void {
    this.app.use("/api/v1", apiRouter);
  }

  getApp(): Application {
    return this.app;
  }
}
