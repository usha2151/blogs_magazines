import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getBlog } from "../redux/actions/action";
import { getMagazine } from '../redux/actions/action';
import { getInterview } from '../redux/actions/action';

const Hero = () => {

    const dispatch = useDispatch();

    const users = useSelector((state) => state.userReducer);
    const mag = useSelector((state) => state.magazineReducer);
    const inter = useSelector((state) => state.interReducer);

  
    useEffect(() => {
      dispatch(getBlog());
      dispatch(getMagazine());
      dispatch(getInterview());
    }, [dispatch]);
  


  return (
    <>
      <div className='lg:w-[1300px] mx-w-[auto] mx-auto mt-12 '>
<p className='text-3xl'>Blogs</p>

<div className='grid grid-cols-4 gap-6 mt-4 mb-6'>
    {users.length > 0 ? (
         users.map((element, id) => (
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={id}>
        <Link to="#">
            <img class="rounded-t-lg" src={element.image} className='h-[200px] w-[350px]' alt="" />
        </Link>
        <div class="p-5">
            <Link to="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{element.title}</h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{element.description}</p>
            <Link to="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r  from-blue-400 to-indigo-400 hover:from-indigo-400 hover:to-blue-400 font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                Read more
                 <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    </div>
     ))
    )   
    : (
        <p>Loading...</p>
    )}
</div>

<div className='flex justify-center'>
<Link to="#" class="inline-flex mb-6 mt-4 items-center px-12 py-3 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r  from-blue-400 to-indigo-400 hover:from-indigo-400 hover:to-blue-400 font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 ">
   View More
</Link>
</div>

<p className='text-3xl'>Magazine</p>
<div className='grid grid-cols-4 gap-6 mt-4 mb-6'>
    {mag.length > 0 ? (
         mag.map((element, id) => (
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={id}>
        <Link to="#">
            <img class="rounded-t-lg" src={element.image} className='h-[200px] w-[350px]' alt="" />
        </Link>
        <div class="p-5">
            <Link to="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{element.title}</h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{element.description}</p>
            <Link to="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r  from-blue-400 to-indigo-400 hover:from-indigo-400 hover:to-blue-400 font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                Read more
                 <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    </div>
     ))
    )   
    : (
        <p>Loading...</p>
    )}
</div>

<div className='flex justify-center'>
<Link to="#" class="inline-flex mb-6 mt-4  items-center px-12 py-3 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r  from-blue-400 to-indigo-400 hover:from-indigo-400 hover:to-blue-400 font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 ">
   View More
</Link>
</div>

<p className='text-3xl'>Interview</p>
<div className='grid grid-cols-4 gap-6 mt-4 mb-6'>
    {inter.length > 0 ? (
         inter.map((elements, id) => (
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={id}>
        <Link to="#">
            <img class="rounded-t-lg" src={elements.image} className='h-[200px] w-[350px]' alt="" />
        </Link>
        <div class="p-5">
            <Link to="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{elements.title}</h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{elements.description}</p>
            <Link to="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r  from-blue-400 to-indigo-400 hover:from-indigo-400 hover:to-blue-400 font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                Read more
                 <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    </div>
     ))
    )   
    : (
        <p>Loading...</p>
    )}

</div>

<div className='flex justify-center'>
<Link to="#" class="inline-flex mb-6 mt-8  items-center px-12 py-3 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r  from-blue-400 to-indigo-400 hover:from-indigo-400 hover:to-blue-400 font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 ">
   View More
</Link>
</div>

      </div>
    </>
  )
}

export default Hero
