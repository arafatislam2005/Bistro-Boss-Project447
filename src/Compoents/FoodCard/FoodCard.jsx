import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth"

import Swal from "sweetalert2";
import axios from "axios";

const FoodCard = ({ item }) => {

    const { name, image, price, recipe, _id } = item
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handelAddToCart = food => {
        if (user && user.email) {
            // TODO : add the cart
            console.log(user.email, food)
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:5000/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} Added on the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please Login First! add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (

        <div className="card w-full max-w-sm bg-[#1F2937] text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">

            <figure className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover"
                />
                <p className="absolute top-0 right-0 mr-4 mt-4 px-4 py-1 bg-black text-white font-semibold rounded-lg text-lg">
                    ${price}
                </p>
            </figure>

            <div className="card-body flex flex-col items-center p-6">

                <h2 className="card-title text-xl font-bold text-center mb-2">
                    {name}
                </h2>
                <p className="text-center text-sm text-gray-400 mb-4 h-16 overflow-hidden">
                    {recipe}
                </p>
                <div className="card-actions justify-center mt-4">
                    <button onClick={() => handelAddToCart(item)} className="btn btn-outline border-0 border-b-4 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-black hover:border-amber-600 font-semibold uppercase">
                        Add To Cart
                    </button>
                </div>

            </div>
        </div>
    );
};

export default FoodCard;