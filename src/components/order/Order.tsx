import OrderCard from "./OrderCard";

export default function Order() {
    return (
        <div className="flex bg-white border-2 border-primaryText rounded-[10px]">
            <div className="w-full flex flex-col m-[20px] md:m-[30px]">
                <div className="font-semibold text-[32px] md:text-[48px] mb-[15px] md:mb-[25px] text-primaryText">Your Order</div>
                <div className="flex flex-col gap-[20px] md:gap-[30px]">
                    <OrderCard event={"2026 World Cup"} block={"Q"} row={"10"} seat={"14"} price={"$100"}/>
                    <OrderCard event={"2026 World Cup"} block={"Q"} row={"10"} seat={"15"} price={"$100"}/>
                </div>

                <div className="mx-[-20px] md:mx-[-30px] mt-[30px] border-t-2 border-primaryText" />

                <div className="mt-[20px] md:mt-[30px] font-semibold text-[34px] md:text-[48px]">Order Total: <span className="font-normal">$200</span></div>
            </div>
        </div>
    )
}