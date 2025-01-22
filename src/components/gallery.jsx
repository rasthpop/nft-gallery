import React, {useState} from "react";
import Cell from "./cellcomponent";

export default function Gallery(){
    const data = [
        {
        "Number": 1,
        "Rank": 123,
        },
        {
        "Number": 2,
        "Rank": 2,
        },
        {
        "Number": 3,
        "Rank": 13,
        },
        {
        "Number": 4,
        "Rank": 43,
        },
        {
        "Number": 5,
        "Rank": 122223,
        },

]
    return(
        <div className="grid grid-cols-5 gap-6">
            {data.map((obj) => (
                   <Cell 
                   number = {obj["Number"]}
                   rank = {obj["Rank"]}
                   />
            ))}

        </div>
    )
}