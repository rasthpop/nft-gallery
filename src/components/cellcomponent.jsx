import React, {useState} from "react";
import Heart from "../assets/Heart.png"

export default function Cell(props){
    const [open, setOpen] = useState(false)
    return(
        <div onClick={() => {setOpen(!open)}} className="cursor-pointer">
            <div className="text-lg bg-green-700 h-[150px] w-[150px] md:h-[180px] md:w-[180px]  2xl:h-[200px] 2xl:w-[200px] rounded-2xl">
                <img/>
            </div>
            <div className="flex justify-between mt-2">
                <div className="p-2 rounded-sm flex bg-[#E69AA4] h-6 items-center">
                    <img className=" object-contain h-2 mr-1 " src={Heart}/>
                    <span className="pb-1 text-sm">Rank {props.rank}</span>
                </div>
                <div className="flex flex-col">
                    <span className="leading-6">shibuyan</span>
                    <span className="text-right leading-3 ">NO {props.number}</span>
                </div>
            </div>
        </div>
    )
}