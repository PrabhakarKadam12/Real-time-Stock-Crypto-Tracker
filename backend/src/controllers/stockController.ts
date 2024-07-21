import { Request, Response } from "express";
import Stock from "../models/stockModel";

const getData = async (req: Request, res: Response) => {
  const symbol = req.params.symbol;
  const data = await Stock.find({ symbol }).sort({ timestamp: -1 }).limit(20);
  res.json(data);
};

export { getData };
