import FoodCard from "../../../Compoents/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const OrdarTab = ({ itmes }) => {
    const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 p-4'>
            {
                itmes && itmes.map(item => <FoodCard
                    key={item._id}
                    item={item}
                />)
            }
        </div>
    );
};

export default OrdarTab;