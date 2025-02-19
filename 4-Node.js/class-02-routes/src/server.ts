import express from "express";
import { router } from "./routes";

const app = express();

const PORT = process.env.PORT || 3333;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
