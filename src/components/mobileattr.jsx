import React, { useEffect, useRef } from "react";
import Accordion from "./acccordion";
import attrs from "../data/all_attributes_filters";

export default function MobileAttributeFilter(props) {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        // props.toggleMethod(!props.toggle)
        console.log("temp")
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="absolute z-[998] top-[66px] w-[80vw] px-2 pb-4 right-0 bg-[#251607]"
      onMouseLeave={() => {
        console.log("Mouse left the div")
      }}
    >
      {Object.entries(attrs).map(([key, value], index) => {
        return (
          <div className={`relative top-[${index * 10}px]`} key={key}>
            <Accordion
              title={key}
              data={value}
              mobile={true}
              index={index}
            />
          </div>
        )
      })}
    </div>
  );
}
