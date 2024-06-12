import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

export async function POST(req) {
  const data = await req.json()

  try {
    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Total Cost',
            },
            unit_amount: data.cost * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: "http://localhost:3000/store/success",
      cancel_url: "http://localhost:3000/store/checkout",
    });
    
    return new Response(JSON.stringify({ id: session.id }), {
      status: 200,
    });



  } catch (err) {
    return new Response(JSON.stringify({ statusCode: 500, message: err.message }), {
      status: 500,
    });
  }
}
