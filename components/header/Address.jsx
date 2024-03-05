'use client'
import Image from "next/image";
import {closeAddressModal} from "@/redux/features/headerAddressSlice";
import {useDispatch, useSelector} from "react-redux";

const Address = () => {

    const {address} = useSelector((state) => state.addressModal)
    const {isOpen} = useSelector((state) => state.addressModal)
    const dispatch = useDispatch();
    const handleCloseModal = () => {
        dispatch(closeAddressModal())
        document.body.style.overflow = "auto"
    }

    if (!isOpen) return null;

    return (
        <div>
            <div className={"inset-0 address-modal-card-animation flex justify-center items-center fixed z-[1000]"}>
                <div
                    className={"address-modal-card-animation2 rounded-xl overflow-hidden max-h-[90vh] bg-surface-light shadow-sp-modal max-w-[640px] w-[90vw]"}>
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
                            <div
                                className={"justify-between items-center flex border-[1px] border-carbon-alphaLight border-solid rounded-[0.375rem] pr-4 py-2.5 relative box-border w-full mb-4"}>
                                <label htmlFor={"address-0"} className={"inline-flex items-center flex-1"}>
                                    <input id={"address-0"} type={"checkbox"} className={"hidden box-border"}/>
                                    <Image src={"/icons/checkBox.svg"} width={22} height={22} alt={"icon"}
                                           className={"cursor-pointer h-[1.375rem] w-[1.375rem] rounded-[50%]"}/>
                                    <div className={"w-[calc(100%-50px)] flex-col flex pr-[10px] cursor-pointer mr-2"}>
                                        <p className={"mb-[5px]"}></p>
                                        <div>
                                            <span className={"text-carbon-light font-iranSans text-sm"}>
                                                {address}
                                            </span>
                                        </div>
                                    </div>
                                </label>
                                <div className={"min-w-4 flex"}>
                                    <button className={"px-[6px] py-[1px] justify-start h-14 flex items-center"}>
                                        <Image src={"/icons/delete.svg"} width={20} height={20} alt={"icon"}
                                               className={"h-[20px] w-[20px] mr-[0.6rem]"}/>
                                    </button>
                                    <button className={"px-[6px] py-[1px] justify-start h-14 flex items-center"}>
                                        <Image src={"/icons/changeValue.svg"} width={20} height={20} alt={"icon"}
                                               className={"h-[20px] w-[20px] mr-[0.6rem]"}/>
                                    </button>
                                </div>
                            </div>
                            <div
                                className={"justify-between last:mb-0 items-center flex border-[1px] border-carbon-alphaLight border-solid rounded-[0.375rem] pr-4 py-2.5 relative box-border w-full mb-4"}>
                                <label htmlFor={"address-1"} className={"inline-flex items-center flex-1"}>
                                    <input id={"address-1"} type={"checkbox"} className={"hidden box-border"}/>
                                    <Image src={"/icons/checkBox.svg"} width={22} height={22} alt={"icon"}
                                           className={"cursor-pointer h-[1.375rem] w-[1.375rem] rounded-[50%]"}/>
                                    <div className={"w-[calc(100%-50px)] flex-col flex pr-[10px] cursor-pointer mr-2"}>
                                        <p className={"mb-[5px]"}></p>
                                        <div>
                                            <span className={"text-carbon-light font-iranSans text-sm"}>
                                                {address}
                                            </span>
                                        </div>
                                    </div>
                                </label>
                                <div className={"min-w-4 flex"}>
                                    <button className={"px-[6px] py-[1px] justify-start h-14 flex items-center"}>
                                        <Image src={"/icons/delete.svg"} width={20} height={20} alt={"icon"}
                                               className={"h-[20px] w-[20px] mr-[0.6rem]"}/>
                                    </button>
                                    <button className={"px-[6px] py-[1px] justify-start h-14 flex items-center"}>
                                        <Image src={"/icons/changeValue.svg"} width={20} height={20} alt={"icon"}
                                               className={"h-[20px] w-[20px] mr-[0.6rem]"}/>
                                    </button>
                                </div>
                            </div>
                        </section>
                        <button
                            className={"px-[6px] py-[1px] text-base font-iRANSansBold bg-clip-padding text-accent2-main rounded-md border-transparent border-spBorder w-full min-w-[6.6875rem] box-border transition-socialFooter justify-start h-14 items-center inline-flex"}>
                            <Image src={"/icons/add-green.svg"} width={12} height={12} alt={"icon"}
                                   className={"ml-4 w-3 h-3"}/>
                            ساخت آدرس جدید
                        </button>
                    </div>
                    <form></form>
                </div>
            </div>
        </div>
    )
}

export default Address;