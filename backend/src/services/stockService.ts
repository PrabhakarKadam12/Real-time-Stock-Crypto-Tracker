import axios from "axios";
import Stock from "../models/stockModel";

const symbols = ["bitcoin", "ethereum", "ripple", "litecoin", "cardano"];

const fetchStockData = async () => {
  try {
    const response = await axios.get(process.env.COINGECKO_API_URL!, {
      params: {
        ids: symbols.join(","),
        vs_currencies: "usd",
      },
    });

    const data = response.data;
    const entries = symbols.map((symbol) => ({
      symbol,
      price: data[symbol].usd,
      timestamp: new Date(),
    }));

    await Stock.insertMany(entries);
    console.log("Data successfully stored in MongoDB");
  } catch (error) {
    console.error("Error fetching stock data:", error);
  }
};

export { fetchStockData };
