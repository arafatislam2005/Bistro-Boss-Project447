// import { useEffect, useState } from "react";

// const useMenu = () => {

//  const [menu, setMenu] = useState([]);
//  const [loading, setLoading] = useState(true)
//     useEffect( () =>{
//         fetch('http://localhost:5000/menu')
//         .then(res => res.json())
//         .then(data => {

//             setMenu(data)
//             setLoading(false)
//         } )
//     }, [])
//    return [menu, loading];
// }


// export default useMenu

import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Replaced localhost with your specific Render URL
        fetch('https://bistro-boss-backend-fc49.onrender.com/menu')
            .then(res => res.json())
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