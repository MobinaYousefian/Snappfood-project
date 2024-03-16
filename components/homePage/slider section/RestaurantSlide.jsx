'use client'
import {ResSlider, RestaurantCard} from "@/components";
import {SwiperSlide} from "swiper/react";

export const RestaurantSlide = ({restaurants}) => {

    return (
        <div className={"relative"}>
            <ResSlider>
                {
                    restaurants.map(({name, id, avatar, banner, category, star, rating, delivery,couponList,discountNumber}) => (
                        <SwiperSlide key={id}>
                            <div className={"box-border transition-transform relative h-full shrink-0 w-full"}>
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
                        </SwiperSlide>
                    ))
                }
            </ResSlider>
        </div>
    )
}