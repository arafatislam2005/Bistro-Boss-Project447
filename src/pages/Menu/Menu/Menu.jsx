// Menu.jsx
import { Helmet } from 'react-helmet-async';
import Cover from '../../Home/Home/Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import PizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import SoupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Compoents/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
// import PopulerMenu from '../../Home/PopulerMenu/PopulerMenu';

const Menu = () => {
     const [menu] = useMenu()
     const desserts = menu. filter(item => item.category === 'dessert')
     const soup = menu. filter(item => item.category === 'soup')
     const salad = menu. filter(item => item.category === 'salad')
     const pizza  = menu. filter(item => item.category === 'pizza')
     const offered  = menu. filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title> 
            </Helmet>
           
           <Cover img={menuImg} title="own menu"></Cover>
           <SectionTitle
           subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
           <MenuCategory itmes={offered} ></MenuCategory>
           <MenuCategory itmes={desserts} title="dessert" coverImg={dessertImg}></MenuCategory>
            <MenuCategory itmes={pizza} title="pizza" coverImg={PizzaImg}></MenuCategory>
            <MenuCategory itmes={salad} title="salad" coverImg={saladImg}></MenuCategory>
            <MenuCategory itmes={soup} title="soup" coverImg={SoupImg}></MenuCategory>
        </div>
    );
};
export default Menu;