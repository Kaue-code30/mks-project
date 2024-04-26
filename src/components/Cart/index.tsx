// Cart.tsx
import Image from "next/image";
import { ContentProduct } from "../Card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import cartGif from "@/assets/cart.svg";

interface CartParams {
  content: ContentProduct[];
  closeCart: () => void;
  updateCartItems: (newCartItems: number) => void;
}

export default function CartProduct({
  content,
  closeCart,
  updateCartItems,
}: CartParams) {
  const [contentProductsList, setContentProducts] = useState(content);

  const handleRemoveProduct = (id: number) => {
    const index = content.findIndex((product) => product.id === id);
    if (index !== -1) {
      content.splice(index, 1);
      updateCartItems(content.length);
    }
  };

  useEffect(() => {
    calcularTotalCarrinho();
  }, []);
  const calcularTotalCarrinho = () => {
    let total = 0;
    contentProductsList.forEach((product) => {
      total += parseFloat(product.price.toString());
    });
    return total.toFixed(2); // Corrigindo para que o total seja formatado com duas casas decimais
  };
  return (
    <motion.div
      transition={{ delay: 0.5 }}
      style={{ left: "100%" }}
      animate={{ left: "75%" }}
      className="absolute Cart z-50 left-0 md:left-3/4 w-[90%] md:w-[25%] h-full top-0"
    >
      <div className="w-full flex flex-col h-full px-5 py-5">
        <div className="w-full flex items-center justify-between">
          <p className="text-white text-2xl font-semibold">
            Carrinho <br /> de compras
          </p>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            onClick={closeCart}
            className="w-10 h-10 text-white flex justify-center items-center cursor-pointer rounded-full bg-black"
          >
            X
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="overflow-auto pt-4 flex flex-col gap-2 h-full"
        >
          {content.length === 0 && (
            <motion.div
              transition={{ delay: 0.5 }}
              style={{ left: "0%" }}
              animate={{ left: "75%" }}
              className="w-full flex flex-col h-full justify-center items-center"
            >
              <motion.p
                transition={{ delay: 0.5 }}
                style={{ left: "0%" }}
                animate={{ left: "75%" }}
                className="text-white text-xl font-semibold"
              >
                Seu carrinho ainda está vazio.
              </motion.p>
              <Image
                className="w-1/2"
                src={cartGif.src}
                alt=""
                width={100}
                height={100}
              />
            </motion.div>
          )}
          {content.map((data) => {
            return (
              <div
                key={data.id}
                className="flex items-center justify-center p-3 rounded-lg shadow-md w-full h-28 bg-white"
              >
                <div
                  onClick={() => handleRemoveProduct(data.id)}
                  className="relative bg-black h-6 w-9 rounded-full top-1 text-white flex items-center justify-center left-[90%] cursor-pointer"
                >
                  X
                </div>
                <div className="w-1/3">
                  <Image
                    className="w-3/4"
                    width={100}
                    height={100}
                    alt="Product photo"
                    src={data.photo}
                  />
                </div>
                <div className="flex  flex-col w-full h-full items-start justify-center">
                  <p className="text-xs w-[60%]">
                    {data.brand} - {data.name}
                  </p>
                  <p>R${data.price}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        <div className="text-white text-xl font-medium">
          Total: R${calcularTotalCarrinho()}
        </div>
        <div className="w-full h-20 mt-2">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className="w-full h-full rounded-xl font-medium bg-white flex items-center justify-center"
          >
            finalizar compra
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
