'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import 'swiper/css';
import "./couponSwiper.css"
import {CouponCard} from "@/components";
import Image from "next/image";
import {useRef, useState} from "react";
import clsx from "clsx";

export const CouponSection = ({resInfo}) => {
    const [isFirst, setIsFirst] = useState(null);
    const  swiperRef = useRef(null);

    const handleNext = () => {
        swiperRef.current.swiper.slideNext();
    }

    const handlePrev = () => {
        swiperRef.current.swiper.slidePrev();
    }


    return (
        <>
            <p className={"h-12 text-carbon-main flex justify-center items-center font-iRANSansBold text-xs"}>
                کوپن‌ها
            </p>
            <div className={"m-[calc(0rem)] flex-wrap flex w-[calc(100%+0rem)]"}>
                <section className={"p-[calc(0rem)] w-full h-[4.25rem]"}>
                    <div className={"relative"}>
                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={16}
                            modules={[Navigation]}
                            ref={swiperRef}
                            onReachBeginning={() => {setIsFirst(true)}}
                            onReachEnd={() => {setIsFirst(false)}}
                        >
                            {
                                resInfo.couponList.map((coupon, i) => (
                                    <div key={i}>
                                        <SwiperSlide>
                                            <CouponCard coupon={coupon}/>
                                        </SwiperSlide>
                                    </div>
                                ))
                            }
                        </Swiper>
                        <div className={clsx(isFirst === false && "opacity-100 scale-100",resInfo.couponList.length < 3 && "hidden",resInfo.couponList.length < 4 && "min-[620px]:hidden", "my-2.5 z-30 transition-socialFooter opacity-0 scale-0 mx-auto h-8 -right-2 absolute top-0 bottom-0")}>
                            <button onClick={handlePrev} className={"shadow-sp-medium bg-clip-padding bg-surface-light rounded-full justify-center items-center inline-flex transition-socialFooter w-8 h-8 border-accent-alphaLight border-[0.09375rem] min-w-[auto]"}>
                                <Image src={"/icons/arrow-right-green.svg"} width={9} height={16} alt={"icon"}/>
                            </button>
                        </div>
                        <div className={clsx(isFirst === true && "opacity-100 scale-100",resInfo.couponList.length < 3 && "hidden" ,resInfo.couponList.length < 4 && "min-[620px]:hidden", "my-2.5 z-30 transition-socialFooter opacity-0 scale-0 mx-auto h-8 left-0.5 absolute top-0 bottom-0")}>
                            <button onClick={handleNext} className={"shadow-sp-medium bg-clip-padding bg-surface-light rounded-full justify-center items-center inline-flex transition-socialFooter w-8 h-8 border-accent-alphaLight border-[0.09375rem] min-w-[auto]"}>
                                <Image src={"/icons/arrow-left-green.svg"} width={9} height={16} alt={"icon"}/>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}