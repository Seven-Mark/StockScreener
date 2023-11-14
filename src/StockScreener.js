import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowDown,
  faSort,
} from "@fortawesome/free-solid-svg-icons";

const StockScreener = () => {
  const [stockData, setStockData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/stocks.json") // Assuming the JSON file is in the public directory
      .then((response) => response.json())
      .then((data) => setStockData(data));
  }, []);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedStockData = [...stockData].sort((a, b) => {
    if (sortConfig.key) {
      const keyA = a[sortConfig.key];
      const keyB = b[sortConfig.key];
      if (keyA < keyB) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (keyA > keyB) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
    }
    return 0;
  });

  return (
    <div className="h-full w-full p-4 overflow-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2" onClick={() => handleSort("Row")}>
                Row
              </th>
              <th className="px-4 py-2" onClick={() => handleSort("Name")}>
                Name <FontAwesomeIcon icon={faSort} />
              </th>
              <th className="px-4 py-2" onClick={() => handleSort("SubSector")}>
                Sub Sector <FontAwesomeIcon icon={faSort} />
              </th>
              <th className="px-4 py-2" onClick={() => handleSort("MarketCap")}>
                Market Cap <FontAwesomeIcon icon={faSort} />
              </th>
              <th
                className="px-4 py-2"
                onClick={() => handleSort("ClosePrice")}
              >
                Close Price <FontAwesomeIcon icon={faSort} />
              </th>
              <th className="px-4 py-2" onClick={() => handleSort("PERatio")}>
                PE Ratio <FontAwesomeIcon icon={faSort} />
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedStockData.map((stock, index) => (
              <tr key={index} className="hover:bg-gray-100 text-center">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2 font-semibold">{stock.Name}</td>
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
