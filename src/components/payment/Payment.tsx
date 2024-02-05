import Image from 'next/image';
import checkmark from '../../../public/Primary.svg';
import visa from '../../../public/visa.png';

export default function Payment() {
    return (
        <div>
            <div className="mt-[20px] md:m-[30px] font-semibold text-[28px] md:text-[48px] text-primaryText">Your Payment Details</div>

            <div className="md:ml-[30px] flex flex-col gap-[20px] mt-[20px] md:gap-[30px] md:mt-[30px]">
                <div className="relative flex flex-col gap-2">
                    <div className="text-primaryText font-medium md:text-[24px]">Name on Card</div>
                    <div className="relative">
                        <input className="w-full rounded-[10px] border-2 border-primaryText focus:outline-none p-2 px-4 md:p-4 md:px-6 md:text-[24px]" defaultValue="John Smith" placeholder='Full Name'/>
                        <div className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2">
                            <Image src={checkmark} alt="Checkmark" width={32} height={32} />
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col gap-2">
                    <div className="text-primaryText font-medium md:text-[24px]">Card Number</div>
                    <div className="relative">
                        <input className="w-full rounded-[10px] border-2 border-primaryText focus:outline-none p-2 px-4 md:p-4 md:px-6 md:text-[24px]" defaultValue="" placeholder='XXXX XXXX XXXX XXXX' />
                        <div className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2">
                            <Image src={visa} alt="Checkmark" width={56} height={0} />
                        </div>
                    </div>
                </div>

                <div className='flex flex-row w-full gap-10 md:gap-32'>

                    <div className="flex flex-col gap-2 flex-1">
                        <div className="text-primaryText font-medium md:text-[24px]">Expiry Date</div>
                        <input className="w-full rounded-[10px] border-2 border-primaryText focus:outline-none p-2 px-4 md:p-4 md:px-6 md:text-[24px] text-center" defaultValue="" placeholder='MM/YY' />

                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                        <div className="text-primaryText font-medium md:text-[24px]">CVV</div>
                        <input className="w-full rounded-[10px] border-2 border-primaryText focus:outline-none p-2 px-4 md:p-4 md:px-6 md:text-[24px] text-center" defaultValue="" placeholder='CVV' />
                    </div>

                </div>

                <button className='mt-[20px] md:mt-[30px] w-full bg-highlightBackground border-2 border-primaryText p-[20px] rounded-[10px] hover:opacity-80'>
                    Pay Now
                </button>

            </div>

        </div>
    );
}
