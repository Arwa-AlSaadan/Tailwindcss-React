// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import Nav from './components/Nav'
import Cards from './components/Cards'
import Header from './components/Header'
import EndPage from './components/EndPage'

function App() {

  return (
    <>

    <Nav></Nav>





    <div className="flex justify-center">    
    <div className="w-[90vw] flex-col p-10">

    <Header></Header>


       <p className="pt-8 pb-5 text-lg pl-3">Top Categories Of The Month</p>
        <hr/>  
     
    <div className="flex flex-wrap gap-6 justify-center">
    <Cards  src="https://nouthemes.net/html/martfury/img/categories/shop/5.jpg"   title="Electronics"
     des1="TV Televisions"
     des2="Air Conditions"
     des3="Washing Machines"
     des4="Audio & Theaters"
     des5="Office Electronics" 
                
    >

    </Cards>

    <Cards  src="https://nouthemes.net/html/martfury/img/categories/shop/1.jpg"   title="Clothings"
      des1="Wmoens"
      des2="Mens"
      des3="Washing Machines"
      des4="Audio & Theaters"
      des5="Office Electronics" >
     
    </Cards>

    <Cards  src="https://nouthemes.net/html/martfury/img/categories/shop/9.jpg"   title="Computers"
     des1="Desktop PC"
     des2="Labtops"
     des3="PC Gaming"
     des4="Storage & Memory"
     des5="PC Components" >
    </Cards>

    <Cards  src="https://nouthemes.net/html/martfury/img/categories/shop/2.jpg"   title="Home & Kitchen"
         des1="Funitures"
         des2="Decor"
         des3="Cookwares"
         des4="Utensil & Gadgets"
         des5="Garden Tools" >
    </Cards>

    <Cards  src="https://nouthemes.net/html/martfury/img/categories/shop/10.jpg"   title="Healthy & Beauty"
      des1="Makeup"
      des2="Skin Care"
      des3="Hair Care"
      des4="Tools & Equipments"
      des5="Perfurmes" >
    </Cards>

    <Cards  src="https://nouthemes.net/html/martfury/img/categories/shop/6.jpg"   title="Jewelry & Watch"
      des1="Pendant"
      des2="Necklace"
      des3="Watch"
      des4="Bracelets"
      des5="Accessories" >
    </Cards>


    </div> 


    </div>
    </div>

    <EndPage></EndPage>
    

    </>
  )
}

export default App


