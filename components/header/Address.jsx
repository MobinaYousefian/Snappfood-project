'use client'
import Image from "next/image";
import {closeAddressModal} from "@/redux/features/headerAddressSlice";
import {useDispatch, useSelector} from "react-redux";
import {AddressPlaceholder} from "@/components";

export const Address = () => {

    const {address, isOpen} = useSelector((state) => state.addressModal)
    const dispatch = useDispatch();
    const handleCloseModal = () => {
        dispatch(closeAddressModal())
        document.body.style.overflow = "auto"
    }

    if (!isOpen) return null;

    return (
        <div className={"inset-0 modal-card-animation flex justify-center items-center fixed z-[1000]"}>
            <div
                className={"address-modal-card-animation rounded-xl overflow-hidden max-h-[90vh] bg-surface-light shadow-sp-modal max-w-[640px] w-[90vw]"}>
                <div className={"items-center justify-between flex pl-[56px] h-[56px] relative box-border w-full"}>
                    <button onClick={handleCloseModal}
                            className={"h-full flex justify-center items-center px-[6px] py-[1px] w-[56px]"}>
                        <Image src={"/icons/close.svg"} width={14} height={14} alt={"icon"}
                               className={"h-3.5 w-3.5"}/>
                    </button>
                    <p className={"text-carbon-main text-sm font-iRANSansBold"}>انتخاب آدرس</p>
                    <div></div>
                </div>
                <div className={"p-4 pt-0"}>
                    <section className={"section overflow-auto mb-4 max-h-[60vh]"}>
                        {
                            address.map((item, i) => (
                                <AddressPlaceholder
                                    key={i} item={item}
                                    i={i}
                                    handleCloseModal={handleCloseModal}
                                />
                            ))
                        }
                    </section>
                    <button className={"px-[6px] py-[1px] text-base font-iRANSansBold bg-clip-padding text-accent2-main rounded-md border-transparent border-spBorder w-full min-w-[6.6875rem] box-border transition-socialFooter justify-start h-14 items-center inline-flex"}>
                        <Image src={"/icons/add-green.svg"} width={12} height={12} alt={"icon"}
                               className={"ml-4 w-3 h-3"}/>
                        ساخت آدرس جدید
                    </button>
                </div>
                <form></form>
            </div>
        </div>
    )
}