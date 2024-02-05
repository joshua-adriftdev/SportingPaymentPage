import Image from "next/image";
import photo from "../../../public/photo.png"

interface OrderCardProps {
    event: string,
    block: string,
    row: string,
    seat: string,
    price: string,
}

const OrderCard: React.FC<OrderCardProps> = (props: OrderCardProps) => {
    return (
        <div className="w-full border-[2px] border-primaryText rounded-[10px] md:rounded-[20px] flex flex-row">
            <Image src={photo} alt="alt" width={100} height={100} className="rounded-l-[8px] md:rounded-l-[18px] border-r-[2px] border-r-primaryText md:hidden"/>
            {/* Larger image to be used in md+ screens */}
            <Image src={photo} alt="alt" width={180} height={100} className="rounded-l-[8px] md:rounded-l-[18px] border-r-[2px] border-r-primaryText hidden md:block"/>
            <div className="flex flex-col ml-1 md:ml-4 md:mt-3">
                <div className="font-semibold text-primaryText text-[18px] md:text-[28px]">{props.event}</div>
                <div className="font-semibold text-[14px] md:text-[24px] text-primaryText">Block: <span className="font-normal">{props.block}</span></div>
                <div className="font-semibold text-[14px] md:text-[24px] text-primaryText">Row: <span className="font-normal">{props.row}</span></div>
                <div className="font-semibold text-[14px] md:text-[24px] text-primaryText">Seat: <span className="font-normal">{props.seat}</span></div>
            </div>
        </div>
    )
}

export default OrderCard;