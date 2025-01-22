import {React, useState} from "react";
import Arrow from "../assets/accordion_assets/arrow.svg"
import tick from '../assets/accordion_assets/tick.svg'
import './accordion.css'

export default function Accordion(props){

    const [open, setOpen] = useState(false)
    const [search_arr, setSearch] = useState(props.data)
    const [checkedState, setCheckedState] = useState({})

    function handleCheckboxChange(attr){
      setCheckedState((prevState) => ({
        ...prevState,
        [attr]: !prevState[attr], 
      }))
    }
    function handleInput(event){
        const searchTerm = event.target.value

        const filteredItems = props.data.filter((attr) =>
            attr.toLowerCase().includes(searchTerm.toLowerCase())
            );

        setSearch(filteredItems)
    }

    return(
        <div id={props.title}>
            <div onClick={() => {setOpen(!open)}} className={`cursor-pointer ${props.mobile ? "" : "mb-4"} rounded-full flex text-xl py-2 px-6 bg-[#251607] text-[#FFF0E1]`} key={props.title}>
                <img src={`src/assets/accordion_assets/${props.title}.svg`}/>
                <span className="mr-auto ml-2">{props.title}</span>
                <img className={`opacity-50 transition-transform ${open ? "rotate-180" : ""}`} src={Arrow}/>
            </div>
            {props.mobile ? null : open ? <input 
                onChange={handleInput}
                id="search" type="text"
                className="w-full h-14 rounded-lg py-2 px-10 mb-4 placeholder:text-[#E1E1E1]"
                placeholder="Find by cereal..."
                /> 
                : <></>}
            <div className={`
                    overflow-y-auto 
                    bg-[#251607] 
                    text-[#FFF0E1] 
                    max-h-80
                    ${open ? "p-4 mb-6" : ""}
                    `}>
                {search_arr.map((attr) => (
                    <div key={attr} className={`grid overflow-hidden  ${
                        open
                        // FIX THIS SHIT MAN
                          ? "grid-rows-[1fr] opacity-100 "
                          : "grid-rows-[0fr] opacity-0 max-h-0"
                      }`}>
                        <div className={`flex items-center ${props.mobile ? "mb-4" : "mb-8"}`}>

                            <label className={`relative ${props.mobile ? "w-4 h-4" : "w-6 h-6"}`}>
                                {checkedState[attr] ? <img src={tick} className="cursor-pointer absolute w-6 h-6"/> : null}
                                <input 
                                    checked={checkedState[attr] || false}
                                    onClick={() => {handleCheckboxChange(attr)}}
                                    onChange={() => {}}
                                    id={attr} 
                                    key={attr} 
                                    type="checkbox" 
                                    className="cursor-pointer appearance-none overflow-hidden w-6 h-6 focus:outline-none active:bg-[#FFF0E1]"
                                />
                            </label>
                            <span className={`overflow-hidden ${props.mobile ? "text-[14px] pt-2" :"text-xl"} ml-4 mr-auto pb-1`}>{attr}</span>
                            <span className="">()</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}