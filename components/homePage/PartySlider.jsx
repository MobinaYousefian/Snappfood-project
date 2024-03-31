'use client'
import {PartyFoodCard, ResSlider} from "@/components";
import {SwiperSlide} from "swiper/react";
import 'swiper/css';

export const PartySlider = ({partyFoods}) => {

    return (
        <ResSlider>
            {
                partyFoods.map((food) => (
                    <SwiperSlide key={food.id}>
                        <PartyFoodCard food={food}/>
                    </SwiperSlide>
                ))
            }
        </ResSlider>
    )
}