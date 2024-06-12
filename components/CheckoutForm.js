// components/CheckoutForm.js
'use client';

import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true);

        const res = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"cost": props.props}),
        });

        const data = await res.json();
        console.log(data)


        if (data.id) {
            const { error } = await stripe.redirectToCheckout({
                sessionId: data.id,
            });

            if (error) {
                console.error(error);
            }
        } else {
            console.error('Checkout session creation failed');
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
        
            {/* <CardElement /> */}
            {/* <input required name="name" placeholder='First Name' className='rounded border p-2 border-green-200'></input>
            <input required name="lastname" placeholder='Last Name' className='rounded border p-2 border-green-200'></input>
            <input required name="email" placeholder='Email' className='rounded border p-2 border-green-200'></input>
            <input required name='phone' placeholder='Phone Number' className='rounded border p-2 border-green-200'></input> */}
            <button type="submit" disabled={!stripe || loading}>
                {loading ? 'Processing...' : 'Pay'}
            </button>
        </form>
    );
};

export default CheckoutForm;
