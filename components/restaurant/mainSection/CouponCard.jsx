'use client'
import {useSelector} from "react-redux";
import clsx from "clsx";

export const CouponCard = ({coupon}) => {
    const couponStr = `${coupon.discount} ${coupon.title}`
    const {activeList} = useSelector(state => state.activeCoupon);

    return (
        <div className={"w-[10.25rem] transition-transform relative h-full shrink-0"}>
            <section className={clsx( activeList.includes(couponStr) ? "bg-surface-light border-accent2-main text-carbon-light" : "border-surface-dark bg-surface-main text-inactive-dark", "flex-col flex rounded-md border-[0.0625rem] px-3 py-2 h-[3.25rem]")}>
                <p className={"font-iranSans text-sm"}>{coupon.discount}</p>
                <p className={"font-iranSans text-xs"}>{coupon.title}</p>
            </section>
        </div>
    )
}