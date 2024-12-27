import Server from "./servers";

async function bootstrap() {
    const server = new Server()
    await server.start()
}

bootstrap()