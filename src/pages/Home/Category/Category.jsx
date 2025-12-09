// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Compoents/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section className='container mx-auto px-4'>
            <SectionTitle 
                subHeading={"---From 11:00am to 10:00pm---"} 
                heading={"ORDER ONLINE"} 
            />
            <Swiper
              
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"

                breakpoints={{
                   
                    320: {
                        slidesPerView: 1, 
                        spaceBetween: 10,
                    },
                 
                    640: {
                        slidesPerView: 2, 
                        spaceBetween: 20,
                    },
                   
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                   
                    1024: {
                        slidesPerView: 4, 
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <img src={slide1} alt="Salads" className='w-full object-cover' />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white text-shadow-lg'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Pizza" className='w-full object-cover' />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white text-shadow-lg'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Soups" className='w-full object-cover' />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white text-shadow-lg'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="Desserts" className='w-full object-cover' />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white text-shadow-lg'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="Salads" className='w-full object-cover' />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white text-shadow-lg'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;