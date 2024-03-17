import React from 'react';

const Banner = () => {
    return (
        <div>
            
            <div className='mx-auto bg-[url(../src/assets/images/Rectangle.png)] h-[600px]  bg-no-repeat bg-center p-32 rounded-[24px]'>
          <h2 className='lg:w-[800px] text-[#fff] mx-auto text-center lg:text-[50px] font-[700]'>Discover an exceptional cooking class tailored for you!</h2>
          <p className='lg:text-[18px] text-[#fff] text-center mx-auto font-[400] lg:w-[900px] mt-6'>This refreshing dish typically includes lean chicken breast, crisp vegetables like lettuce, cucumber, and tomatoes, all tossed in a tangy vinaigrette. While it's a delicious and satisfying option</p>
          <div className='flex gap-6 items-center justify-center mt-9'>
            <button className='lg:py-5 px-[30px] text-[#150B2B] ;g:text-[20px] font-[600] bg-[#0BE58A] rounded-[50px]'>Explore Now</button>
            <button className='lg:py-5 px-[30px] text-[#fff] lg:text-[20px] font-[600] rounded-[50px] border'>Our Feedback</button>
          </div>
        </div>
        </div>
    );
};

export default Banner;