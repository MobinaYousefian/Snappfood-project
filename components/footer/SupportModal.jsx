'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import {handleCloseSupport} from "@/redux/features/supportSlice";

const questions = [
    {
        title : "مشکل در سفارش",
        description : "ارسال نشدن اقلام، نارضایتی از کیفیت، لغو، تغییر آدرس تحویل و..."
    },
    {
        title : "مشکل در پرداخت و کیف‌پول",
        description : "پرداخت ناموفق، عدم بازگشت وجه به کیف‌پول و..."
    },
    {
        title : "سایر مشکلات",
        description : "تخفیف، خطای اپلیکیشن و..."
    },
    {
        title : "سوالات متداول",
    }
]

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
            <div ref={supportRef} className={"fixed right-[16px] bottom-[70px] w-[285px] max-w-[375px] sp-laptop:w-[375px] h-[80vh] bg-surface-light shadow-sp-modal rounded-xl max-h-[90vh] overflow-hidden search-modal-card-animation"}>
                <div className={"mt-[10px] px-[15px]"}>
                    <div className={"mt-[15px] mb-[10px] flex justify-between items-center flex-row-reverse"}>
                        <div className={"min-w-[30px]"}> </div>
                        <p className={"font-iRANSansBold text-base text-carbon-main"}>پشتیبانی</p>
                        <button className={"min-w-[30px] py-[1px] px-[6px] leading-[1.15rem]"}>
                        </button>
                    </div>
                    {
                        questions.map((item, i) => (
                            <button className={"px-[6px] py-[1px] items-center justify-between flex w-full min-h-[60px] text-right border-b border-b-rgb(235, 237, 240)"} key={i}>
                                <div>
                                    <h4 className={"font-iRANSansBold text-xs text-carbon-main py-[10px]"}>
                                        {item.title}
                                    </h4>
                                    {
                                        item.description ?
                                            <p className={"font-iranSans text-xs pb-[8px] text-carbon-main"}>
                                                {item.description}
                                            </p>
                                            : null
                                    }
                                </div>
                                <Image src={"/icons/support-question.svg"} width={5} height={16} alt={"icon"} className={"h-4"}/>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}