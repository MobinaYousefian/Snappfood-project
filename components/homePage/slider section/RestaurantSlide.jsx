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
                        </SwiperSlide>
                    ))
                }
            </ResSlider>
        </div>
    )
}