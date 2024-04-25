import Image from "next/image";
import vectorCart from "@/assets/Header/VectorCart.svg";

interface HeaderProps {
  cartItems: number;
}

export default function Header({ cartItems }: HeaderProps) {
  return (
    <header className="w-full flex items-center justify-center">
      <div className="w-11/12 flex items-center justify-between">
        <div className="w-1/4 flex text-white gap-2 items-end justify-start font-semibold">
          <h1 className="">MKS</h1>
          <h2 className="pb-3 font-light">Sistemas</h2>
        </div>
        <div className="flex items-center hover:opacity-75 gap-3 hover:border-[0.8px] cursor-pointer transition-all hover:border-black hover:shadow-md justify-center h-11 bg-white rounded-lg w-24">
          <Image className="w-5 " src={vectorCart} width={100} height={100} alt="Carrinho de compras" />
          <p className="font-bold">{cartItems}</p>
        </div>
      </div>
    </header>
  );
}
