import React, { useState } from 'react';
import { SlPlane } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaLongArrowAltRight } from "react-icons/fa"
import { CiLocationOn } from "react-icons/ci";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { PiPlanetLight } from "react-icons/pi";

const Hero = () => {
  const [name,setName] = useState("Check Availability")
  const handleclick =()=>{
    setName("checked")
  }
  return (
  //  perent div
     <div>
<img src="./favour/tree2.jpg" alt="" srcset="" className=' relative w-full h-screen object-cover' />
    {/* travel and plane logo  */}
   <div className='absolute grid grid-cols-3 top-0 mt-28 ml-64 text-white'>
    <div className='inline-flex items-center  '>
    <SlPlane  className='w-[100px] h-[100px] fill-white'/>
<p className='text-8xl'> Travel</p>
    </div>
    {/* div of main nav */}
  <div className='inline-flex  gap-16 items-center ml-[-220px] font-light '>

  <p className='text-6xl'>Home</p>
   <p className='text-6xl'>About us</p>
     <p className='text-6xl'>Location</p> 
       <p to='/about' className='text-6xl'>About</p>
     <p className='text-6xl'>Contact</p>
     
  </div>
  {/* div of search bar */}
  <div className='items-center flex gap-3 ml-96 pt-5 font-light border-b-[1px] border-white w-full'>
 <p> <CiSearch  className='size-16'/>
    </p>
    
  <p className='text-6xl'> Search </p>
 
  </div>
  {/* div of sub navbar */}
  <div className='absolute top-[120px] flex items-center  gap-x-[40px] right-[-300px] text-4xl  '>
              <p>Login</p>
              <div className='flex items-center '>
                <IoPersonOutline size={40} />
                <span className=''>Sign in</span>
                
                
              </div>
              <div className='flex items-center '>
                <p className=''>EN</p>
                <p><MdKeyboardArrowDown size={50} /></p>
              </div>
              
            </div>
            {/* travelling div */}
     <div className='xl:text-[160px]   absolute top-72 ml-96 pl-40'>
    <p>Travelling Opens The Door Of</p> 
    <p className='text-[140px] text-center'>
      New Learning
    </p>
     </div>
     <div className='absolute bg-white w-[3000px] h-48 ml-48 top-[1000px] rounded-3xl text-black grid grid-cols-5   '>
       <div>
        <p className='text-5xl font-bold ml-7 mt-11 '> where do you want to go</p>
        <p className='text-4xl font-light mt-5 ml-7 inline-flex'>India,mumbiapc at toronto black.69</p>
       </div>


       <div className='ml-48'>
      <p className='text-5xl font-bold  mt-11 '> Check In</p>
      <p className='text-4xl font-light inline-flex gap-6 mt-5 '>
        <p>check a date</p>
      <SlCalender className='size-7 mt-2' />
      </p>
       </div>


       <div className='ml-36'>
      <p className='text-5xl font-bold  mt-11 '> Check out</p>
      <p className='text-4xl font-light inline-flex gap-6 mt-5 '>
        <p>check a date</p>
      <SlCalender className='size-7 mt-2' />
      </p>
       </div> 


       <div className='ml-36'>
      <p className='text-5xl font-bold  mt-11 '>Guest</p>
      <p className='text-4xl font-light inline-flex gap-6 mt-5 '>
        <p>check a date</p>
      <SlCalender className='size-7 mt-2' />
      </p>
       </div> 
      <button  onClick={handleclick} className='bg-red-500 w-[500px] h-28 ml-3 mt-10 rounded-sm text-4xl text-white hover:bg-red-300 inline-flex  items-center]'>
      <p className='text-center pl-20 mt-8'>{name}</p> 
       <FaLongArrowAltRight className='items-center size-16 pt-4 mt-4 ' />
      </button>
       </div>
       <div className=' absolute bg-white h-[600px]  w-[2100px] top-[1600px] text-black left-[550px] inline-flex gap-[50px] shadow-2xl rounded-[30px]  '>
        <div className='grid grid-cols-3 gap-8'>
        <div className='ml-9'>
      <CiLocationOn color='#F13033' size={150} className=' mt-20 ml-40' />
      <p className=' text-4xl ml-16 font-extrabold mt-7'>Search your destination</p>
      <div className='ml-14 mt-10'>
      <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit   </p>
      <p className=' text-center text-2xl'> Placeat quisquam ea fugiat fug bbbbjonv uilom;</p>
      <p className=' text-center text-2xl'>  quisquam ea fugiat fug bbjonv uilom;</p>
      </div>
      
     </div>
   <div className='  '>
     <PiAirplaneTakeoffLight color='#F13033' size={150} className=' mt-20 ml-44 ' />
     <p className=' text-3xl  font-extrabold   mt-7 ml-36'>Get your ticket </p>
     <div className='mt-10'>
     <p className='text-2xl ml-16'>Lorem ipsum dolor sit amet consectetur adipisicing  </p>
      <p className=' text-center text-2xl'> quisquam ea fugiat fug bbbbjonv uilom;</p>
      <p className=' text-center text-2xl'>  quisquam ea fugiat fug bbjonv uilom;</p>
     </div>
    
   </div>
   <div className=''> 
    <PiPlanetLight color='#F13033' size={150} className=' mt-20 ml-44 ' />
    <p className=' text-3xl  font-extrabold  mt-7  ml-24'>Travel Around the world</p>
    <div className='mt-10'>
    <p className='text-2xl ml-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <p className=' text-center text-2xl'> Placeat quisquam ea fugiat fug bbbbjonv uilom;</p>
      <p className=' text-center text-2xl'>  quisquam ea fugiat fug bbjonv uilom;</p>
    </div>
    
    </div>
        </div>
    
       </div>
   </div>

    </div>
  )
}

export default Hero