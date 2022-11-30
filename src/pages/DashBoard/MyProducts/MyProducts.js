
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const url = `https://phonemax-server.vercel.app/bookings?email=${user?.email}`;
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className="text-3xl mb-5
            ">My Products</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.itemName}</td>
                                <td>{booking.sellerName}</td>
                                <td>{booking.price}</td>
                                <td>{booking.phone}</td>

                                <td>
                                    {
                                        booking.price && !booking.paid && <Link to={'/dashboard/payment'}><button className='btn btn-secondary btn-sm'>Pay</button></Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-secondary'>paid</span>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;