import React from 'react'
import wavinghand from '../images/1f44b.png'

export default function ProfilePick(){
     return(
        <div>
            <h1 className="flex">hey 
            <img className=" h-10" src={wavinghand} alt="" />
                 I'm Oil </h1>
                 <div>
                    {/* <img src="" alt="" /> */}
                    {/* <img src="" alt="" /> */}
            <button className='border-solid border-1 border-sky-500 border-full'>about</button>

                 </div>

        </div>
     )
}