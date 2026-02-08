import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Item removed from cart.",
                                icon: "success",
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="bg-gray-100 min-h-screen pb-20 md:pb-8">
            {/* Top Stats Bar - Compact on Mobile, Spaced on Desktop */}
            <div className="sticky top-0 z-10 bg-white shadow-md p-4 md:p-6 mb-4 md:mb-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <h2 className="text-lg md:text-2xl font-bold text-gray-500 uppercase tracking-wide">My Cart</h2>
                        <p className="text-sm font-medium text-gray-400">Total Items: {cart.length}</p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto">
                        <h2 className="text-xl md:text-3xl font-extrabold text-orange-600">
                            Total: ${totalPrice.toFixed(2)}
                        </h2>
                        <button
                            disabled={!cart.length}
                            className="btn btn-warning w-full md:w-48 text-white font-bold text-lg shadow-lg disabled:bg-gray-300"
                        >
                            Pay Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-2 md:px-4">
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    {/* DESKTOP TABLE: Visible on md (768px) and up */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="table w-full">
                            <thead className="bg-orange-400 text-white uppercase">
                                <tr>
                                    <th className="py-5 text-center">#</th>
                                    <th>Item</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {cart.map((item, index) => (
                                    <tr key={item._id} className="hover:bg-orange-50 transition-colors">
                                        <td className="text-center font-bold text-gray-400">{index + 1}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-14 h-14">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="font-semibold text-gray-700">{item.name}</td>
                                        <td className="font-bold text-gray-900">${item.price}</td>
                                        <td className="text-center">
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-ghost hover:text-red-600">
                                                <FaTrashAlt className="text-red-500 text-xl" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* MOBILE LIST: Visible on screens smaller than 768px */}
                    <div className="md:hidden flex flex-col divide-y divide-gray-100">
                        {cart.map((item) => (
                            <div key={item._id} className="p-4 flex items-center justify-between hover:bg-gray-50 active:bg-gray-100 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20 shadow-md">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-lg leading-tight mb-1">{item.name}</h3>
                                        <span className="badge badge-outline badge-warning font-bold text-md">${item.price}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleDelete(item._id)}
                                    className="p-4 rounded-full bg-red-50 text-red-500 active:scale-90 transition-transform"
                                >
                                    <FaTrashAlt size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* EMPTY STATE */}
                    {cart.length === 0 && (
                        <div className="py-20 text-center">
                            <div className="text-6xl mb-4">🛒</div>
                            <h3 className="text-xl font-bold text-gray-400">Your cart is empty</h3>
                            <p className="text-gray-400 mt-2">Go back to the shop to add some delicious food!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;