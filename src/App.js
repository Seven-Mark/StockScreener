// import logo from "./logo.svg";
// import "./App.css";
// import Filter from "./Components/filter";
// import jsonData from "./Components/data.json";
// function App() {
//   console.log(jsonData);
//   return (
//     <div className="p-3 h-[100vh] flex">
//       <Filter />
//       <div className="h-full w-[100%] shadow-md rounded-e-xl border border-slate-300">
//         start
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import StockScreener from "./StockScreener";
import logo from "./logo.svg";
import Filter from "./Components/filter";
import jsonData from "./Components/data.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNodes,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const stockData = [
  { name: "NIFTY", price: 1500, change: 10 },
  { name: "NIFTY BANK", price: 2500, change: -5 },
  { name: "BAJFINANCE", price: 7411.5, change: -0.5 },
  { name: "HDFCBANK", price: 600, change: 2 },
  { name: "HINDUNILVR", price: 600, change: 2 },
  { name: "ITC", price: 600, change: 2 },
  { name: "RELIANCE", price: 2319.7, change: -0.02 },
  { name: "SBIN", price: 600, change: 2 },
  { name: "MARUTI", price: 10276.3, change: -0.26 },
  // Add more stock data objects as needed
];

// function App() {
function StockTable() {
  const marqueeRef = useRef(null);
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const resetMarquee = () => {
      marqueeElement.scrollLeft = 0;
    };
    // Simulated API response data (list of dictionaries).

    // Use the dummy data as if it's coming from an API.
  }, []);
  return (
    <div className="h-full flex flex-col">
      {/* MARQUE TEXT START */}
      <div className="bg-black text-white">
        <nav>
          <marquee behavior="scroll" direction="left">
            {stockData.map((stock, index) => (
              <div key={index} className="inline-flex items-center ml-4">
                <span className="font-bold">{stock.name}</span>
                <span className="mx-2">{stock.price}</span>
                {stock.change > 0 ? (
                  <span className="text-green-500">↑ {stock.change}</span>
                ) : stock.change < 0 ? (
                  <span className="text-red-500">↓ {stock.change}</span>
                ) : null}
              </div>
            ))}
          </marquee>
        </nav>
      </div>

      {/* MARQUE TEXT END */}

      <nav class="bg-black mt-0.5">
        <div class="container mx-auto p-2">
          <div class="flex justify-between items-center">
            {/* Logo and company name */}
            <div class="flex items-center">
              <div class="p-2 rounded-full">
                <img
                  src="https://framerusercontent.com/images/AhXF7PhtAtNoAHjm4VdlNG4UPrg.png"
                  alt="Company Logo"
                  class="w-8 h-8"
                ></img>
              </div>
              <h1 class="text-white text-xl font-medium ml-2">Labh.Ai</h1>
            </div>

            {/* Navigation Link */}
            <div class="space-x-5">
              <a href="#" class="text-white font-normal">
                Stocks
              </a>
              <a href="#" class="text-white font-normal">
                All Screens
              </a>
              <a href="#" class="text-white font-normal">
                New Screen
              </a>
            </div>

            {/* search box */}
            <div class="flex items-center space-x-2">
              <div class="text-white">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <input
                type="text"
                placeholder="Search stocks, smallcases, indices, mutual funds,"
                class="bg-gray-700 text-white py-1 px-3 rounded w-80"
              ></input>
              {/* <!-- <div class="text-gray-400">Search something</div> --> */}
            </div>

            {/* Last section */}
            <div class="flex space-x-4">
              <a href="#" class="text-white">
                <FontAwesomeIcon icon={faCircleNodes} /> Social
              </a>
              <a href="#" class="text-white">
                <FontAwesomeIcon icon={faUser} /> Login
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* STOCK CONTENTS AND DETAILS */}
      <div className="h-screen p-3">
        <textarea
          placeholder={`🔍 Type Your Query Here`}
          className="w-full p-1 pl-3 focus:outline-none border border-neutral-300 rounded-t-md"
          rows={1}
        />
        <div className="pb-3 max-h-full h-full  flex">
          <Filter />
          <div className="h-full w-[100%] shadow-md rounded-e-xl border border-slate-300 overflow-auto">
            <StockScreener />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockTable;
