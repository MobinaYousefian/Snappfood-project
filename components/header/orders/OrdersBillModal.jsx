import Image from "next/image";
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";
import {useSelector} from "react-redux";

export const OrdersBillModal = ({pastOrders}) => {
    const {isOpenBill, billId} = useSelector((state) => state.cart);

    const order = pastOrders.filter(({id}) => id === billId);

    if (!isOpenBill) return null;
    return (
        <div className={"flex justify-center items-center fixed inset-0 z-[10000] modal-card-animation"}>
            <div className={"static rounded-xl overflow-y-auto min-w-[25rem] bg-surface-light shadow-sp-modal max-h-[90vh] address-modal-card-animation"}>
                <div className={"items-center h-[56px] w-full relative flex justify-between pl-[56px]"}>
                    <button className={"items-center justify-center flex py-[1px] px-[6px] w-[56px] h-[56px]"}>
                        <Image src={"/icons/close.svg"} width={14} height={14} alt={"icons"} className={"w-3.5 h-3.5"}/>
                    </button>
                    <p className={"font-iRANSansBold text-sm text-carbon-main"}> </p>
                </div>
                <div className={"rounded-md flex flex-col"}>
                    <span className={"my-1 mx-4 font-iRANSansBold text-2xl text-carbon-main"}>فاکتور سفارش</span>
                    <p className={"font-iranSans text-sm text-carbon-light mb-4 mx-[1.125rem]"}>{order.resName}</p>
                    <div>
                        {
                            order.foods.map((item, i) => (
                                <div key={i} className={"items-center justify-between flex border-b-carbon-alphaLight h-12 px-4 border-b-[0.0625rem]"}>
                                    <span className={"font-iranSans text-sm text-carbon-main"}>{item.name}</span>
                                    <div className={"flex items-center flex-row-reverse"}>
                                        <div className={"text-sm text-carbon-main font-iRANSansBold flex items-center mr-0.pb-0.5"}>
                                            {toFarsiNumber(priceFormatting(item.price))}
                                            <span className={"text-carbon-light text-xs font-iranSans mr-0.5"}> تومان</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}