"use client";

import { ContentProduct } from "@/components/Card";
import Header from "@/components/Header";
import ListProducts from "@/components/ListProducts";
import { useState } from "react";

export default function Home() {
  const [cartItems, setCartItems] = useState<number>(0);
  const [clickedProducts, setClickedProducts] = useState<ContentProduct[]>([]);

  console.log(clickedProducts);

  const handleProductClick = (content: ContentProduct) => {
    if (!clickedProducts.includes(content)) {
      setClickedProducts([...clickedProducts, content]);
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Header contentCart={clickedProducts} updateCartItems={setCartItems} cartItems={clickedProducts.length} />
      <ListProducts
        updateCart={() => setCartItems(cartItems + 1)}
        onProductClick={handleProductClick}
      />
    </main>
  );
}
