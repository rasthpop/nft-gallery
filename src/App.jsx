import React, { useState } from 'react'
import { useWindowSize } from "@uidotdev/usehooks"
import Header from './components/header'
import MobileHeader from './components/mobileheader'
import AttributeFilter from './components/attrfilter'
import MobileAttributeFilter from './components/mobileattr'
import Gallery from './components/gallery'
import Footer from './components/footer'
import refresh from './assets/refresh.png'
import filter from './assets/filter.png'

function App() {
  const [mobilefilter, setOpenMFilter] = useState(false)
  const size = useWindowSize()

  return (
    <main className='flex flex-col align-center mx-12 mt-8'>
      {size.width < 1023 && mobilefilter ? <MobileAttributeFilter toggleMethod={setOpenMFilter()} toggle={mobilefilter} /> : null}

      {size.width > 1023 ? <Header/> : <MobileHeader/>}
      <div className='border-b-2 border-[#251607] 
        text-xl mt-20 mb-4 pb-1 flex justify-between
        2xl:text-4xl 2xl:mt-24 2xl:mb-6 xl:pb-4'
      >
        <span>filter</span>
        {size.width < 1023 ? 
          <div className='flex items-center gap-2 mb-[-1rem]'>
            <img className='h-4' src={refresh}/>
            <img onClick={() => {setOpenMFilter(!mobilefilter)}} className='h-4' src={filter}/>
            </div> 
        : null}
      </div>
      <div className=' justify-center gap-20 lg:justify-normal flex'>
        {size.width > 1023 ? <div className='w-[25%]'> <AttributeFilter/> </div> : null}
        <div className=''>
          <Gallery/>
        </div>
      </div>
      <Footer/>
    </main>
  )
}




export default App
