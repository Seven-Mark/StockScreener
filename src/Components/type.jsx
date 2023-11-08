import { data } from "autoprefixer";
import React, { useRef, useState } from "react";
import Category from "./categories";

export default function Type(props) {
  // const [sublist, setSublist] = useState({});
  const Option = (option) => {
    const [isChecked, setCheck] = useState(false);
    return (
      <div className="flex gap-5 leading-loose">
        <input
          onChange={() => {
            setCheck(!isChecked);
            props.updateFunc(option.option, !isChecked);
          }}
          type="checkbox"
        />
        <p>{option.option}</p>
      </div>
    );
  };

  const Sublist = (pros) => {
    const [sublist, setSublist] = useState({});
    const updatesublist = (key, value) => {
      sublist[key] = value;
      setSublist(sublist);
      props.updateFunc(pros.titl, sublist[pros.titl]);
    };
    const titl = (
      <div>
        <input type="checkbox" className="mr-5" />
        {pros.titl}
      </div>
    );
    return (
      <div className="flex  items-start">
        <Category
          type="list"
          isSub={true}
          title={pros.titl}
          data={pros.data[pros.titl]}
          updateFunc={updatesublist}
        />
      </div>
    );
  };

  const Range = (pros) => {
    const start = useRef();
    const end = useRef();
    const updateRange = (start, end) => {
      props.updateFunc("range", [start, end]);
    };
    return (
      <div className="flex justify-around items-center">
        <input
          ref={start}
          onChange={() => updateRange(start.current.value, end.current.value)}
          type="number"
          className="p-1 w-[40%] focus:outline-none border border-slate-400 rounded-md"
        />
        {"  "}
        to{"  "}
        <input
          ref={end}
          onChange={() => updateRange(start.current.value, end.current.value)}
          type="number"
          className="p-1 w-[40%] focus:outline-none border border-slate-400 rounded-md"
        />
      </div>
    );
  };
  const findSub = (type, data) => {
    if (type === "list") {
      return data.map((option) => {
        return <Option option={option} />;
      });
    } else if (type === "subcat") {
      const newObj = [];
      Object.keys(data).forEach((key) => {
        newObj.push(
          <Sublist titl={key} data={data} updateFunc={props.updateFunc} />
          // <div className="flex  items-start">
          //   <Category
          //     type="list"
          //     title={key}
          //     data={data[key]}
          //     updateFunc={updatesublist}
          //   />
          // </div>
        );
      });
      return newObj;
    } else {
      const newObj = [];
      newObj.push(<Range />);
      return newObj;
    }
  };
  return <div>{findSub(props.type, props.data)}</div>;
}
