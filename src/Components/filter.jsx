import React, { useRef, useState } from "react";
import Category from "./categories";
import jsonData from "./data.json";
export default function Filter() {
  const [filterData, setFilterData] = useState({});
  const updateFilterData = (key, value) => {
    filterData[key] = value;
    setFilterData(filterData);
    console.log(filterData);
  };
  const queryBox = useRef();
  const items = jsonData.map((item) => {
    return (
      <Category
        isSub={false}
        title={item.title}
        type={item.type}
        data={item.data}
        updateFunc={updateFilterData}
      />
    );
  });
  return (
    <div className="text-sm flex flex-col h-full w-[350px] shadow-md rounded-bl-xl border border-neutral-300 overflow-scroll relative">
      <div className="p-4 shadow-sm border-b border-neutral-300">
        <h1 className=" font-bold ">Screener</h1>
        {/* <input
          ref={queryBox}
          placeholder="Type Your Query"
          type="text"
          className="p-1 w-full my-3 focus:outline-none border border-neutral-400 rounded-md"
        /> */}
      </div>
      <div className="h-full   overflow-scroll relative">{items}</div>
      <div className="bg-white w-full shadow-md border border-neutral-300">
        <div
          onClick={() => {
            updateFilterData["query"] = queryBox.current.value;
            console.log(filterData);
          }}
          className="bg-[black] cursor-pointer text-white p-3 m-5 text-center rounded-md"
        >
          Apply Filters
        </div>
      </div>
    </div>
  );
}
