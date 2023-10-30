
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, title, price, img } = service;
    return (
        <div className="card card-compact min-w-96 bg-base-100 shadow-xl">
            <div className='rounded-lg'>
                <img className='p-4 ' src={img} alt="car" />
            </div>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p className='text-xl font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-error">details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object
};

export default Service;