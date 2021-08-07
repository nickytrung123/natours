/* eslint-disable */
import axios from 'axios';
// import { showAlert } from './alerts';
import { loadStripe } from '@stripe/stripe-js';

const stripe = await loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    // showAlert('error', err);
  }
};
