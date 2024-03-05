import Image from "next/image";

export const UserCart = ({user}) => {
    return (
        <div className={"sp-laptop:ml-[0.5625rem] mr-4 relative cursor-pointer flex"}>
            <Image src={"/icons/cart.svg"} width={20} height={20} alt={"icon"} className={"ml-2"}/>
            <p className={"text-carbon-main text-sm font-iRANSansBold ml-2 max-[959px]:hidden"}>سفارش{"\u200c"}ها</p>
        </div>
    )
}