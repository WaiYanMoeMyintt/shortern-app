import React from 'react'
import "./Slider.css";
import { slide } from './slide';
import { Swiper, SwiperSlide } from "swiper/react";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
import profile5 from "../assets/profile5.png";
import profile6 from "../assets/profile6.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
const Slider = () => {
  return (
     <>
         <div className='slider-title mt-12'>
             <h1 className='text-center'>
                 What Bitly <br/>
                 customer's are <br/>
                 saying
             </h1>
         </div>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop = {true}
        modules={[Pagination]}
        className="mySwiper"
      >
       <SwiperSlide>
                 <div className='review-container'>
                       <div className='review-image'>
                            <img src = {profile1} alt = "profile1" />
                       </div>
                       <div className='review-name'>
                            <h3 className='text-center'>Frank Willoughby</h3>
                       </div>
                       <div className='review-position'>
                             <p className='text-center'>CEO-Entrepreneur</p>
                       </div>
                       <div className='review-message'>
                           <p>
                                I've been using Shortly link shortener <br/>
                                for several years and I love this<br/>
                                software because it's very easy and<br/>
                                intuitive to use, allowing me to make<br/>
                                my work on my sites easier and it's<br/>
                                a great help, always making my links<br/>
                                much more presentable to my audience.
                           </p>
                       </div>
                 </div>
       </SwiperSlide>

       <SwiperSlide>
                 <div className='review-container'>
                       <div className='review-image'>
                            <img src = {profile2} alt = "profile2" />
                       </div>
                       <div className='review-name'>
                            <h3>Thankdeka M.</h3>
                       </div>
                       <div className='review-position'>
                             <p>Project Manager</p>
                       </div>
                       <div className='review-message'>
                           <p>
                              This helps when you want to test<br />
                              effectiveness of any messaging and<br />
                              how users engage with your content.<br />
                           </p>
                       </div>
                 </div>
       </SwiperSlide>

       <SwiperSlide>
                 <div className='review-container'>
                       <div className='review-image'>
                            <img src = {profile3} alt = "profile3" />
                       </div>
                       <div className='review-name'>
                            <h3>Juan Zacarias</h3>
                       </div>
                       <div className='review-position'>
                             <p>Consultant</p>
                       </div>
                       <div className='review-message'>
                            <p>
                            I love the ease of use in the Shortly<br />
                            website, just copy-paste the URL and<br />
                            you will get the shortened URL. Also,<br />
                            the customized URL is really good.<br />
                            </p>
                       </div>
                 </div>
       </SwiperSlide>

       <SwiperSlide>
                 <div className='review-container'>
                       <div className='review-image'>
                            <img src = {profile4} alt = "profile4" />
                       </div>
                       <div className='review-name'>
                            <h3>Jashima W</h3>
                       </div>
                       <div className='review-position'>
                             <p>Founder</p>
                       </div>
                       <div className='review-message'>
                           <p>
                          I have started using Shortly to get <br/>
                          short URLs for my articles, and reviews.  <br/>
                          It really helped me in shortening long <br/>
                          URL into a simple form to post or send <br/>
                          someone easily. Bitly has also been <br/>
                          offering some other features, like  <br/>
                          link management and campaign management. <br/>
                           </p>
                       </div>
                 </div>
       </SwiperSlide>

       <SwiperSlide>
                 <div className='review-container'>
                       <div className='review-image'>
                            <img src = {profile5} alt = "profile5" />
                       </div>
                       <div className='review-name'>
                            <h3>Mary H</h3>
                       </div>
                       <div className='review-position'>
                             <p>UI/UX Designer</p>
                       </div>
                       <div className='review-message'>
                           <p>
                              Shortly supports companies shine by<br />
                              transforming their relations into<br />
                              authoritative tools for marketers <br />
                              and customer care units.<br />
                           </p>
                       </div>
                 </div>
       </SwiperSlide>

       
       <SwiperSlide>
                 <div className='review-container'>
                       <div className='review-image'>
                            <img src = {profile6} alt = "profile6" />
                       </div>
                       <div className='review-name'>
                            <h3>Julia</h3>
                       </div>
                       <div className='review-position'>
                             <p>Student</p>
                       </div>
                       <div className='review-message'>
                           <p>
                          I use Shortly to post articles, landing <br/>
                          pages, and other content on our social <br/>
                          media pages. The service is great as  <br/>
                          it shortens your external links so they <br/>
                          all fit into your social posts. It is <br/>
                          easy to use and it always works well! <br/>
                           </p>
                       </div>
                 </div>
       </SwiperSlide>
      </Swiper>
     </>
  )
}

export default Slider