import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user, setUser] = useState({
        name: 'Akabar The Great',
        email: 'akbar@gmail.com',
        Phone: '012839483',
        address: 'Thakurgaon sadar'
    });

    const handleAddressChange = event => {
        console.log(event.target.value);
        const { address, ...rest } = user;
        const newAddress = event.target.value;
        const newUser = {address: newAddress, ...rest };
        console.log(newUser);
        setUser(newUser)
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name}</h2>
            <form>
                <input className='w-100 mb-2' type="text" value={user.name} name='Name' placeholder='Name' required /> <br />
                <input className='w-100 mb-2' type="email"  value={user.email} name='email' placeholder='Email' required /> <br />
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='Service' required /> <br />
                <input className='w-100 mb-2' type="text" onChange={handleAddressChange} value={user.address} name='Address' placeholder='Address' required /> <br />
                <input className='w-100 mb-2' type="text" value={user.Phone}  name='Phone' placeholder='Phone' required /> <br />

                <input className='btn btn-primary' type="submit" value="Place order" />
            </form>
        </div>
    );
};

export default Checkout;