/* eslint-disable */
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

export const bookTour = async (tourId) => {
  try {
    const stripe = await loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`);
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.error(err);
  }
};
