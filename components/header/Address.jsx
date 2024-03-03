'use client'
import Image from "next/image";
import {store} from "@/redux/store";
import {closeAddressModal} from "@/redux/features/headerAddressSlice";
import {useDispatch} from "react-redux";

const Address = () => {

    const isOpen = store.getState().addressModal.isOpen;
    const address = store.getState().addressModal.address;
    const dispatch = useDispatch();
    const handleCloseModal = () => {dispatch(closeAddressModal())}


    if (!isOpen) return null;

    return (
        <div>
            <div className={"inset-0 animate-[0.3s_ease_0s_1_normal_forwards_running_modal-animation] flex justify-center items-center fixed z-[1000]"}>
                <div className={"address-modal-card-animation2 rounded-xl overflow-hidden max-h-[90vh] bg-surface-light shadow-sp-modal max-w-[640px] w-[90vw]"}>
                    <div className={"items-center justify-between flex pl-[56px] h-[56px] relative box-border w-full"}>
                        <button onClick={handleCloseModal} className={"h-full flex justify-center items-center px-[6px] py-[1px] w-[56px]"}>
                            <Image src={"/icons/close.svg"} width={14} height={14} alt={"icon"} className={"h-3.5 w-3.5"}/>
                        </button>
                        <p className={"text-carbon-main text-sm font-iRANSansBold"}>انتخاب آدرس</p>
                        <div> </div>
                    </div>
                    <div className={"p-4 pt-0"}>
                        <section className={"overflow-auto mb-4 max-h-[60vh]"}>
                            <div className={"justify-between last:mb-0 items-center flex border-[1px] border-carbon-alphaLight border-solid rounded-[0.375rem] pr-4 py-2.5 relative box-border w-full mb-4"}>
                                <label htmlFor={"select-address"} className={"inline-flex items-center flex-1"}>
                                    <input id={"select-address"} type={"checkbox"} className={"hidden box-border"}/>
                                    <Image src={"/icons/checkBox.svg"} width={22} height={22} alt={"icon"} className={"cursor-pointer h-[1.375rem] w-[1.375rem] rounded-[50%]"}/>
                                    <div className={"flex-col flex pr-[10px] cursor-pointer mr-2 w-[calc(100% - 55px)]"}>
                                        <div>
                                        <span className={"text-carbon-light font-iranSans text-sm"}>
                                            {address}
                                        </span>
                                        </div>
                                    </div>
                                </label>
                                <div className={"min-w-4 flex"}>
                                    <button className={"px-[6px] py-[1px] justify-start h-14 flex items-center"}>
                                        <Image src={"/icons/delete.svg"} width={20} height={20} alt={"icon"} className={"h-[20px] w-[20px] mr-[0.6rem]"}/>
                                    </button>
                                    <button className={"px-[6px] py-[1px] justify-start h-14 flex items-center"}>
                                        <Image src={"/icons/changeValue.svg"} width={20} height={20} alt={"icon"} className={"h-[20px] w-[20px] mr-[0.6rem]"}/>
                                    </button>
                                </div>
                            </div>
                        </section>
                        <button className={"px-[6px] py-[1px] text-base font-iRANSansBold bg-clip-padding text-accent2-main rounded-md border-transparent border-spBorder w-full min-w-[6.6875rem] box-border transition-socialFooter justify-start h-14 items-center inline-flex"}>
                            <Image src={"/icons/add-green.svg"} width={12} height={12} alt={"icon"} className={"ml-4 w-3 h-3"}/>
                            ساخت آدرس جدید
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address;