import React, { useState } from 'react';
// import React from 'react'
import { CiHome } from "react-icons/ci";
import { PiAirplaneTaxiingLight } from "react-icons/pi";
import { PiSignpostLight } from "react-icons/pi";
import { BiSolidHeart } from "react-icons/bi";
import { FaStar } from "react-icons/fa6"
import { IoMdCheckmark } from "react-icons/io";
import { CiClock2 } from "react-icons/ci"
import { FaLongArrowAltRight } from "react-icons/fa"

const Next = () => {
  const [name,setName] = useState("Book now")
  const handleclick =()=>{
    setName("BOOKED")
  }
  return (
    <div className='mt-[600px]'>
<p className='text-9xl text-center text-slate-900'>We Provide Best Solution</p>
<p className='text-9xl text-center text-slate-900'> For Your Vacation</p>
    <div className='grid grid-cols-3  ml-[450px] mt-14'>
        <div className=''>
        <CiHome size={110} color='#F13033' className='ml-72' />
        <p className='text-7xl mt-5'>Search Your Destination</p>
       
        </div>
        <div className=''>
        <PiAirplaneTaxiingLight size={110} color='#F13033 ' className='ml-64' />
        <p className='text-7xl mt-5 '>Search Your Destination</p>
        
        </div>
        <div>
        <PiSignpostLight size={110} color='#F13033 ' className='ml-72'/>
        <p className='text-7xl mt-5 '>Search Your Destination</p>
       
        </div>
       
    </div>
    <div className=' grid grid-cols-3 mt-7'>
        <p className='text-3xl ml-80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  , sunt error et    </p>
        <p className='text-3xl ml-56 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  , sunt error et   </p>
        <p className='text-3xl ml-32 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  , sunt error et   </p>
    </div>
    <div className=' grid grid-cols-3 mt-3'>
        <p className='text-3xl ml-80 text-center'> dolor sit amet consectetur adipisicing elit.  , sunt error et    </p>
        <p className='text-3xl ml-80 '>dolor sit amet consectetur adipisicing elit.  , sunt error et   </p>
        <p className='text-3xl ml-60 '>dolor sit amet consectetur adipisicing elit.  , sunt error et   </p>
    </div>
    <div className=' grid grid-cols-3 mt-3'>
        <p className='text-3xl ml-80 text-center'>  sit amet consectetur adipisicing elit.  , sunt error et    </p>
        <p className='text-3xl ml-96 '> sit amet consectetur adipisicing elit.  , sunt error    </p>
        <p className='text-3xl ml-64 '> sit amet consectetur adipisicing elit.  , sunt error et   </p>
    </div>
    <div className=' grid grid-cols-3 mt-16'>
        <p className='text-3xl ml-80 text-center'>  choose prenium mountain    </p>
        <p className='text-3xl ml-96 '>  choose prenium Transport     </p>
        <p className='text-3xl ml-60 '>  choose prenium guilde  </p>
    </div>
  <div className='mt-64 '>
  <p className='text-slate-900 text-9xl text-center font-bold'>Trending Of The Year </p>
  {/* <div className='rounded-full size-20 bg-red-500 items-center left-4 '><IoIosArrowBack size={90} className=' place-content-start  fill-white ' /></div>   */}
  </div>
<div className='mt-28 ml-96 grid lg:grid-cols-3  gap-0'>
<div className='bg-white shadow-2xl w-[900px] h-[1100px] rounded-[50px]'>
<img src="./favour/ocean.jpg" alt="" srcset="" className='rounded-[50px] w-[800px]  ml-12 mt-8' />
<div className='inline-flex gap-72'>
<div className=''>
      <p className=' flex gap-[208px] font-[600]   text-[50px] ml-12 mt-6'> Travel Tour Ocean</p>
      <p className=' text-[24px] text-[#7B7575] ml-12'>Hiking in the forest</p>
</div>
<BiSolidHeart size={70} color='#F13033' className='mt-14' />
</div>
<div className=' pt-[10px] flex gap-[430px] items-center justify-center text-[14px] font-medium ml-0 mt-8 text-[#7B7575]'>
              <p className='text-[65px] ml-0  '>From </p>
              <p className=' flex'>
                <FaStar color='#FFD700' size={40} />
                <FaStar color='#FFD700' size={40} />
                <FaStar color='#FFD700' size={40} />
                <FaStar color='#FFD700' size={40} />
                <FaStar color='#FFD700' size={40} />
              </p>
            </div>
            <div className=' flex gap-[515px] items-center justify-center'>
              <p className=' font-bold text-[#2A303E] text-[35px]'>$452.40 </p>
              <p className='  text-[#7B7575] text-[25px]'>6.2(Reviews)</p>
            </div>
            <div className=' flex gap-[515px] items-center justify-center'>
              <p className=' font-bold text-[#2A303E] text-[35px]'>$452.40 </p>
              <p className='  text-[#7B7575] text-[25px]'>6.2(Reviews)</p>
            </div>
            <div className=' pt-[10px]'>
              <p className=' flex gap-[5px] items-center text-[35px]  ml-14 text-[#7B7575]'><CiClock2 color='#F13033' size={30} /> 5 days </p>
            </div>

            <div className=' flex gap-[210px] pt-[10px] text-[35px] ml-14 text-[#7B7575]'>
              <p className=' flex items-center gap-[5px] text-[35px]'><IoMdCheckmark color='#F13033 ' size={30} /> Free guide </p>
              <p className=' flex items-center gap-[5px] text-[35px]'><IoMdCheckmark color='#F13033'  size={30}/> Free travel equipment</p>
            </div>
</div>
<div>
<div className='bg-white shadow-2xl w-[900px] h-[1100px] rounded-t-[50px]'>
<img src="./favour/forest.jpg" alt="" srcset="" className='rounded-[50px] w-[800px]  ml-14 mt-9' />
<div className='inline-flex gap-72'>
<div className=''>
      <p className=' flex gap-[208px] font-[600]   text-[50px] ml-12 mt-6'> Travel Tour forest</p>
      <p className=' text-[24px] text-[#7B7575] ml-12'>Hiking in the forest</p>
</div>
<BiSolidHeart size={70} color='#F13033' className='mt-14' />
</div>
<div className=' pt-[10px] flex gap-[430px] items-center justify-center text-[14px] font-medium ml-0 mt-8 text-[#7B7575]'>
              <p className='text-[65px] ml-0  '>From </p>
              <p className=' flex'>
                <FaStar color='#FFD700' size={40} />
                <FaStar color='#FFD700' size={40} />
                <FaStar color='#FFD700' size={40} />
                <FaStar color='#FFD700' size={40} />
                <FaStar color='#FFD700' size={40} />
              </p>
            </div>
            <div className=' flex gap-[515px] items-center justify-center'>
              <p className=' font-bold text-[#2A303E] text-[35px]'>$452.40 </p>
              <p className='  text-[#7B7575] text-[25px]'>6.2(Reviews)</p>
            </div>
            <div className=' flex gap-[515px] items-center justify-center'>
              <p className=' font-bold text-[#2A303E] text-[35px]'>$452.40 </p>
              <p className='  text-[#7B7575] text-[25px]'>6.2(Reviews)</p>
            </div>
            <div className=' pt-[10px]'>
              <p className=' flex gap-[5px] items-center text-[35px]  ml-14 text-[#7B7575]'><CiClock2 color='#F13033' size={30} /> 5 days </p>
            </div>

            <div className=' flex gap-[210px] pt-[10px] text-[35px] ml-14 text-[#7B7575]'>
              <p className=' flex items-center gap-[5px] text-[35px]'><IoMdCheckmark color='#F13033 ' size={30} /> Free guide </p>
              <p className=' flex items-center gap-[5px] text-[35px]'><IoMdCheckmark color='#F13033'  size={30}/> Free travel equipment</p>
            </div>
            
</div>
<div>
    <button onClick={handleclick} className='bg-red-500 w-[900px] h-36 top-10 rounded-b-[20px] items-center  text-white flex gap-4  hover:bg-red-400 '>
        <p className='text-6xl ml-64' >{name}</p>
        
    <FaLongArrowAltRight className='items-center size-24  pt-4 mt-2 ' />
    </button>
</div>
</div>

<div className='bg-white shadow-2xl w-[900px] h-[1100px] rounded-[50px]'>
<img src="./favour/mount.jpg" alt="" srcset="" className='rounded-[50px] w-[800px]  ml-14 mt-8' />
<div className='inline-flex gap-72'>
<div className=''>
      <p className=' flex gap-[208px] font-[600]   text-[50px] ml-12 mt-6'> Travel Tour Mountain</p>
      <p className=' text-[24px] text-[#7B7575] ml-12'>Hiking in the forest</p>
</div>
<BiSolidHeart size={70} color='#F13033' className='mt-14' />
</div>
<div className=' pt-[10px] flex gap-[430px] items-center justify-center text-[14px] font-medium ml-0 mt-8 text-[#7B7575]'>
              <p className='text-[65px] ml-0  '>From </p>
              <p className=' flex'>
                <FaStar color='#FFD700' size={40} />
                <FaStar color='#FFD700' size={40} />
                <FaStar color='#FFD700' size={40} />
                <FaStar color='#FFD700' size={40} />
                <FaStar color='#FFD700' size={40} />
              </p>
            </div>
            <div className=' flex gap-[515px] items-center justify-center'>
              <p className=' font-bold text-[#2A303E] text-[35px]'>$452.40 </p>
              <p className='  text-[#7B7575] text-[25px]'>6.2(Reviews)</p>
            </div>
            <div className=' flex gap-[515px] items-center justify-center'>
              <p className=' font-bold text-[#2A303E] text-[35px]'>$452.40 </p>
              <p className='  text-[#7B7575] text-[25px]'>6.2(Reviews)</p>
            </div>
            <div className=' pt-[10px]'>
              <p className=' flex gap-[5px] items-center text-[35px]  ml-14 text-[#7B7575]'><CiClock2 color='#F13033' size={30} /> 5 days </p>
            </div>

            <div className=' flex gap-[210px] pt-[10px] text-[35px] ml-14 text-[#7B7575]'>
              <p className=' flex items-center gap-[5px] text-[35px]'><IoMdCheckmark color='#F13033 ' size={30} /> Free guide </p>
              <p className=' flex items-center gap-[5px] text-[35px]'><IoMdCheckmark color='#F13033'  size={30}/> Free travel equipment</p>
            </div>
</div>

</div>
 
    </div>
    
  )
}

export default Next