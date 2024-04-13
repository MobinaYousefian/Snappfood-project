'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {handleOpenWarning} from "@/redux/features/cartSlice";
import {Suspense, useEffect} from "react";
import Loading from "@/app/loading";
import {toFarsiNumber} from "@/utils/numberConverter";
import {CartBasketButton, CartBill, CartFoodItem, EmptyCartBasket} from "@/components";

export const CartBasket = ({resInfo}) => {
    const dispatch = useDispatch();
    const {basket} = useSelector(state => state.cart);

    /* to calculate "مجموع" */
    const totalPrice = basket.reduce((prev, cur) => {
        const foodPrice = cur.food.price.filter((item) => item.tag === cur.priceTag)[0];
        if (cur.extraPrice) {
            return prev + (foodPrice.value * cur.counter) + cur.extraPrice
        }else {
            return prev + (foodPrice.value * cur.counter)
        }
    }, 0);

    /* to calculate the price left to reach res minBuy*/
    const minBuyLeftOver = (totalPrice * 100) / resInfo.minBuy;

    /* to calculate total cart counter */
    const totalCounter = basket.reduce((prev, cur) => {
       return prev + cur.counter
    }, 0)


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

    useEffect(() => {
        if (document.getElementById("priceLeft")) {
            document.getElementById("priceLeft").style.width = `${minBuyLeftOver}%`;
        }
    }, [minBuyLeftOver])

    return (
        <>
            {
                basket.length < 1 ?
                    <EmptyCartBasket/>
                    :
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
                        basket.map(({ food ,priceTag, counter, extras, extraPrice}) => (
                            <CartFoodItem
                                key={food.id}
                                food={food}
                                priceTag={priceTag}
                                counter={counter}
                                resInfo={resInfo}
                                extras={extras}
                                extraPrice={extraPrice}
                            />
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
                    <CartBasketButton
                        resInfo={resInfo}
                        totalPrice={totalPrice}
                    />
                </form>
            }
        </>
    )
}