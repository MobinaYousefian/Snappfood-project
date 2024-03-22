'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import 'swiper/css';
import {CouponCard} from "@/components";

export const CouponSection = ({resInfo}) => {
    return (
        <section className={"p-4 scroll-mt-[4.375rem]"}>
            <p className={"h-12 text-carbon-main flex justify-center items-center font-iRANSansBold text-xs"}>
                کوپن‌ها
            </p>
            <div className={"m-[calc(0rem)] flex-wrap flex w-[calc(100%+0rem)]"}>
                <section className={"p-[calc(0rem)] w-full h-[4.25rem]"}>
                    <div className={"relative"}>
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={16}
                            modules={[Navigation]}
                        >
                            {
                                resInfo.couponList.map((coupon, i) => (
                                    <SwiperSlide key={i}>
                                        <CouponCard coupon={coupon}/>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </section>
            </div>
        </section>
    )
}