import React from 'react'
import Header from './components/header'
import AttributeFilter from './components/attrfilter'
import Gallery from './components/gallery'
import Footer from './components/footer'
function App() {
  return (
    <main className='flex flex-col align-center mx-12 mt-8'>
      <Header/>
      <span className=' border-b-2 border-[#251607] 
        lg:text-xl lg:mt-12 lg:mb-4 lg:pb-2 
        xl:text-4xl xl:mt-24 xl:mb-6 xl:pb-4'
      >filter</span>
      <div className=' gap-20 flex'>
        <div className='w-[25%]'>
          <AttributeFilter/>
        </div>
        <div className=''>
          <Gallery/>
        </div>
      </div>

      <Footer/>
    </main>
  )
}




export default App
