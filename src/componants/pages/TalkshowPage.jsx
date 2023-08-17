import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getTalkshow } from '../../redux/actions/action';
import { useNavigate } from 'react-router-dom';


const TalkshowPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const talk = useSelector((state) => state.talkshowReducer);
   
    useEffect(() => {
      dispatch(getTalkshow());
    }, [dispatch]);
  

 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
    <>
      <div className='lg:w-[1300px] mx-w-[auto] mx-auto mt-12 '>
<p className='text-3xl'>Talkshow</p>

<div className='grid grid-cols-3 gap-6 mt-4 mb-6'>
    {talk.length > 0 ? (
         talk.map((element, id) => (
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={id}>
        <Link to="#">
            <img class="rounded-t-lg" src={element.image} className='h-[250px] w-[385px]' alt="" />
        </Link>
        <div class="p-5">
            <Link to="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{element.title}</h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{element.description}</p>
            <p class="inline-flex items-center cursor-pointer px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r  from-blue-400 to-indigo-400 hover:from-indigo-400 hover:to-blue-400 font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 " onClick={() => { navigate(`/talkshow/${element.id}`); scrollToTop();}}>
                Read more
                 <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </p>
        </div>
    </div>
     ))
    )   
    : (
        <p>Loading...</p>
    )}
</div>

      </div>
    </>
  )
}

export default TalkshowPage
