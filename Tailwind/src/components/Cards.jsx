import React from 'react'

export default function 

(props) {
  return (
   
      
        
        <div className="flex bg-white w-80 h-40 border mt-[10px]">
            <img className="h-30" src={props.src}></img>

            <div className="flex-col">
            <p className="p-4">{props.title}</p>

            <div className="flex-col flex-wrap text-xs pl-4">
                <p>{props.des1}</p>
                <p>{props.des2}</p>
                <p>{props.des3}</p>
                <p>{props.des4}</p>
                <p>{props.des5}</p>
                
               
            </div>

            </div>



        </div>


    
  )
}
