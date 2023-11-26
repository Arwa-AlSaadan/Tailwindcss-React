import React from 'react'

export default function Header() {
  return (
    <>

    <div className="flex gap-5 w-[80vw]">

        
    <div className=" w-[50vw]  bg-[url('https://shop.findfast.ng/wp-content/uploads/revslider/home_market_mobile_v2/s4-1b.jpg')]">
  
     <div className="pl-20 pt-16 text-2xl">
     <p>WOODEN</p>
     <p>MINIMALISTIC</p>
     <p>CHAIRS</p>

     <p className="text-sm mt-6">SALE UP TO</p>
     <p className="mt-4 text-green-600">40% Off</p>

     <button className="bg-yellow-400 w-28 mt-3 mb-5 text-lg rounded-md">Shop Now</button>
     </div>

    </div>



    <div  className=" w-[40vw]  bg-contain bg-[url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ51bFS4_7zMhqMwndWSnDHVCrraK0XdNeEAtZbvshLnR3-fxnX')]">
     
     <p className="font-bold text-center mt-8">Giordano</p>
     <p className="text-2xl text-center"> PACK 5 T-SHIRT FOR SUMMER</p>
     <p className="text-center mt-5">Starting at <span className="text-red-600">$99.99</span></p>

    </div>

    </div>

   

    </>
  )
}
