import clsx from "clsx";
import Image from "next/image";
import {toFarsiNumber} from "@/utils/numberConverter";

export const CommentSection = ({comments}) => {

    return (
        <div className={"flex flex-col"}>
            {
                comments.map((item) => (
                    <div className={"flex shrink-0 p-4 border-b-[0.0625rem] border-b-[rgba(58,61,66,0.12)]"} key={item.id}>
                        <div className={"flex flex-col shrink-0 ml-4 w-[10rem]"}>
                            <p className={"text-carbon-main text-sm font-iRANSansBold whitespace-nowrap text-ellipsis overflow-hidden mt-1.5"}>{item.name}</p>
                            <p className={"font-iranSans text-carbon-main text-sm mt-1.5"}>{item.date}</p>
                            <p className={clsx(item.star === 1 ? "invisible" : "visible","items-center flex text-sm text-carbon-main font-iranSans mt-1.5 rounded border-[0.0625rem] border-[rgb(235,237,240)] text-center w-8 px-1 py-0.5")}>
                                <Image src={"/icons/star.svg"} width={12} height={12} alt={"icons"} className={"w-[12px] h-[12px] align-middle ml-[0.15625rem]"}/>
                                <span>{toFarsiNumber(item.star)}</span>
                            </p>
                        </div>
                        <div className={"ml-4 flex justify-center flex-col items-start"}>
                            <p className={"mb-3 font-iranSans text-sm text-carbon-main"}>
                                {item.text}
                            </p>
                            <div className={"flex flex-wrap"}>
                                {
                                    item.order.map((item ,i) => (
                                        <div className={"items-center justify-center flex ml-2 mb-2 rounded-md bg-surface-dark text-[0.625rem] h-5 py-1 px-1.5"} key={i}>
                                            <p className={"font-iranSans leading-3 text-carbon-main text-[0.625rem]"}>{item}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            {
                                comments.resAnswer ?
                                    <div className={"mt-4 p-2 rounded-lg flex flex-col justify-center border-[0.0625rem] border-[rgba(58,61,66,0.12)]"}>
                                        <p className={"text-accent-main font-iRANSansBold text-xs mb-2"}>{"پاسخ مدیر رستوران"}</p>
                                        <p className={"text-carbon-main font-iranSans text-xs"}>{comments.resAnswer}</p>
                                    </div>
                                    : comments.snappAnswer ?
                                        <div className={"mt-4 p-2 rounded-lg flex flex-col justify-center border-[0.0625rem] border-[rgba(58,61,66,0.12)]"}>
                                            <p className={"text-accent-main font-iRANSansBold text-xs mb-2"}>{"پاسخ اسنپ‌فود"}</p>
                                            <p className={"text-carbon-main font-iranSans text-xs"}>{comments.snappAnswer}</p>
                                        </div>
                                    : null
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}