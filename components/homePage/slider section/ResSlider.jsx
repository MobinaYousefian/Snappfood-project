'use client'
import {Swiper} from "swiper/react";
import {Navigation} from "swiper/modules";
import 'swiper/css';
import Image from "next/image";
import {useRef, useState} from "react";
import clsx from "clsx";

const responsive = {
    600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
    },
    947: {
        slidesPerView: 3,
        slidesPerGroup: 2,
    },
    1288: {
        slidesPerView: 4,
        slidesPerGroup: 2,
    },
};
export const ResSlider = ({children}) => {
    const [isFirst, setIsFirst] = useState(true);
    const swiperRef = useRef(null);

    const handleNext = () => {
        if (children.length <= 5) {
            swiperRef.current.swiper.slideNext();
            if (swiperRef.current.swiper.isEnd) {
                setIsFirst(false);
            }
        }
    }

    const handlePrev = () => {
        if (children.length <= 5) {
            swiperRef.current.swiper.slidePrev();
            if (swiperRef.current.swiper.isBeginning) {
                setIsFirst(true);
            }
        }

    }

    return (
        <>
            <Swiper
                breakpoints={responsive}
                slidesPerView={1}
                spaceBetween={16}
                modules={[Navigation]}
                ref={swiperRef}
                onSlideChange={() => setIsFirst(!isFirst)}
            >
                {children}
            </Swiper>
            {
                children.length > 3 ?
                    <>
                        <div className={clsx(isFirst && "opacity-100 scale-100","active:opacity-0 cursor-pointer opacity-0 scale-0 hidden sp-laptop:inline restaurantSections-button-transition h-8 z-10  bottom-0 top-[55%] absolute -left-6")}>
                            <button onClick={handleNext} className={"text-lg font-iRANSansBold shadow-sp-medium bg-clip-padding bg-surface-light text-accent-main inline-flex justify-center items-center transition-socialFooter box-border w-12 h-12 border-spBorder border-solid border-accent-alphaLight rounded-[50%]"}>
                                <Image src={"/icons/arrow-left-pink.svg"} width={9} height={16} alt={"icon"}/>
                            </button>
                        </div>
                        <div className={clsx( !isFirst && "opacity-100 scale-100" ,"active:opacity-0 cursor-pointer hidden sp-laptop:inline restaurantSections-button-transition opacity-0 scale-0 h-8 z-10 top-[55%] bottom-0 absolute -right-6")}>
                            <button onClick={handlePrev} className={"inline-flex justify-center items-center transition-socialFooter box-border w-12 h-12 text-lg font-iRANSansBold shadow-sp-medium bg-clip-padding bg-surface-light text-accent-main border-spBorder border-solid border-accent-alphaLight rounded-[50%]"}>
                                <Image src={"/icons/arrow-right-pink.svg"} width={9} height={16} alt={"icon"}/>
                            </button>
                        </div>
                    </>
                    : null
            }
        </>
    )
}