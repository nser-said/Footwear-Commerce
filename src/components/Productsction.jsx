"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <main
      style={{
        direction: "rtl",
        textAlign: "right",
        padding: "30px",
        backgroundColor: "#f5f6f7",
      }}
    >
      <h1 style={{ marginBottom: "25px" }}>المنتجات الجديدة</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((shoe) => (
          <div
            key={shoe.id}
            onMouseEnter={() => setHovered(shoe.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              border: "1px solid #ddd",
              borderRadius: "15px",
              padding: "15px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow:
                hovered === shoe.id
                  ? "0 8px 25px rgba(0,0,0,0.12)"
                  : "0 2px 8px rgba(0,0,0,0.05)",
              transform:
                hovered === shoe.id ? "translateY(-8px)" : "translateY(0px)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            <Link
              href={`/products/${shoe.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <img
                src={shoe.image}
                alt={shoe.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  transform:
                    hovered === shoe.id ? "scale(1.05)" : "scale(1.0)",
                  transition: "transform 0.3s ease",
                }}
              />
              <h3
                style={{
                  marginTop: "10px",
                  color: hovered === shoe.id ? "#0d46f2" : "#222",
                  transition: "color 0.3s ease",
                }}
              >
                {shoe.name}
              </h3>
              <p
                style={{
                  color: "#555",
                  margin: "5px 0",
                  fontWeight: "500",
                }}
              >
                {shoe.price} {shoe.currency}
              </p>
              <h2
                style={{
                  fontSize: "15px",
                  color: "#0d46f2",
                  marginTop: "8px",
                }}
              >
                عرض التفاصيل
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
