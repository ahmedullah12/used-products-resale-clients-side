
import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    const [buyers, setBuyers] = useState([])

    useEffect(() => {
        fetch('https://assignment-12-server-steel-delta.vercel.app/users/buyers')
        .then(res => res.json())
        .then(data => {
            setBuyers(data)
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
                {buyers.map((buyer, i) => <tr key={buyer.email}>
                    <th>{i + 1}</th>
                    <td>{buyer.name}</td>
                    <td>{buyer.email}</td>
                </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;