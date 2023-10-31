import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import BookingItems from "./BookingItems";


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

    const handleDelete = id => {
        const proced = confirm('Are you sure want to delete?')
        if (proced) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('yes,deleted one items')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Service Name</th>
                        <th>Customer Name</th>
                        <th>email</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings.map(booking => <BookingItems
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                        ></BookingItems>)
                    }
                </tbody>


            </table>
        </div>
    );
};

export default Bookings;