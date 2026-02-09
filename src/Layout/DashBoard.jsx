import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaEnvelope, FaHome, FaList, FaListAlt, FaSearch, FaShoppingCart, FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import useCart from "../Hooks/useCart";

const DashBoard = () => {
    const [cart] = useCart()

    // TODO: get admin value from database 
    const isAdmin = true
    return (
        <div className="flex">
            {/* Sidebar with orange background */}
            <div className="w-64 min-h-screen bg-orange-400 p-4">
                <ul className="menu">

                    {
                        isAdmin ? <>
                            <li>
                                <NavLink
                                    to="/dashboard/adminHome"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg !important"
                                            : "flex items-center gap-2 px-4 py-2"
                                    }
                                >
                                    <FaHome />
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/addItems"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg !important"
                                            : "flex items-center gap-2 px-4 py-2"
                                    }
                                >
                                    <FaUtensils />
                                    Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/manageItems"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg !important"
                                            : "flex items-center gap-2 px-4 py-2"
                                    }
                                >
                                    <FaList />
                                    Manage Items
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
                                    <FaBook />
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/users"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg !important"
                                            : "flex items-center gap-2 px-4 py-2"
                                    }
                                >
                                    <FaUsers />
                                    All Users
                                </NavLink>
                            </li>
                        </>
                            : <>
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
                            </>
                    }

                    {/* sharig New Link */}
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
                    <li>
                        <NavLink
                            to="/order/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg !important"
                                    : "flex items-center gap-2 px-4 py-2"
                            }
                        >
                            <FaEnvelope />
                            Contact
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