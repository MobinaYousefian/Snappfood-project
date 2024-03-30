'use client'
import Image from "next/image";
import {toFarsiNumber} from "@/utils/numberConverter";
import {useSelector} from "react-redux";

export const CategoryNavbar = ({resInfo}) => {
    const {activeList} = useSelector(state => state.activeCoupon);
    const couponStr = resInfo.couponList?.map(coupon => `${coupon.discount} ${coupon.title}`)
    const activeCoupon = activeList.filter(item => couponStr?.includes(item));

    return (
        <nav className={"h-[30vh] CatNavbar-RightAside overflow-y-auto flex flex-col min-h-[9.375rem]"}>
            {
                resInfo.couponList &&
                <p className={"mt-2 mb-4 text-carbon-light text-sm font-iranSans cursor-pointer px-3 py-0.5"}>
                    <span className={"relative flex items-center"}>
                        کوپن‌ها
                        <Image src={"/icons/gift.svg"} width={20} height={20} alt={"icons"} className={"ml-2"}/>
                        {
                            activeCoupon.length > 0 &&
                            <span className={"items-center flex-col flex rounded-3xl border-surface-light border-[0.125rem ] bg-accent2-main h-4 w-[1.125rem] absolute -top-2 left-[4.25rem]"}>
                                <span className={"font-iranSans text-sm text-surface-light"}>
                                    {toFarsiNumber(activeCoupon.length)}
                                </span>
                            </span>
                        }
                    </span>
                </p>
            }
            <p className={"mb-4 text-carbon-light text-sm font-iranSans cursor-pointer px-3 py-0.5"}>
                پر‌طرفدارها
            </p>
            {
                resInfo.discount && <p className={"mb-4 text-carbon-light text-sm font-iranSans cursor-pointer px-3 py-0.5"}>
                    تخفیف‌دارها
                </p>
            }
            {
                resInfo.foodList.map((item, i) => (
                    <p className={"mb-4 text-carbon-light text-sm font-iranSans cursor-pointer px-3 py-0.5"} key={i}>
                        {item}
                    </p>
                ))
            }
        </nav>
    )
}