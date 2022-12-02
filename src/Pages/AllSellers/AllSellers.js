
import React, { useEffect, useState } from 'react';

const AllSellers = () => {
    const [sellers, setSellers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users/sellers')
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
                {sellers.map(seller => <tr key={seller.email}>
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