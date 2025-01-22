import React, { useState } from "react";


export default function Header(){
    const [moreopen, setOpen] = useState(false)
    return(
        <header className="text-[#251607] z-[9999] flex items-center justify-between w-full h-[85px] 
            lg:pt-8 lg:text-2xl lg:px-4
            xl:pt-14 xl:text-3xl xl:px-10 
        "> 
            <a>Home</a>
            <a>Shibuya Capital</a>
            <a>Incubator</a>
            <div onMouseLeave={() => {setOpen(false)}}>
                <div onMouseEnter={() => {setOpen(true)}} className="flex justify-center more hover:opacity-100">
                    <span className="mr-8 flex">More </span>
                    <svg className={`mt-2 opacity-50 transition-transform ${moreopen ? "rotate-180" : ""}`} width="32" height="32" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.94849 2.19232L9.29319 9.53703L16.6379 2.19232" 
                            stroke-width="2.44824" 
                            stroke-linecap="square"
                        />
                    </svg>
                </div>
                <ul className={`grid overflow-hidden ${
                        moreopen
                          ? "absolute grid-rows-[1fr] opacity-100 "
                          : "grid-rows-[0fr] opacity-0 max-h-0"
                      }`}>
                    <li>gallery</li>
                    <li>giphy</li>
                    <li>tenor</li>
                </ul>
            </div>
            <div className="flex gap-2">
                <div className="linkobj h-14 w-14 p-1 bg-[#251607]"><img src="/Discord.png"/></div>
                <div className="linkobj h-14 w-14 p-1 bg-[#251607]"><img src="/Discord.png"/></div>
                <div className="linkobj h-14 w-14 p-1 bg-[#251607]"><img src="/X.png"/></div>
            </div>
        </header>
    )
}