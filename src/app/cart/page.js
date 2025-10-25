"use client";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0)
    return <p style={{ textAlign: "center", marginTop: "50px" }}>السلة فارغة 🛒</p>;

  return (
    <main style={{ padding: "30px", direction: "rtl" }}>
      <h2>🛍️ سلة المشتريات</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
            borderBottom: "1px solid #ddd",
            paddingBottom: "10px",
          }}
        >
          <div>
            <strong>{item.name}</strong> × {item.quantity}
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              background: "red",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
            }}
          >
            حذف
          </button>
        </div>
      ))}
      <button
        onClick={clearCart}
        style={{
          background: "#0070f3",
          color: "#fff",
          padding: "10px 15px",
          border: "none",
          borderRadius: "8px",
        }}
      >
        إفراغ السلة
      </button>
    </main>
  );
}
