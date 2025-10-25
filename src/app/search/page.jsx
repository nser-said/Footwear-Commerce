"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        if (query) {
          const results = data.products.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          );
          setFiltered(results);
        }
      });
  }, [query]);

  return (
    <main style={{ direction: "rtl", padding: "30px" }}>
      <h1>نتائج البحث عن: {query}</h1>
      {filtered.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {filtered.map((shoe) => (
            <div
              key={shoe.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "15px",
                padding: "15px",
                textAlign: "center",
              }}
            >
              <Link
                href={`/products/${shoe.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <h3>{shoe.name}</h3>
                <p>
                  {shoe.price} {shoe.currency}
                </p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>لم يتم العثور على نتائج.</p>
      )}
    </main>
  );
}
