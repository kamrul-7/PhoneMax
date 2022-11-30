import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../shared/ConfirmationModal/ConfirmationModal';

import Loading from '../../Loading/Loading';

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null);
    const closeModal = () => {
        setDeletingUser(null)
    }

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://phonemax-server.vercel.app/users')
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteUser = user => {
        fetch(`https://phonemax-server.vercel.app/users/${user.id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0)

                    toast.success(`User ${user.name} deleted Successfully.`)
                refetch();
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleMakeAdmin = id => {
        fetch(`https://phonemax-server.vercel.app/users/admin`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successful')
                    refetch();
                }
            })
    }
    return (
        <div>
            <h2 className='text-3xl'>All users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr
                                key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-secondary'>Make Admin</button>}</td>
                                <td>
                                    <label onClick={() => setDeletingUser(user)} htmlFor="confirmationModal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingUser && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ones, You can't be undone.`}
                    successAction={handleDeleteUser}
                    modalData={deletingUser}
                    successButtonName='Delete'
                    closeModal={closeModal}></ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;