import Cover from "../../Home/Home/Shared/Cover/Cover";
import MenuItem from "../../Home/Home/Shared/MenuItem/MenuItem";
import { Link } from 'react-router-dom';





const MenuCategory = ({itmes, title, coverImg}) => {
   
    return (
        <div className="pt-8">
               {title && <Cover img={coverImg} title={title}></Cover>}
             <div className="grid md:grid-cols-2 gap-10 my-16" >
               { itmes.map(item=> <MenuItem
                 key={item._id}
                 item={item}
                 
                 ></MenuItem> ) }
            </div>
           <Link to={`/order/${title}`}>
              <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
             </Link>
        </div>
    );
};

export default MenuCategory;

