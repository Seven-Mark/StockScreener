import React, { useState } from "react";
import Type from "./type";

export default function Category(props) {
  const [open, setOpen] = useState(false);
  const [filterData, setFilterData] = useState({});
  const updateFilterData = (key, value) => {
    filterData[key] = value;
    setFilterData(filterData);
    props.updateFunc(props.title, filterData);
  };
  const [isChecked, setCheck] = useState(false);

  return (
    <div className="w-full">
      <div className="flex p-2 border-b border-slate-300 justify-between">
        <h1>
          <div>
            {props.isSub === true ? (
              <input
                onClick={() => {
                  setCheck(!isChecked);
                  props.data.forEach((item) => {
                    updateFilterData(item, isChecked);
                  });
                  console.log(filterData);
                }}
                type="checkbox"
                className="mr-5"
              />
            ) : (
              ""
            )}
            {props.title}
          </div>
        </h1>
        <div onClick={() => setOpen(!open)} className="cursor-pointer pr-2">
          {open === true ? "-" : "+"}
        </div>
      </div>
      <div
        className={`p-2 border-b border-slate-300 ${
          open === true ? "" : "hidden"
        }`}
      >
        <Type
          type={props.type}
          data={props.data}
          updateFunc={updateFilterData}
        />
      </div>
    </div>
  );
}
