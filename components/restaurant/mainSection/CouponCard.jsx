'use client'
import {useSelector} from "react-redux";
import clsx from "clsx";

export const CouponCard = ({coupon}) => {
    const couponStr = `${coupon.discount} ${coupon.title}`
    const {activeList} = useSelector(state => state.activeCoupon);

    return (
        <div className={"w-[10.25rem] transition-transform relative h-full shrink-0"}>
            <section className={clsx( activeList.includes(couponStr) && "bg-surface-light border-carbon-alphaLight", "flex-col flex rounded-md border-surface-dark border-[0.0625rem] bg-surface-main px-3 py-2 h-[3.25rem]")}>
                <p className={clsx(activeList.includes(couponStr) && "text-carbon-light", "font-iranSans text-sm text-inactive-dark")}>{coupon.discount}</p>
                <p className={clsx(activeList.includes(couponStr) && "text-carbon-light", "font-iranSans text-xs text-inactive-dark")}>{coupon.title}</p>
            </section>
        </div>
    )
}