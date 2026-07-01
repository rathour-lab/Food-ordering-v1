import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-[#072b31] px-5 md:px-16 lg:px-26 pt-18  w-full h-screen'>
        <div className='md:flex  '>
          <div className='flex-1'>
            <div className='lg:flex lg:justify-between lg:pr-6 space-x-19 md:border-r border-r-[#ccc] pb-26'>
              <div className='w-full md:w-60  '>
                <img src="https://foodu-react.vercel.app/assets/img/logo-3.png" className='h-15 ' alt="" />

                <p className='py-6  font-medium text-[#ccc]'>Discover culinary delights recipes and  inspiration in our food haven.</p>

                <div className='flex justify-between border-b border-b-white/50'>
                  <p className='font-medium text-white py-4 '>MON - FRI</p><span className='font-medium text-white self-center text-sm'>8:00 AM - 6:00 PM</span>
                </div>
                <div className='flex justify-between'>
                  <p className='font-medium text-white py-4 '>SATURDAY</p><span className='font-medium text-white self-center text-sm'>8:00 AM - 6:00 PM</span>
                </div>
              </div>

              <div className='block md:hidden lg:block'>
                <div className='text-white text-xl font-bold pt-6 lg:pt-1 md:pb-5 lg:pb-0'>Explore</div>
                <ul className='pt-5'>
                  <li className='text-[#ccc] py-2 hover:text-white'><a href="">Home</a></li>
                  <li className='text-[#ccc] py-2 hover:text-white'><a href="">Menu</a></li>
                  <li className='text-[#ccc] py-2 hover:text-white'><a href="">Reservation</a></li>
                </ul>
              </div>

              <div>
                <div className='text-white text-xl font-bold pt-6 lg:pt-1 pb-8  md:pb-5'>Contect Info</div>

                <div className='space-x-3 flex pb-5'>
                  <svg className='size-6 self-center text-[#ccc]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>

                  <p className='text-[#ccc] hover:text-white'><a href="">175 10h Street, Office 375 Berlin, De 21562</a></p>
                </div>

                <div className='space-x-3 flex pb-5'>
                  <svg className='size-6 self-center text-[#ccc] ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>

                  <p className='text-[#ccc] hover:text-white'><a href="">+123 34598768</a></p>
                </div>

                <div className='space-x-3 flex pb-5'>
                  <svg className='size-6 self-center text-[#ccc]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>

                  <p className='text-[#bcb9b9] hover:text-white'><a href="">food@gamil.com</a></p>
                </div>

              </div>
            </div>

          </div>



        <div className=' md:px-10 lg:ps-5'>

         <div className='hidden md:block lg:hidden'>
                <div className='text-white text-xl font-bold pt-6 md:pb-5'>Explore</div>
                <ul className='pt-3'>
                  <li className='text-[#ccc] py-2 hover:text-white'><a href="">Home</a></li>
                  <li className='text-[#ccc] py-2 hover:text-white'><a href="">Menu</a></li>
                  <li className='text-[#ccc] py-2 hover:text-white'><a href="">Reservation</a></li>
                </ul>
              </div>

          <div className='text-white text-2xl font-bold pb-5 pt-0 md:pt-7 lg:pt-0'>Newsletter</div>
          <p className='py-2  font-medium text-[#ccc] w-full lg:w-74'>Join our subscribers list to get the latest  news and special offers.</p>
          <input className='text-[#ccc] border-b pb-3 outline-0 w-full md:w-66 py-5' required type="text" placeholder='Your Email' /><br />
          <button className='font-medium text-white bg-red-700 hover:bg-white hover:text-red-700 rounded-lg mt-3 w-full lg:w-66 cursor-pointer md:px-25 py-3'>Subscribr</button>
          <div className='block md:hidden lg:block flex py-6 md:py-3'>
            <div className='text-white text-lg font-bold pb-5 py-4'>Social Meida : </div>
          <div className='flex  self-center px-2 space-x-2'>
              <a href=""><img className='size-10 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwTR_35iOPD0jq1ap6s3fRkweQ0WPC8ohyfWN4dgwTFKRUkzBOB43-lE&s=10" alt="" /></a>
            <a href=""><img className='size-10 rounded-full' src="https://img.magnific.com/free-vector/instagram-logo_1199-122.jpg?semt=ais_hybrid&w=740&q=80" alt="" /></a>
            <a href=""><img className='size-10 rounded-full' src="https://img.magnific.com/free-psd/social-media-logo-design_23-2151296989.jpg?semt=ais_hybrid&w=740&q=80" alt="" /></a>

          </div>
          </div>

           <div className='hidden md:block lg:hidden  py-6 md:py-3'>
            <div className='text-white text-lg font-bold pb-5 py-4'>Social Meida : </div>
          <div className='flex lg:flex self-center px-2 space-x-2'>
              <a href=""><img className='size-10 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwTR_35iOPD0jq1ap6s3fRkweQ0WPC8ohyfWN4dgwTFKRUkzBOB43-lE&s=10" alt="" /></a>
            <a href=""><img className='size-10 rounded-full' src="https://img.magnific.com/free-vector/instagram-logo_1199-122.jpg?semt=ais_hybrid&w=740&q=80" alt="" /></a>
            <a href=""><img className='size-10 rounded-full' src="https://img.magnific.com/free-psd/social-media-logo-design_23-2151296989.jpg?semt=ais_hybrid&w=740&q=80" alt="" /></a>

          </div>
          </div>
        </div>
        </div>
        <div className='py-6 lg:w-[972px] lg:border-r border-t border-[#ccc] ' >
              <div className='text-center text-[#ccc] font-medium'>© Copyright 2026 Foodu. All Rights Reserved</div>
            </div>
      </div>
    </>
  )
}

export default Footer