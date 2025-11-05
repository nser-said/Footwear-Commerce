"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import products from "../../../../public/data/products";
import { useCart } from "../../../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.products.find((item) => item.id === parseInt(id));

  if (!product) return <p>جارِ التحميل...</p>;

  const handleAddToCart = () => {
    addToCart(product);
    
  };

  return (
    <main dir="rtl" className="p-6 md:p-10 ">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 ">
        <div className="w-64 h-64 md:w-72 md:h-72 mt-4 p-3">
          <Image
            src={product.image}
            alt={product.name}
            width={288}
            height={288}
            className="w-full h-full object-cover rounded-xl shadow-sm"
            priority={true}
          />
        </div>

        <div className="max-w-xl text-right">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">{product.name}</h2>
          <p className="text-sm text-gray-600 mb-2">العلامة التجارية: {product.brand}</p>
          <p className="text-base md:text-lg text-gray-800 mb-4">{product.description}</p>
          <p className="font-bold text-lg md:text-2xl mb-4">
            السعر: {product.price} {product.currency}
          </p>

          <button
            onClick={handleAddToCart}
            className="mt-2 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow"
          >
            أضف إلى السلة
          </button>
        </div>
      </div>
    </main>
  );
}
