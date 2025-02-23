
import express from 'express';
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';

configDotenv();
const app: express.Application = express();


mongoose.connect(process.env.Mongo_URL as string)
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));


const port: number = 5000;

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
app.get('/', (_req, _res) => {
	_res.send("TypeScript With Express");
});

// Server setup
app.listen(port, () => {
	console.log(`TypeScript with Express 
		http://localhost:${port}/`);
});
