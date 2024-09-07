import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

const stripePromise = loadStripe(
  "sk_test_51Po8bQ00CRSlFa1VYVw19MKDPtIiQ6KIxMIlrAQ46jJa5IirM5ybESBoDgoETKsgd8zP87oy50wDZ5cgDMBwgoAn00m9coPKmO"
);

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      toast.error("Stripe has not loaded yet.");
      return;
    }

    setLoading(true);

    try {
      // Create Payment Intent here and replace this with actual API call
      const { clientSecret } = await fetch("/api/payment_intent", {
        method: "POST",
      }).then((res) => res.json());

      const { error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
          },
        }
      );

      if (confirmError) {
        toast.error(`Payment failed: ${confirmError.message}`);
      } else {
        toast.success("Payment Successful!");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Name
      </label>
      <input
        id="name"
        type="text"
        placeholder="Your Name"
        className="mb-4 border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
        required
      />

      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Email
      </label>
      <input
        id="email"
        type="email"
        placeholder="Your Email"
        className="mb-4 border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
        required
      />

      <label
        htmlFor="card"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Card Details
      </label>
      <CardElement className="border border-gray-300 p-3 rounded-lg mb-4" />

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center justify-center"
      >
        <span className="ml-2">{loading ? "Processing..." : "Pay Now"}</span>
      </button>
    </form>
  );
};

const PaymentPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row px-6 my-36 w-full h-full max-w-screen-lg mx-auto">
      <div className="md:w-2/3 w-full flex items-stretch justify-center mb-8 md:mb-0">
        <img
          src="https://res.cloudinary.com/dpil2pczb/image/upload/v1724323849/jason-briscoe-cwr02zo0gP8-unsplash_rr6tuo.jpg" // Replace with dynamic image URL if available
          alt="Room Image"
          className="w-full h-full object-cover shadow-2xl rounded-s-lg"
        />
      </div>

      <div className="md:w-1/3 w-full flex items-stretch justify-center shadow-2xl border border-l border-gray-200 rounded-e-lg">
        <div className="px-8 py-10 w-full max-w-md flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Room Payment
          </h1>
          <h2 className="text-lg font-semibold text-center text-gray-600 mb-6">
            Room: {/* Room Number */}
          </h2>

          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
