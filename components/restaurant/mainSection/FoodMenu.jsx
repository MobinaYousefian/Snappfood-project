'use client'
import {CouponSection, DiscountSection, MenuSection, PopularSection} from "@/components";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setElementId} from "@/redux/features/elementOnScreenSlice";

export const FoodMenu = ({params, restaurants}) => {
    const pageId = params.restaurantId[0];
    const resInfo = restaurants.filter(({id}) => id == pageId)[0]

    const dispatch = useDispatch();

    useEffect(() => {
        const callBackFn = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    dispatch(setElementId(entry.target.getAttribute("id")));
                }
            })
        };

        const options = {
            rootMargin: '0px',
            threshold: 0.95
        }

        const observer = new IntersectionObserver(callBackFn, options);

        const targets = document.querySelectorAll(".target");
        targets.forEach(target => {
            if (target) observer.observe(target);
        });


        return () => {
            targets.forEach(target => {
                if (target) observer.unobserve(target);
            });
        }
    }, [])

    return (
        <section className={"FoodMenu basis-full max-w-full p-[calc(1rem)]"}>
            <section className={"border-surface-dark bg-surface-light rounded-lg border-[0.0625rem]"}>
                {
                    resInfo.couponList &&
                    <section id={"coupon"} className={"target p-4 scroll-mt-[4.375rem]"}>
                        <CouponSection resInfo={resInfo}/>
                    </section>
                }
                <section id={"popular"} className={"target scroll-mt-[4.375rem]"}>
                    <PopularSection resInfo={resInfo}/>
                </section>
                {
                    resInfo.discountNumber &&
                    <section id={"discount"} className={"target scroll-mt-[4.375rem]"}>
                        <DiscountSection resInfo={resInfo}/>
                    </section>
                }
                {
                    resInfo.foodList.map((item, i) => (
                        <section id={item} className={"target scroll-mt-[4.375rem]"} key={i}>
                            <MenuSection item={item} resInfo={resInfo}/>
                        </section>
                    ))
                }
            </section>
        </section>
    )
}