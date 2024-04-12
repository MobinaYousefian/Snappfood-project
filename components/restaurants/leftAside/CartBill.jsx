'use client'
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";
import clsx from "clsx";
import Image from "next/image";
import {useRef} from "react";
import {useSelector} from "react-redux";

export const CartBill = ({totalPrice, resInfo, basket, yourProfit, totalCounter}) => {
    const {activeList} = useSelector(state => state.activeCoupon);
    const activeCouponRef = useRef(null);

    /* to randomize a number for club points */
    const randomClubPoint = Math.floor(Math.random() * 1000);

    /* to check if there`s any active coupon on the cart*/
    const couponStr = resInfo.couponList?.map((item) => `${item.discount}/${item.title}`)
    const isActiveCoupon = couponStr?.filter((coupon) => activeList.find((item) => item === coupon))[0];


    /* مجموع مالیات سبد خرید */
    const totalTax = basket.reduce((prev, cur) => {
       return prev + (resInfo.tax * cur.counter)
    },0)

    /* مجموع هزینه بسته بندی سبد خرید */
    const totalPackagePrice = basket.reduce((prev, cur) => {
        return prev + (resInfo.packagePrice * cur.counter)
    },0)

    /* to calculate "قابل پرداخت"*/
    const finalPrice = (totalPrice - yourProfit) + totalTax + totalPackagePrice + resInfo.delivery.price


    const handleRemoveCoupon = (e) => {
        e.preventDefault()
        if (activeCouponRef.current) {
            activeCouponRef.current.style.display = "none"
        }
    }

    return (
        <>
            <div className={"border-b border-b-carbon-alphaLight flex flex-col"}>
                <div className={"h-8 flex justify-between items-center"}>
                    <div className={"flex items-center"}>
                        <span className={"font-iranSans text-sm text-carbon-main"}>مجموع</span>
                    </div>
                    <div className={"font-iranSans text-sm text-carbon-main flex items-center"}>
                        {toFarsiNumber(priceFormatting(totalPrice))}
                        <span className={"text-xs text-carbon-light mr-[4px]"}> تومان</span>
                    </div>
                </div>
                <div className={clsx( resInfo.tax === 0 ? "hidden" : "h-8 flex justify-between items-center")}>
                    <div className={"flex items-center"}>
                        <span className={"text-carbon-light text-sm font-iranSans"}>مالیات</span>
                    </div>
                    <div className={"font-iranSans text-sm text-carbon-main flex items-center"}>
                        {toFarsiNumber(priceFormatting(resInfo.tax * totalCounter))}
                        <span className={"text-xs text-carbon-light mr-[4px]"}> تومان</span>
                    </div>
                </div>
                <div className={clsx( resInfo.packagePrice === 0 ? "hidden" : "h-8 flex justify-between items-center")}>
                    <div className={"flex items-center"}>
                        <span className={"text-carbon-light text-sm font-iranSans"}>هزینه بسته بندی</span>
                    </div>
                    <div className={"font-iranSans text-sm text-carbon-main flex items-center"}>
                        {toFarsiNumber(priceFormatting(resInfo.packagePrice * totalCounter))}
                        <span className={"text-xs text-carbon-light mr-[4px]"}> تومان</span>
                    </div>
                </div>
                <div className={"h-8 flex justify-between items-center"}>
                    <div className={"flex items-center"}>
                        <span className={"text-carbon-light text-sm font-iranSans"}>هزینه ارسال</span>
                    </div>
                    <div className={"font-iranSans text-sm text-carbon-main flex items-center"}>
                        {toFarsiNumber(priceFormatting(resInfo.delivery.price))}
                        <span className={"text-xs text-carbon-light mr-[4px]"}> تومان</span>
                    </div>
                </div>
                {
                    yourProfit > 0 &&
                    <div className={"h-8 flex justify-between items-center"}>
                        <div className={"flex items-center"}>
                            <span className={"text-carbon-light text-sm font-iranSans"}>سود شما از این خرید</span>
                        </div>
                        <div className={"font-iranSans text-sm text-carbon-main flex items-center"}>
                            {toFarsiNumber(priceFormatting(yourProfit))}
                            <span className={"text-xs text-carbon-light mr-[4px]"}> تومان</span>
                        </div>
                    </div>
                }
            </div>
            {
                isActiveCoupon &&
                <div ref={activeCouponRef} className={"border-b border-b-carbon-alphaLight flex justify-between items-center"}>
                    <div className={"my-4 flex-[1_0_auto] max-w-[calc(100%-2rem)]"}>
                        <div className={"mb-1 font-iRANSansBold text-xs text-accent2-main"}>
                            {isActiveCoupon.split("/")[0]}
                        </div>
                        <div className={"font-iranSans text-xs text-carbon-main"}>
                            {isActiveCoupon.split("/")[1]}
                        </div>
                    </div>
                    <button onClick={handleRemoveCoupon} className={"flex-[0_0_2rem] hover:bg-inactive-main py-[1px] px-[6px] min-w-8 bg-clip-padding rounded-full w-auto h-8 transition-socialFooter inline-flex items-center justify-center"}>
                        <Image src={"/icons/delete-gray.svg"} width={12} height={14} alt={"icon"}/>
                    </button>
                </div>
            }
            <div className={"h-12 flex justify-between items-center"}>
                <p className={"font-iRANSansBold text-sm text-carbon-main"}>قابل پرداخت</p>
                <div className={"inline-flex items-center font-iRANSansBold text-sm text-carbon-main"}>
                    {toFarsiNumber(priceFormatting(finalPrice))}
                    <span className={"font-iranSans text-xs text-carbon-light mr-[4px]"}> تومان</span>
                </div>
            </div>
            <div className={"border-surface-dark border-[0.0625rem] mt-4 p-3 shadow-sp-small flex justify-between items-center rounded-[8px]"}>
                <div className={"flex items-baseline"}>
                    <p className={"ml-1 font-iRANSansBold text-base text-carbon-main"}>{toFarsiNumber(randomClubPoint)}</p>
                    <p className={"font-iranSans text-xs text-carbon-main"}>امتیاز از این سفارش دریافت خواهید کرد.</p>
                </div>
                <Image src={"/icons/club.svg"} width={17} height={21} alt={"icon"} className={"mr-1"}/>
            </div>
        </>
    )
}