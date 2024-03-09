'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import {handleCloseSupport} from "@/redux/features/supportSlice";

export const SupportModal = () => {
    const supportRef = useRef(null);
    const {isOpen} = useSelector((state) => state.supportModal);
    const dispatch = useDispatch();

    const handleClose = (e) => {
        if (supportRef.current && !supportRef.current.contains(e.target)) {
            dispatch(handleCloseSupport())
            document.body.style.overflow = "auto";
        }
    }

    if (!isOpen) return null;
    return (
        <div onClick={handleClose} className={"flex justify-center items-center fixed inset-0 z-[10000] modal-card-animation"}>
            <div ref={supportRef} className={"fixed right-[16px] bottom-[70px] w-[375px] h-[620px] bg-surface-light shadow-sp-modal rounded-xl max-h-[90vh] overflow-hidden search-modal-card-animation"}>
                <div className={"mt-[10px] px-[15px]"}>
                    <div className={"mt-[15px] mb-[10px] flex justify-between items-center flex-row-reverse"}>
                        <div className={"min-w-[30px]"}></div>
                        <p className={"font-iRANSansBold text-base text-carbon-main"}>پشتیبانی</p>
                        <button className={"min-w-[30px] py-[1px] px-[6px] leading-[1.15rem]"}>
                            {/*<Image src={"/icons/support-back.svg"} width={10} height={16} alt={"icon"} className={"h-4"}/>*/}
                        </button>
                    </div>
                    <div>
                        <button className={"px-[6px] py-[1px] items-center justify-between flex w-full min-h-[60px] text-right border-b border-b-rgb(235, 237, 240)"}>
                            <div>
                                <h4 className={"font-iRANSansBold text-xs text-carbon-main py-[10px]"}>
                                    مشکل در سفارش
                                </h4>
                                <p className={"font-iranSans text-xs pb-[8px] text-carbon-main"}>
                                    ارسال نشدن اقلام، نارضایتی از کیفیت، لغو، تغییر آدرس تحویل و...
                                </p>
                            </div>
                            <Image src={"/icons/support-question.svg"} width={5} height={16} alt={"icon"} className={"h-4"}/>
                        </button>
                        <button className={"px-[6px] py-[1px] items-center justify-between flex w-full min-h-[60px] text-right border-b border-b-rgb(235, 237, 240)"}>
                            <div>
                                <h4 className={"font-iRANSansBold text-xs text-carbon-main py-[10px]"}>
                                    مشکل در پرداخت و کیف‌پول
                                </h4>
                                <p className={"font-iranSans text-xs pb-[8px] text-carbon-main"}>
                                    پرداخت ناموفق، عدم بازگشت وجه به کیف‌پول و...
                                </p>
                            </div>
                            <Image src={"/icons/support-question.svg"} width={5} height={16} alt={"icon"} className={"h-4"}/>
                        </button>
                        <button className={"px-[6px] py-[1px] items-center justify-between flex w-full min-h-[60px] text-right border-b border-b-rgb(235, 237, 240)"}>
                            <div>
                                <h4 className={"font-iRANSansBold text-xs text-carbon-main py-[10px]"}>
                                    سایر مشکلات
                                </h4>
                                <p className={"font-iranSans text-xs pb-[8px] text-carbon-main"}>
                                    تخفیف، خطای اپلیکیشن و...
                                </p>
                            </div>
                            <Image src={"/icons/support-question.svg"} width={5} height={16} alt={"icon"} className={"h-4"}/>
                        </button>
                        <button className={"px-[6px] py-[1px] items-center justify-between flex w-full min-h-[60px] text-right border-b border-b-rgb(235, 237, 240)"}>
                            <div>
                                <h4 className={"font-iRANSansBold text-xs text-carbon-main py-[10px]"}>
                                    سوالات متداول
                                </h4>
                            </div>
                            <Image src={"/icons/support-question.svg"} width={5} height={16} alt={"icon"} className={"h-4"}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}