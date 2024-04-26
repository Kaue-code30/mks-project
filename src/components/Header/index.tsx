// Header.tsx
import Image from "next/image";
import vectorCart from "@/assets/Header/VectorCart.svg";
import { useState } from "react";
import CartProduct from "../Cart";
import { ContentProduct } from "../Card";
import { motion } from "framer-motion";

interface HeaderProps {
  cartItems: number;
  contentCart: ContentProduct[];
  updateCartItems: (newCartItems: number) => void; // Adiciona a prop updateCartItems
}

export default function Header({ cartItems, contentCart, updateCartItems }: HeaderProps) {
  const [cartOpen, setCartOpen] = useState(false);

  const handleOpenCart = () => {
    setCartOpen(true);
  };
  const handleCloseCart = () => {
    setCartOpen(false);
  };

  return (
    <header className="w-full overflow-hidden flex items-center justify-center">
      <div className="w-11/12 flex items-center justify-between">
        <div className="w-1/4 flex text-white gap-2 items-end justify-start font-semibold">
          <h1 className="">Electronics </h1>
          <h2 className="pb-3 font-light">Store.</h2>
        </div>
        <motion.div
          animate={{scale: cartItems !== 0 ? 1.2 : 1}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration:0.1}}
          onClick={handleOpenCart}
          className="flex items-center gap-3  cursor-pointer transition-all justify-center h-11 bg-white rounded-lg w-24"
        >
          <motion.div>
            <Image
              className="w-5 "
              src={vectorCart}
              width={100}
              height={100}
              alt="Carrinho de compras"
            />
          </motion.div>
          <motion.p className="font-bold">{cartItems}</motion.p>
        </motion.div>
      </div>
      {cartOpen === true && (
        <CartProduct content={contentCart} closeCart={handleCloseCart} updateCartItems={updateCartItems} />
      )}
    </header>
  );
}
