"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PaymentCheckForm() {
  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (card.number && card.name && card.expiry && card.cvv) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f6f7] p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          💳 Payment Checkout
        </h2>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl p-4 mb-6 shadow-md"
        >
          <div className="text-sm">Card Number</div>
          <div className="text-lg font-mono tracking-widest mt-1">
            {card.number || "**** **** **** 1234"}
          </div>
          <div className="flex justify-between items-center mt-4 text-sm">
            <span>{card.name || "CARD HOLDER"}</span>
            <span>{card.expiry || "MM/YY"}</span>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Card Number</label>
            <input
              type="text"
              name="number"
              maxLength="16"
              value={card.number}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-blue-500 transition"
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Card Holder Name</label>
            <input
              type="text"
              name="name"
              value={card.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-blue-500 transition"
              placeholder="John Doe"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-600 mb-1">Expiry Date</label>
              <input
                type="text"
                name="expiry"
                maxLength="5"
                value={card.expiry}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-blue-500 transition"
                placeholder="MM/YY"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-gray-600 mb-1">CVV</label>
              <input
                type="password"
                name="cvv"
                maxLength="3"
                value={card.cvv}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-blue-500 transition"
                placeholder="***"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Pay Now
          </motion.button>
        </form>

        {success && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 text-center text-green-600 font-medium"
          >
            ✅ Payment Successful! Thank you for your purchase.
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
