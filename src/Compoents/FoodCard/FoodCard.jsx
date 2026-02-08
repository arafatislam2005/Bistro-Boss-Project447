import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart()

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            };

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .catch(error => {
                    console.error("Error adding to cart:", error);
                });
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add items to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirect to login and save the current location
                    navigate('/login', { state: { from: location } });
                }
            });
            // refetch cart to update the cart item
            refetch()
        }
    };

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
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-outline border-0 border-b-4 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-black hover:border-amber-600 font-semibold uppercase"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;