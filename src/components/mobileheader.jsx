import React, {useState} from "react";
import burger from '../assets/burger-menu-svgrepo-com.svg'

export default function MobileHeader(){
    const [open, setOpen] = useState(false)
    return(
        <header className="flex items-center justify-end h-[66px] px-6 z-[9999] mx-[-3rem] mt-[-2rem] bg-[#251607]">
            <div onClick={() => {setOpen(!open)}} className="cursor-pointer w-14 h-14"><img src={burger}/></div>
            {open ?
            <ul className="fixed z-[9999] flex flex-col gap-4 items-center top-[64px] w-[100vw] bg-[#251607] text-[#FFF0E1] text-3xl">
                    <li>home</li>
                    <li>shibuya capital</li>
                    <li>incubator</li>
                    <li>gallery</li>
                    <li>giphy</li>
                    <li>tenor</li>
            </ul> : null }
        </header>
    )
}