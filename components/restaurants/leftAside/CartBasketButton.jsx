'use client'
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import {openAddressModal} from "@/redux/features/headerAddressSlice";

export const CartBasketButton = ({resInfo, totalPrice}) => {
    const dispatch = useDispatch();
    const {selected} = useSelector(state => state.addressModal)
    const leftPrice = useRef(null);

    const handleChangeAddress = (e) => {
        e.preventDefault()
        dispatch(openAddressModal())
    }

    return (
        <div className={"bg-surface-light sticky bottom-0 w-full h-[7.5rem]"}>
            {
                selected.city !== resInfo.city ?
                    <div className={"flex justify-evenly flex-col pt-2"}>
                        <p className={"text-alert-main text-sm font-iranSans"}>آدرس انتخابی خارج از محدوده سرویس‌دهی کنونی رستوران است.</p>
                        <button onClick={handleChangeAddress} type={"submit"} className={"text-sm hover:border-accent-dark bg-surface-light text-accent-main font-iranSans border-accent-main border-[0.09375rem] mt-4 mb-auto inline-flex items-center justify-center transition-socialFooter w-full h-8 rounded-md bg-clip-padding min-w-[6.6875rem]"}>انتخاب آدرسی دیگر</button>
                    </div>
                    : totalPrice < resInfo.minBuy ?
                        <div className={"h-12 pt-4 flex justify-around flex-col"}>
                            <div className={"flex justify-between"}>
                                <p className={"text-xs text-carbon-main font-iranSans"}>
                                    {`${toFarsiNumber(priceFormatting(resInfo.minBuy - totalPrice))} تومان مانده تا حداقل خرید`}
                                </p>
                                <p className={"text-xs text-carbon-main font-iranSans"}>
                                    {toFarsiNumber(priceFormatting(resInfo.minBuy))}
                                </p>
                            </div>
                            <div className={"bg-[rgb(235,237,240)] w-full h-[8px] rounded-[4px]"}>
                                <div id={"priceLeft"} ref={leftPrice} className={`bg-accent-main h-full text-right cartBasket rounded-[4px]`}/>
                            </div>
                        </div>
                        :
                        <button type={"submit"} className={"bg-accent-main text-surface-light hover:bg-accent-light text-[1.125rem] font-iRANSansBold border-accent-main border-[0.09375rem] mt-4 mb-auto inline-flex items-center justify-center transition-socialFooter w-full h-12 rounded-md bg-clip-padding min-w-[6.6875rem]"}>ثبت سفارش</button>
            }
        </div>
    )
}