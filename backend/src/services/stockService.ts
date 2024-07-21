// import axios from "axios";
// import Stock from "../models/stockModel";

// const fetchStockData = async (symbol: string) => {
//   // Replace with actual API call
//   const response = await axios.get(`https://api.example.com/stock/${symbol}`, {
//     headers: { Authorization: `Bearer ${process.env.API_KEY}` },
//   });
//   const data = response.data;

//   const stockData = new Stock({
//     symbol: data.symbol,
//     price: data.price,
//   });

//   await stockData.save();
// };

// const getRecentData = async (symbol: string) => {
//   return await Stock.find({ symbol }).sort({ timestamp: -1 }).limit(20);
// };

// export { fetchStockData, getRecentData };

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
