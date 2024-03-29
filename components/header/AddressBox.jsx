'use client'
import Link from "next/link";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {openAddressModal} from "@/redux/features/headerAddressSlice";

export const AddressBox = () => {
    const {address} = useSelector((state) => state.addressModal);
    const title = address[0].title;
    const location = address[0].location;
    const dispatch = useDispatch()

    const handleOpenModal = () => {
        dispatch(openAddressModal());
        document.body.style.overflow = "hidden"
    }

    return (
        <div className={"flex items-center"}>
            <Link href={"/"} className={"ml-10 max-[599px]:hidden"}>
                <Image src={"/icons/snappfood.svg"} width={68} height={34} alt={"snappfood"}/>
            </Link>
            <div onClick={handleOpenModal} className={"cursor-pointer h-10 p-1 inline-flex items-center"}>
                <Image src={"/icons/location.svg"} width={12} height={14} alt={"location"} className={"ml-2.5"}/>
                <div className={"ml-2.5 flex flex-col"}>
                    <p className={"font-iRANSansBold text-sm text-carbon-main"}>{title}</p>
                     <div className={"flex justify-center"}>
                        <span className={"header-address-span overflow-hidden text-carbon-main leading-3 text-[0.625rem] font-iranSans text-ellipsis opacity-60 whitespace-nowrap pt-0.5 max-w-[29vw] min-w-[29vw]"}>
                            {location}
                        </span>
                        <Image src={"/icons/arrow-down-pink.svg"} width={12} height={9} alt={"icon"} className={"w-[12px] mr-[0.6rem]"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}