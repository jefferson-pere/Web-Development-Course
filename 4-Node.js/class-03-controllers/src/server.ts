import express from "express";
import { router } from "./routes";
import { appErrors } from "./errors/app-errors";

const app = express();

const PORT = process.env.PORT || 3333;

// middleware
app.use(express.json());
app.use(router);

app.use(appErrors);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
