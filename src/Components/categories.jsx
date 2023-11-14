import React, { useState } from "react";
import Type from "./type";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
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
    <div
      className={` px-2 border-b border-1 hover:bg-slate-50
       border-neutral-200  w-full ${open === true ? "bg-slate-50" : ""}`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex p-2 justify-between "
      >
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
            <div
              className={`p-1 inline-block ${
                props.isSub === true
                  ? "font-light text-slate-600"
                  : "font-semibold"
              }
              `}
            >
              {props.title}
            </div>
          </div>
        </h1>
        <div className="flex items-center">
          {open === true ? (
            <MdExpandLess />
          ) : (
            <MdExpandMore className="text-xl text-slate-400" />
          )}
        </div>
      </div>
      <div
        className={`pb-3 px-2 border-b border-neutral-300 ${
          open === true ? "bg-slate-50" : "hidden"
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
