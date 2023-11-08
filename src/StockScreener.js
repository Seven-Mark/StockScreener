import React, { useState, useEffect } from "react";

const StockScreener = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/stocks.json") // Assuming the JSON file is in the public directory
      .then((response) => response.json())
      .then((data) => setStockData(data));
  }, []);
  console.log(stockData);

  return (
    <div className="h-[100%] w-full p-4 overflow-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Row</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Sub Sector</th>
              <th className="px-4 py-2">Market Cap</th>
              <th className="px-4 py-2">Close Price</th>
              <th className="px-4 py-2">PE Ratio</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((stock, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{stock.Name}</td>
                <td className="px-4 py-2">{stock.SubSector}</td>
                <td className="px-4 py-2">{stock.MarketCap}</td>
                <td className="px-4 py-2">{stock.ClosePrice}</td>
                <td className="px-4 py-2">{stock.PERatio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockScreener;
