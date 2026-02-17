import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // We define the base URL here to make it easy to update later
        const baseUrl = 'https://bistro-boss-backend-fc49.onrender.com';

        setLoading(true);
        fetch(`${baseUrl}/menu`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setMenu(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching menu:", error);
                setLoading(false);
            });
    }, []);

    return [menu, loading];
}

export default useMenu;