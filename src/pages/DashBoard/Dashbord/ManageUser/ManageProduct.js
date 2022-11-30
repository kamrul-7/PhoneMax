import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../../shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../../Loading/Loading';

const ManageProduct = () => {
    const [deletingProducts, setDeletingProducts] = useState(null);

    const closeModal = () => {
        setDeletingProducts(null);
    }


    const { data: Products, isLoading, refetch } = useQuery({
        queryKey: ['Products'],
        queryFn: async () => {
            try {
                const res = await fetch('https://phonemax-server.vercel.app/Products', {

                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });


    const handleDeleteProducts = Products => {
        fetch(`https://phonemax-server.vercel.app/products/${Products._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Products ${Products.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl">Manage Products: {Products?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Products.map((Products, i) => <tr key={Products._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={Products.image_url} alt="" />
                                    </div>
                                </div></td>
                                <td>{Products.name}</td>
                                <td>{Products.email}</td>
                                <td>{Products.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletingProducts(Products)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProducts && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProducts.name}. It cannot be undone.`}
                    successAction={handleDeleteProducts}
                    successButtonName="Delete"
                    modalData={deletingProducts}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageProduct;