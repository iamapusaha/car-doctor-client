import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [url])
    return (
        <div>
            <h1>Total number of Booking{bookings.length}</h1>
        </div>
    );
};

export default Bookings;