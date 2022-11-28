import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings`;
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
            ">My Appointment</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>no</th>
                            <th>ProductName</th>
                            <th>Email</th>
                            <th>Resale Price</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.itemName}</td>
                                <td>{booking.email}</td>
                                <td>{booking.price}</td>
                                <td>{booking.location}</td>


                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;