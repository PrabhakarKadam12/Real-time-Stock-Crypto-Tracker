// import { Router } from "express";
// import { getData, fetchData } from "../controllers/stockController";

// const router = Router();

// router.get("/data/:symbol", getData);
// router.post("/fetch/:symbol", fetchData);

// export default router;

import { Router } from "express";
import { getData } from "../controllers/stockController";

const router = Router();

router.get("/data/:symbol", getData);

export default router;
