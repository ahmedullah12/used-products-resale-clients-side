
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({product}) => {
    const {user} = useContext(AuthContext)
    const {_id, productName, resalePrice} = product;


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const productName = form.productName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            name,
            email,
            productName: productName,
            price: resalePrice,
            phone,
            location
        }
        fetch('http://localhost:5000/bookings',{
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Booking Done');
                form.reset()
            }
        })

    }
    return (
        <div>
            <input type="checkbox" id={`"my-modal-${_id}"`} className="modal-toggle" />
                <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={`"my-modal-${_id}"`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Booking</h3>
                    <form onSubmit={handleSubmit}  className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled  className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="productName" type="text" defaultValue={productName} disabled  className="input w-full input-bordered" />
                        <input name="resalePrice" type="text" defaultValue={resalePrice} disabled  className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-primary w-full' type="submit" value="Submit" />
                    </form>
                </div>
                </div>
        </div>
    );
};

export default BookingModal;