"use client"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/CheckoutForm';

// Make sure to replace this with your own publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  return (
    <Elements stripe={stripePromise}>
        <CheckoutForm/>
    </Elements>
  );
};

export default CheckoutPage;
