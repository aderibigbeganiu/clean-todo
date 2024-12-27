import ExpressServer from "./express-server";
import http from "http";

export default class Server {
  private httpServer: ExpressServer;
  private server: http.Server;
  private httpPort = process.env.PORT || 8000;

  constructor() {
    this.httpServer = new ExpressServer();
    this.server = http.createServer(this.httpServer.getApp());
  }

  public async start(): Promise<void> {
    this.server.listen(this.httpPort, () => {
      console.log(`Server is running on port ${this.httpPort}`);
    });
  }
}
