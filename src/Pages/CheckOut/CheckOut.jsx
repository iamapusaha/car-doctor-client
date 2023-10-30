import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const CheckOut = () => {
    const service = useLoaderData();
    const { title, price } = service;
    const { user } = useContext(AuthContext)
    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const price = form.price.value;
        const order = {
            customerName: name,
            email,
            date,
            price
        }
        console.log(order);
    }
    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Service Name: {title}</h1>
            <div className="card w-full shadow-2xl bg-base-100">
                <form onSubmit={handleBooking} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} readOnly placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due</span>
                            </label>
                            <input type="text" defaultValue={'$' + price} name="price" className="input input-bordered" required />

                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;