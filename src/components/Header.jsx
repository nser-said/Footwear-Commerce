"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);
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
    <header className="bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* الشعار والقائمة */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-black dark:text-white"
            >
              <svg
                className="h-6 w-6 text-primary"
                fill="currentColor"
                viewBox="0 0 48 48"
              >
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" />
              </svg>
              <h1 className="text-xl font-bold">Footwear</h1>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <a className="nav-link cursor-pointer hover:text-primary" href="/">
                New Arrivals
              </a>
          
              <a className="nav-link cursor-pointer hover:text-primary" href="/contact">
               Contact Us
              </a>
              <a className="nav-link cursor-pointer hover:text-primary" href="/about">
                About Us
              </a>
              <a className="nav-link cursor-pointer hover:text-primary" href="/checkout">
                checkout
              </a>
            </nav>
          </div>

          {/* البحث والسلة والصورة */}
          <div className="flex items-center gap-4">
            <form
              onSubmit={handleSearch}
              className="hidden sm:flex items-center bg-white dark:bg-black/20 rounded-lg shadow-sm px-3"
            >
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none outline-none text-sm py-1"
              />
              <button type="submit" className="text-primary font-bold px-2">
                🔍
              </button>
            </form>

            {/* زر السلة */}
            <button
              onClick={() => setOpen(!open)}
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/90 transition"
            >
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-[2px] rounded-full text-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* صورة المستخدم */}
        
          </div>
        </div>
      </div>
    </header>
  );
}




