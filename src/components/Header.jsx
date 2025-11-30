"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const { cart, increaseQuantity, decreaseQuantity, clearCart } = useCart();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  };

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-[900] bg-white dark:bg-gray-900 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 w-full">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 text-black dark:text-white group">

              <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Footwear</h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex items-center gap-6">
                <Link className="hover:text-primary" href="/">New Arrivals</Link>
                <Link className="hover:text-primary" href="/contact">Contact Us</Link>
                <Link className="hover:text-primary" href="/about">About Us</Link>
                <Link className="hover:text-primary" href="/checkout">Checkout</Link>
              </nav>

              {/* Search */}
              <form onSubmit={handleSearch} className="flex items-center bg-gray-200 dark:bg-black/20 rounded-lg px-3">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent border-none outline-none text-sm py-1 w-40"
                />
                <button type="submit" className="text-primary font-bold px-2" aria-label="Search">🔍</button>
              </form>
            </div>

            {/* Right Side (Cart + Menu) */}
            <div className="flex items-center gap-4">

              {/* Cart Button Desktop */}
              <button
                onClick={() => setOpen(true)}
                className="hidden md:flex relative items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/90 transition"
                aria-label="Open shopping cart"
              >
                🛒
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-[2px] rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-3xl text-black dark:text-white hover:text-primary transition-colors"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/50 z-[999] transition-opacity duration-300" onClick={() => setMenuOpen(false)}>
            <div
              className="w-64 sm:w-80 bg-white dark:bg-gray-900 h-full p-5 shadow-xl transform transition-transform duration-300 ease-out"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="text-2xl mb-6 hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)} aria-label="Close menu">✖</button>

              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="flex items-center bg-gray-200 dark:bg-black/20 rounded-lg px-3 mb-6">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent border-none outline-none text-sm py-1 w-full"
                />
                <button type="submit" className="text-primary font-bold px-2" aria-label="Search">🔍</button>
              </form>

              {/* Mobile Nav Links */}
              <ul className="space-y-4 text-lg">
                <li><Link href="/" onClick={() => setMenuOpen(false)}>New Arrivals</Link></li>
                <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
                <li><Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                <li><Link href="/checkout" onClick={() => setMenuOpen(false)}>Checkout</Link></li>
              </ul>

              {/* Mobile Cart */}
              <div className="mt-6">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setOpen(true);
                  }}
                  className="w-full flex items-center gap-3 bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors"
                  aria-label="View shopping cart"
                >
                  🛒 <span>Cart</span>

                  {cartCount > 0 && (
                    <span className="ml-auto bg-red-600 text-xs px-2 py-[2px] rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ================================
         🚀 CART DRAWER (Amazon Style)
      ================================= */}

      {open && (
        <div className="fixed inset-0 bg-black/50 z-[999] transition-opacity duration-300" onClick={() => setOpen(false)}>
          <div
            className="fixed right-0 top-0 h-full w-full sm:w-96 max-w-md bg-white dark:bg-gray-900 shadow-xl p-5 transform translate-x-0 transition-all duration-300 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-white dark:bg-gray-900 pb-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold">Your Cart ({cartCount})</h2>
              <button className="text-2xl hover:text-red-500 transition-colors" onClick={() => setOpen(false)} aria-label="Close cart">✖</button>
            </div>

            {/* Clear All Button */}
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="w-full mb-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-semibold text-sm"
                aria-label="Clear all items from cart"
              >
                Clear All Items
              </button>
            )}

            {/* Items */}
            <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
              {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 border-b pb-3">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover flex-shrink-0" />
                    <div className="flex flex-col flex-grow">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-primary font-bold">${item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-7 h-7 flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md transition-colors font-bold text-lg"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          −
                        </button>
                        <span className="text-sm font-semibold min-w-[30px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-7 h-7 flex items-center justify-center bg-gray-200 hover:bg-primary/90 text-black rounded-md transition-colors font-bold text-lg"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Checkout Button */}
            <button className="mt-5 w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold" aria-label="Proceed to checkout">
              Go to Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
