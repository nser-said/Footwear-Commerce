"use client";
import { useParams } from "next/navigation";
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
    <main style={{ direction: "rtl", padding: "30px" }}>
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "300px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
        <div>
          <h2>{product.name}</h2>
          <p>العلامة التجارية: {product.brand}</p>
          <p>{product.description}</p>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>
            السعر: {product.price} {product.currency}
          </p>
          <button
            onClick={handleAddToCart}
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            أضف إلى السلة
          </button>
        </div>
      </div>
    </main>
  );
}
