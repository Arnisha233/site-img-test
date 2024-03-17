import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <div>
           
        <header>
          <div className='flex justify-between'>
            <h1 className='text-[#150B2B] lg:text-3xl font-[700]'>Recipe Calories</h1>
            <div className='flex gap-5 text-[#150B2BB3] text-[16px] font-[400]'>
              <a href="">Home</a>
              <a href="">Recipes</a>
              <a href="">About</a>
              <a href="">Search</a>
            </div>
            <div className='flex gap-5'>
              {/* <img className='lg:block hidden' src="search.svg" alt="" /><input className='bg-[#150B2D0D] rounded-full outline-none py-3 px-6 lg:block hidden' type="text" placeholder='search'/> */}
              
              <label className="input input-bordered flex items-center gap-2  rounded-[50px] lg:bg-[#150B2B0D] py-3 px-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70 lg:block hidden"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
              <input type="text" className="grow outline-none text-[16px] font-[400] lg:block hidden" placeholder="Search" />
              </label>
              <img className='bg-[#0BE58A] p-2 rounded-[50px] lg:block hidden' src="" alt="" />
             <div className='bg-[#0BE58A] p-2 rounded-[50px] lg:block hidden' > <FontAwesomeIcon icon={faArrowLeft} /></div>
              
              
            </div>
          </div>
        </header>
      </div>
        
    );
};

export default NavBar;