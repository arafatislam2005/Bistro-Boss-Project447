// import React from 'react';

import { useEffect, useState } from "react";
import SectionTitle from "../../../Compoents/SectionTitle/SectionTitle";
import MenuItem from "../Home/Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopulerMenu = () => {
    const [menu] = useMenu();
   const popular = menu. filter(item => item.category === 'popular')
    // const [Menu, setMenu] = useState([]);
    // useEffect( () =>{
    //     fetch('Menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const populerItems = data.filter(item => item.category === 'popular')
    //         setMenu(populerItems)

    //     })
    // }, [])
    return (
        <section className="mb-12">
            <SectionTitle
            heading="From Our Menu"
            subHeading="Populers Item"
            ></SectionTitle>
           {/*-----------------*/}

            <div className="grid md:grid-cols-2 gap-10 " >
               { popular.map(item=> <MenuItem
                 key={item._id}
                 item={item}
                 
                 ></MenuItem> ) }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
        </section>
    );
};

export default PopulerMenu;