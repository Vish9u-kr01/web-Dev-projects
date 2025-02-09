import React, { useEffect, useState } from "react";
import axios from "axios";

const CryptoTracker = () => {
  const [coins, setCoins] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCoins(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Crypto Price Tracker</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-4">Coin</th>
              <th className="p-4">Price (USD)</th>
              <th className="p-4">24h Change</th>
              <th className="p-4">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id} className="border-b border-gray-700">
                <td className="p-4 flex items-center">
                  <img src={coin.image} alt={coin.name} className="w-8 h-8 mr-2" />
                  {coin.name} ({coin.symbol.toUpperCase()})
                </td>
                <td className="p-4">${coin.current_price.toLocaleString()}</td>
                <td
                  className={`p-4 ${
                    coin.price_change_percentage_24h >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="p-4">${coin.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTracker;
