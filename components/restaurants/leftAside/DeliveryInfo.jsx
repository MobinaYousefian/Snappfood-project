'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import clsx from "clsx";
import {DeliveryInfoModal} from "@/components";
import {closeDeliveryModal, openDeliveryModal} from "@/redux/features/deliveryModalSlice";
import {openAddressModal} from "@/redux/features/headerAddressSlice";
import {useEffect, useRef} from "react";

export const DeliveryInfo = ({resInfo}) => {
    const {selected} = useSelector(state => state.addressModal);
    const {isOpen} = useSelector(state => state.deliveryModal);
    const isInCity = selected.city === resInfo.city

    const dispatch = useDispatch();
    const handleOpenDeliveryModal = () => {
        dispatch(openDeliveryModal());
    }

    const handleOpenAddressModal = () => {
        dispatch(openAddressModal())
    }

    const deliveryRef = useRef(null);

    useEffect(() => {

        const handleClickOutside = (e) => {
            if (deliveryRef.current && !deliveryRef.current.contains(e.target)) {
                dispatch(closeDeliveryModal())
            }
        }
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    },[isOpen]);

    return (
        <>
            <div className={"mb-2 py-1 px-3 bg-surface-light border border-carbon-alphaLight rounded-lg"}>
                <div className={"flex-1 flex justify-between items-center py-3"}>
                    <div className={"flex items-center"}>
                        <Image src={!isInCity ? "/icons/info-red.svg" : "/icons/order-delivery-time.svg"} width={19.92} height={20} alt={"icon"} className={"h-5 w-5 ml-4"}/>
                        <p className={clsx(!isInCity ? "text-alert-main" : "text-carbon-main", "font-iranSans text-xs")}>{ !isInCity ? "خارج از محدوده ارسال فروشگاه" : "دریافت در سریع‌ترین زمان ممکن"}</p>
                    </div>
                    <div onClick={isInCity ? handleOpenDeliveryModal : handleOpenAddressModal} className={"cursor-pointer flex items-center"}>
                        <p className={"font-iRANSansBold text-sm text-accent2-dark"}>{!isInCity ? "تغیر آدرس" : ""}</p>
                        <Image src={"/icons/arrow-down-green.svg"} width={15.92} height={16} alt={"icon"} className={"h-4 w-4 mr-1"}/>
                    </div>
                </div>
            </div>
            <div ref={deliveryRef} className={"relative w-0 h-0"}>
                <DeliveryInfoModal resInfo={resInfo}/>
            </div>
        </>
    )
}