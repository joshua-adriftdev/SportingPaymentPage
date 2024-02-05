import Image from "next/image";
import { Inter } from "next/font/google";
import Order from "@/components/order/Order";
import Payment from "@/components/payment/Payment";

export default function Home() {
  return (
    <main className={`min-h-screen p-6 md:p-12 bg-primaryBackground text-primaryText`}>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:gap-12">
        <Order/>
        <div className="mt-[30px] md:mt-none"><Payment/></div>
      </div>
    </main>
  );
}
