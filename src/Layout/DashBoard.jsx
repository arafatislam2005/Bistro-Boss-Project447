import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaHome, FaList, FaListAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import useCart from "../Hooks/useCart";

const DashBoard = () => {
    const [cart] = useCart()
    return (
        <div className="flex">
            {/* Sidebar with orange background */}
            <div className="w-64 min-h-screen bg-orange-400 p-4">
                <ul className="menu">

                    <li>
                        <NavLink
                            to="/dashboard/reservatios"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg !important"
                                    : "flex items-center gap-2 px-4 py-2"
                            }
                        >
                            <FaCalendar />
                            My Reservations
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/userHome"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg !important"
                                    : "flex items-center gap-2 px-4 py-2"
                            }
                        >
                            <FaHome />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/cart"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg !important"
                                    : "flex items-center gap-2 px-4 py-2"
                            }
                        >
                            <FaShoppingCart />
                            My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/review"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg !important"
                                    : "flex items-center gap-2 px-4 py-2"
                            }
                        >
                            <FaAd />
                            My review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/bookings"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg !important"
                                    : "flex items-center gap-2 px-4 py-2"
                            }
                        >
                            <FaList />
                            My Bookings
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg !important"
                                    : "flex items-center gap-2 px-4 py-2"
                            }
                        >
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/order/salad"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg !important"
                                    : "flex items-center gap-2 px-4 py-2"
                            }
                        >
                            <FaSearch />
                            Menu
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;