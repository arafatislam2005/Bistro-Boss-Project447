import { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Home/Home/Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrdarTab from '../OrdarTab/OrdarTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
   
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
 
    const { category } = useParams() 
   
    const initialIndex = categories.indexOf(category)
    
    const [tabIndex, setIndex] = useState(initialIndex)
    
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    
    return (
        <div>
             <Helmet><title>Bistro Boss | Order Food</title></Helmet>
            <Cover img={orderCover} title="order Food" ></Cover>
            
          
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>                  
                    <Tab>Dessert</Tab>      
                    <Tab>Drinks</Tab>     
                </TabList>
                <TabPanel> <OrdarTab itmes={salad} ></OrdarTab> </TabPanel>
                <TabPanel> <OrdarTab itmes={pizza} ></OrdarTab> </TabPanel>
                <TabPanel> <OrdarTab itmes={soup} ></OrdarTab> </TabPanel>
                <TabPanel> <OrdarTab itmes={desserts} ></OrdarTab> </TabPanel>
                <TabPanel> <OrdarTab itmes={drinks} ></OrdarTab> </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;