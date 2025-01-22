import React from "react";
import Accordion from "./acccordion";
import attrs from "../data/all_attributes_filters";

export default function AttributeFilter(){
    return(
        <div className="sticky">
            {Object.entries(attrs).map(([key, value]) => (
                <Accordion
                key={key}
                title={key}
                data={value}
                mobile={false}
                />
            ))}
        </div>
    )
}