import React, {useState} from "react";
import footer1 from '../assets/footer/footer1.svg'
import footer2 from '../assets/footer/footer2.png'
export default function Footer(){
const [moreopen, setOpen] = useState(false)
return(

<footer className="mt-32 mx-8 flex flex-col justify-center">
<div className="gap-0 z-10 grid grid-cols-2 ">
  <div className="flex">
    <div className="w-auto grid">
      <img className="w-[622px]" src={footer1} />
      <header className="w-[622px] flex items-center justify-between h-[64px] text-2xl z-[9999]"> 
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
      </header>
    </div>
    <div className="flex flex-col ml-8 justify-between gap-2">
        <div className="linkobj h-12 w-12 p-1 bg-[#251607]"><img src="/X.png"/></div>
        <div className="linkobj h-12 w-12 p-1 bg-[#251607]"><img src="/Discord.png"/></div>
        <div className="linkobj h-12 w-12 p-1 bg-[#251607]"><img src="/Discord.png"/></div>
    </div>
  </div>
  <img className="border-2 border-[#251607]" src={footer2}/>
</div>
<span className="text-[#251607] text-[180px] footer-desktop:text-[240px] leading-[200px] text-center">SHIBUYA STATION</span>
</footer>
)
}