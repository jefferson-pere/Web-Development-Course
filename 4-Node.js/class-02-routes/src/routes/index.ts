import { Router } from "express";

export const router = Router();

router.get("/", (_request, response) => {
  response.json({ name: "Class Routes" });
});
