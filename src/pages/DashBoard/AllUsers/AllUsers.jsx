
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecore = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecore.get('/users');
            return res.data;
        }
    });

    const handleMakeAdmin = user => {
        // ADDED LOG: This will prove the button is being clicked
        console.log("Attempting to make admin:", user.name);

        axiosSecore.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log("Server Response:", res.data); // See what MongoDB says
                if (res.data.modifiedCount > 0) {
                    refetch(); // This refreshes the table instantly
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is now an Admin!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => console.log("Error making admin:", err));
    };

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecore.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log("Delete response:", res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire("Deleted!", "User has been removed.", "success");
                        }
                    })
            }
        });
    };

    return (
        <section className="p-4 md:p-8 w-full max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase tracking-wider">All Users</h2>
                <h2 className="text-xl md:text-2xl font-semibold bg-orange-100 text-orange-600 px-6 py-2 rounded-full border border-orange-200">
                    Total Users: {users.length}
                </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="overflow-x-auto">
                    <table className="table w-full border-collapse">
                        <thead className="bg-orange-500 text-white">
                            <tr>
                                <th className="py-4 px-6 text-left">#</th>
                                <th className="py-4 px-6 text-left">NAME</th>
                                <th className="py-4 px-6 text-left">EMAIL</th>
                                <th className="py-4 px-6 text-center">ROLE</th>
                                <th className="py-4 px-6 text-center">ACTION</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {users.map((user, index) => (
                                <tr key={user._id} className="hover:bg-orange-50/50 transition-colors">
                                    <th className="py-4 px-6 font-medium text-gray-500">{index + 1}</th>
                                    <td className="py-4 px-6 text-gray-700 font-medium">{user.name}</td>
                                    <td className="py-4 px-6 text-gray-600">{user.email}</td>
                                    <td className="py-4 px-6 text-center">
                                        {user.role === 'admin' ? (
                                            <span className="badge badge-success gap-2 p-3 font-semibold text-white">Admin</span>
                                        ) : (
                                            <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-sm md:btn-md bg-orange-500 hover:bg-orange-600 text-white border-none shadow-md active:scale-95"
                                            >
                                                <FaUsers className="text-lg" />
                                            </button>
                                        )}
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <button
                                            onClick={() => handleDeleteUser(user)}
                                            className="btn btn-sm md:btn-md bg-red-600 hover:bg-red-700 text-white border-none shadow-md active:scale-95"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AllUsers;