import { Request, Response, NextFunction } from "express";
import { AppError } from "./app-error";

export function appErrors(
  error: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(error);
  res
    .status(error.status || 400)
    .json({ message: error.message || "Game Over!" });
}
