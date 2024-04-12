'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {handleOpenWarning} from "@/redux/features/cartSlice";
import {Suspense, useEffect, useRef} from "react";
import Loading from "@/app/loading";
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";
import {CartBill, CartFoodItem} from "@/components";
import {openAddressModal} from "@/redux/features/headerAddressSlice";

export const CartBasket = ({resInfo}) => {
    const dispatch = useDispatch();
    const {basket} = useSelector(state => state.cart);
    const {selected} = useSelector(state => state.addressModal)
    const leftPrice = useRef(null);


    /* to calculate "مجموع" */
    const totalPrice = basket.reduce((prev, cur) => {
        const foodPrice = cur.food.price.filter((item) => item.tag === cur.priceTag)[0];
        return prev + (foodPrice.value * cur.counter)
    }, 0);

    /* to calculate the price left to reach res minBuy*/
    const minBuyLeftOver = (totalPrice * 100) / resInfo.minBuy;

    /* to calculate total cart counter */
    const totalCounter = basket.reduce((prev, cur) => {
       return prev + cur.counter
    }, 0)


    // /* the discount price */
    // const totalDiscount = basket.reduce((prev, cur) => {
    //     let foodPrice = cur.food.price.filter((item) => item.tag === cur.priceTag)[0];
    //     let disCount
    //     if (foodPrice.isDiscount) {
    //         disCount = foodPrice.value * ((100-(resInfo.discountNumber))/100);
    //         return prev + disCount
    //     } else if (cur.food.isParty) {
    //         disCount = foodPrice.value * ((100-(cur.food.partyDiscount))/100);
    //         return prev + disCount
    //     } else {
    //         return prev
    //     }
    // }, 0)


    /* to calculate "سود شما از این خرید"*/
    let profit;
    const yourProfit = basket.reduce((prev, cur) => {
        let foodPrice = cur.food.price.filter((item) => item.tag === cur.priceTag)[0];
        if (foodPrice.isDiscount) {
            profit = (foodPrice.value - foodPrice.value * ((100-(resInfo.discountNumber))/100)) * cur.counter
            return prev + profit
        }else if (cur.food.isParty) {
            profit = (foodPrice.value - foodPrice.value * ((100-(cur.food.partyDiscount))/100)) * cur.counter
            return prev + profit
        }else {
            return prev
        }
    }, 0)


    const openWarning = (e) => {
        e.preventDefault()
        dispatch(handleOpenWarning())
        document.body.style.overflow = "hidden"
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        dispatch(openAddressModal())
    }

    useEffect(() => {
        if (document.getElementById("priceLeft")) {
            document.getElementById("priceLeft").style.width = `${minBuyLeftOver}%`;
        }
    }, [minBuyLeftOver])

    return (
        <>
            {
                basket.length > 0 ?
                <form className={"rounded-lg border-carbon-alphaLight mt-2 p-4 pb-3 bg-surface-light border-[0.0625rem]"}>
                    <div className={"h-6 mb-2 flex justify-between items-center"}>
                        <div className={"flex text-sm text-carbon-light"}>
                            <p className={"font-iRANSansBold"}>سبد خرید</p>
                            <span className={"font-iranSans mr-1"}>({toFarsiNumber(totalCounter)})</span>
                        </div>
                        <button onClick={openWarning} className={"py-[1px] px-[6px] inline-flex justify-center items-center transition-socialFooter w-8 h-8 bg-clip-padding rounded-full"}>
                            <Image src={"/icons/delete.svg"} width={12} height={14} alt={"icon"}/>
                        </button>
                    </div>
                    {
                        basket.map(({ food ,priceTag, counter}) => (
                            <CartFoodItem key={food.id} food={food} priceTag={priceTag} counter={counter} resInfo={resInfo}/>
                        ))
                    }
                    <Suspense fallback={<Loading/>}>
                        <CartBill
                            basket={basket}
                            resInfo={resInfo}
                            totalPrice={totalPrice}
                            yourProfit={yourProfit}
                            totalCounter={totalCounter}
                        />
                    </Suspense>
                    <textarea placeholder={"توضیحات سفارش..."} className={"font-iranSans overflow-auto resize-y border-carbon-alphaMedium border-[0.09375rem] rounded-md text-carbon-main p-3 mb-[calc(1.75rem)] mt-4 w-full min-h-[calc(6rem)]"}/>
                    <div className={"bg-surface-light sticky bottom-0 w-full h-[7.5rem]"}>
                        {
                            selected.city !== resInfo.city ?
                            <div className={"flex justify-evenly flex-col pt-2"}>
                                <p className={"text-alert-main text-sm font-iranSans"}>آدرس انتخابی خارج از محدوده سرویس‌دهی کنونی رستوران است.</p>
                                <button onClick={handleSubmitForm} type={"submit"} className={"text-sm hover:border-accent-dark bg-surface-light text-accent-main font-iranSans border-accent-main border-[0.09375rem] mt-4 mb-auto inline-flex items-center justify-center transition-socialFooter w-full h-8 rounded-md bg-clip-padding min-w-[6.6875rem]"}>انتخاب آدرسی دیگر</button>
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
                </form>
                    :
                    <div className={"flex flex-col items-center mt-2 pt-12"}>
                        <Image src={"/icons/cart-basket.svg"} width={18} height={20} alt={"icon"}/>
                        <p className={"font-iranSans text-sm text-inactive-dark mt-6"}>سبد خرید شما خالی است!</p>
                    </div>
            }
        </>
    )
}