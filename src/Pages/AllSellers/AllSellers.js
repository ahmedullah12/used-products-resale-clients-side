
import React, { useEffect, useState } from 'react';

const AllSellers = () => {
    const [sellers, setSellers] = useState([])

    useEffect(() => {
        fetch('https://assignment-12-server-steel-delta.vercel.app/users/sellers')
        .then(res => res.json())
        .then(data => {
            setSellers(data)
        })
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {sellers.map((seller, i) => <tr key={seller.email}>
                    <th>{i + 1}</th>
                    <td>{seller.name}</td>
                    <td>{seller.email}</td>
                </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;