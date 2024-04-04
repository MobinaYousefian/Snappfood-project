import Image from "next/image";
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";
import clsx from "clsx";

const starRating = [
    [[],[],[],[],[]],
    [[],[],[],[]],
    [[],[],[]],
    [[],[]],
    [[]]
]

export const ScoresResInfo = ({resInfo}) => {
    return (
        <div className={"h-[6.75rem] flex"}>
            <div className={"flex justify-end flex-col pr-5 pb-4"}>
                <p className={"font-iRANSansBold text-2xl text-carbon-main flex items-baseline"}>
                    <Image src={"/icons/star.svg"} width={28} height={20} alt={"icons"} className={"pl-2"}/>
                    {toFarsiNumber(resInfo.star)}
                </p>
                <p className={"font-iranSans text-xs text-inactive-dark"}>
                    از مجموع
                    <span className={"font-iRANSansBold text-carbon-main mx-1"}>{toFarsiNumber(priceFormatting(resInfo.rating))}</span>
                    امتیاز و
                    <span className={"font-iRANSansBold text-carbon-main mx-1"}>{toFarsiNumber(priceFormatting(resInfo.commentNumber))}</span>
                    نظر
                </p>
            </div>
            <div className={"pb-4 flex justify-end flex-col items-end"}>
                {
                    starRating.map((item, i) => (
                        <div className={"flex items-center mt-[0.3125rem]"} key={i}>
                            {
                                item.map((item, i) => (
                                    <>
                                        <Image src={"/icons/star-gray.svg"} width={20} height={12} alt={"icons"} className={"pr-2"} key={i}/>
                                    </>
                                ))
                            }
                            <div className={clsx( i === 0 ? "after:bg-[rgb(2,137,10)] after:w-[67%]": i === 1 ? "after:w-[46%] after:bg-[rgb(104,195,66)]" : i === 2 ? "after:w-[33%] after:bg-[rgb(171,232,35)]" : i === 3 ? "after:w-[19%] after:bg-[rgb(254,157,7)]" : i === 4 && "after:w-[7%] after:bg-[rgb(254,57,0)]" ,"after:shadow-sp-small flex rounded bg-[rgb(235,237,240)] mr-4 w-[25.25rem] h-[0.125rem]")}> </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}