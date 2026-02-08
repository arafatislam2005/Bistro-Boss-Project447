import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaHome, FaList, FaListAlt, FaShoppingCart } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";

const DashBoard = () => {
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
                            My Cart
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