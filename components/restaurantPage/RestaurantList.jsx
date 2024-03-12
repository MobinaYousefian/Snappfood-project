import {RestaurantCard} from "@/components";
import Link from "next/link";

export const RestaurantList = ({restaurants}) => {
    return (
        <div className={"ResList-resPage basis-full max-w-full p-[calc(1rem)]"}>
            <div className={"flex flex-wrap w-[calc(100%+1.5rem)] m-[calc(-0.75rem)]"}>
                {
                    restaurants.map(({id, name, avatar, banner, category, star, rating, delivery, couponList, discountNumber}) => (
                        <div key={id} className={"RestaurantList-resPage basis-full max-w-full p-[calc(0.75rem)]"}>
                            <RestaurantCard
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