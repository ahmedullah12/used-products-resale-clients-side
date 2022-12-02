
import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    const [buyers, setBuyers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users/buyers')
        .then(res => res.json())
        .then(data => {
            setBuyers(data)
        })
    }, [])
    return (
        <div className="overflow-x-auto">
            
        </div>
    );
};

export default AllBuyers;