// import React from 'react';
import SectionTitle from '../../../../Compoents/SectionTitle/SectionTitle';
import FeaturedImg from '../../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='Featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-8 md:px-36'>
                <div className="mb-6 md:mb-0"> 
                    <img src={FeaturedImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase' >Where We get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi omnis, saepe inventore architecto
                        cumque odit, aspernatur consequatur in obcaecati ipsam eum ex nihil illum sed adipisci veniam
                        sequi, reprehenderit sit nam? Eaque libero facere sed inventore debitis. Repudiandae, 
                        consequuntur illum vitae necessitatibus, voluptate sint ducimus praesentium iure impedit
                        reiciendis rem?</p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;