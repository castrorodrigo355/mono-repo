import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./router/router";

class Server {
	constructor() {
		this.port = process.env.PORT || 7000;
		this.app = express();
		this.configRoutes();
	}

	configRoutes() {
		this.app.use(cors());
		this.app.use(morgan("dev"));
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use("/users", router);
	}

	execute() {
		this.app.listen(this.port, () => {
			console.log(`Listen on port ${this.port}`);
		});
	}
}

export default Server;
