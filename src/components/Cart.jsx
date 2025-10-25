"use client";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function CartDrawer() {
  const { cart, removeFromCart, isCartOpen, toggleCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-5 overflow-auto z-50">
      <button
        onClick={toggleCart}
        className="absolute top-4 left-4 text-gray-600 text-lg"
      >
        ✖️
      </button>
      <h2 className="text-lg font-bold mb-4">🛒 سلة المشتريات</h2>

      {cart.length === 0 ? (
        <p>السلة فارغة حاليًا</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex items-center gap-3 border-b pb-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold">{item.name}</h4>
                <p>{item.price} {item.currency}</p>
                <p>الكمية: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm"
              >
                حذف
              </button>
            </li>
          ))}
        </ul>
      )}

      <Link
        href="/cart"
        onClick={toggleCart}
        className="block mt-5 bg-gray-800 text-white text-center py-2 rounded-md"
      >
        عرض كل السلة
      </Link>
    </div>
  );
}


