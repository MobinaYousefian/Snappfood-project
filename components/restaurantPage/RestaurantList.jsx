'use client'
import {RestaurantCard} from "@/components";
import Link from "next/link";
import {useSelector} from "react-redux";
import {useSearchParams} from "next/navigation";

export const RestaurantList = ({restaurants}) => {
    const {selected} = useSelector(state => state.addressModal);
    let cityRes = restaurants.filter(({city}) => city === selected.city);

    const searchParams = useSearchParams();
    const sort = searchParams.get("sort")
    const categoryParam = searchParams.get("category");
    const priceValParam = searchParams.get("priceVal");
    const expressParam = searchParams.get("express");
    const couponParam = searchParams.get("coupon");
    const discountParam = searchParams.get("discount");
    const foodProParam = searchParams.get("foodPro");
    const efficientParam = searchParams.get("efficient");
    const economicParam = searchParams.get("economic");

    if (categoryParam) {
        cityRes = cityRes.filter(({categoryId}) => categoryId.includes(+categoryParam));
    }

    if (sort) {
        switch (sort) {
            case "0":
                cityRes.sort((a, b) => b.star - a.star)
                break;

            case "1" :
                cityRes.sort((a, b) => a.mapDistance - b.mapDistance)
                break;

            case "2" :
                cityRes.sort((a, b) => b.dateAdded - a.dateAdded)
                break;

            case "3" :
                cityRes.sort((a, b) => a.minBuy - b.minBuy)
                break;

            case "4" :
                cityRes.sort((a, b) => (b.rating + b.commentNumber) - (a.rating + a.commentNumber))
                break;

            case "5" :
                cityRes.sort((a, b) => b.minBuy - a.minBuy)
        }
    }

    if ( priceValParam && priceValParam === "1") cityRes = cityRes.filter(({minBuy}) => minBuy < 50000);
    if ( priceValParam && priceValParam === "2") cityRes = cityRes.filter(({minBuy}) => minBuy < 100000);
    if ( priceValParam && priceValParam === "3") cityRes = cityRes.filter(({minBuy}) => minBuy > 100000);

    if (expressParam) cityRes = cityRes.filter(({delivery}) => delivery.express === true)
    if (couponParam) cityRes = cityRes.filter((res) => res.couponList)
    if (discountParam) cityRes = cityRes.filter((res) => res.discountNumber)
    if (foodProParam) cityRes = cityRes.filter(({foodPro}) => foodPro === true)
    if (efficientParam) cityRes = cityRes.filter(({minBuy}) => minBuy < 100000)
    if (economicParam) cityRes = cityRes.filter(({minBuy}) => minBuy < 60000)


    return (
        <div className={"ResList-resPage basis-full max-w-full p-[calc(1rem)]"}>
            <div className={"flex flex-wrap w-[calc(100%+1.5rem)] m-[calc(-0.75rem)]"}>
                {
                    cityRes.map(({id, name, avatar, banner, category, star, rating, delivery, couponList, discountNumber}) => (
                        <div key={id} className={"RestaurantList-resPage basis-full max-w-full p-[calc(0.75rem)]"}>
                            <RestaurantCard
                                id={id}
                                name={name}
                                avatar={avatar}
                                banner={banner}
                                category={category}
                                star={star}
                                rating={rating}
                                delivery={delivery}
                                couponList={couponList}
                                discountNumber={discountNumber}
                            />
                        </div>
                    ))
                }
            </div>
            <div className={"hidden mt-4 flex justify-center"}>
                <Link href={"/restaurant"}>
                    <button className={"focus:bg-accent-alphaLight shadow-sp-medium bg-clip-padding bg-surface-light border-[0.09375rem] rounded-[3rem] border-accent-alphaLight h-10 justify-center items-center inline-flex transition-socialFooter min-w-[6.6875rem]"}>
                        <span className={"font-iranSans text-sm text-accent-main"}>
                            مشاهده بیشتر
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    )
}