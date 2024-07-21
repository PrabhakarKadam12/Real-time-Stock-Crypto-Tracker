import { Router } from "express";
import { getData } from "../controllers/stockController";

const router = Router();

router.get("/data/:symbol", getData);

export default router;
