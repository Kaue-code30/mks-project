"use client"

import Header from "@/components/Header";
import ListProducts from "@/components/ListProducts";
import { useState } from "react";

export default function Home() {
  const [cartItems, setCartItems] = useState<number>(0); // Especificando o tipo como number

  return (
    <main className="flex min-h-screen flex-col">
        <Header cartItems={cartItems} />
        <ListProducts updateCart={() => setCartItems(cartItems + 1)} />
    </main>
  );
}
