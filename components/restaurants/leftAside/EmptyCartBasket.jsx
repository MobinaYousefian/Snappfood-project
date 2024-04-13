'use client'
import Image from "next/image";

export const EmptyCartBasket = () => {

    return (
        <div className={"flex flex-col items-center mt-2 pt-12"}>
            <Image src={"/icons/cart-basket.svg"} width={18} height={20} alt={"icon"}/>
            <p className={"font-iranSans text-sm text-inactive-dark mt-6"}>سبد خرید شما خالی است!</p>
        </div>
    )
}