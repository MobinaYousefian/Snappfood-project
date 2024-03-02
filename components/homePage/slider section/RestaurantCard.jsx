import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import {DeliveryType} from "@/components";

export const RestaurantCard = (
    {name, avatar, banner, category, star, rating, delivery,couponList,discountNumber}) => {

    return (
        <div className={"box-border transition-transform relative h-full shrink-0 w-full"}>
            <Link href={"/"}>
                <div className={"hover:shadow-sp-high text-carbon-main shadow-sp-small rounded-lg flex-col flex border-[1px] border-carbon-alphaLight border-solid bg-surface-light overflow-hidden pb-6 mb-8 box-border justify-between h-[21.3125rem]"}>
                    <div className={"relative shrink-0 grow flex justify-center items-end min-h-[9.6875rem] max-h-[9.6875rem] h-[9.6875rem]"}>
                        <Image src={banner} width={400} height={248} alt={name} className={"w-full h-full object-cover "}/>
                        <div className={"justify-center items-center flex shadow-sp-high rounded-xl bg-surface-light absolute right-0 left-0 m-auto translate-y-5 w-[5.5rem] h-[5.5rem]"}>
                            <Image src={avatar} width={150} height={150} alt={`${name} رستوران `} className={"h-[80px] w-[80px] rounded-xl border-carbon-alphaLight border-solid border-[1px]"}/>
                        </div>
                        <div className={clsx( couponList ? "inline-block" : "hidden" ,"max-w-[calc(100% - 26px)] items-center flex rounded-bl-2xl rounded-tl-2xl bg-surface-light pl-3 pr-2 py-1 absolute top-5 right-0 left-auto")}>
                            <span className={"w-4 h-4"}>
                                <Image src={"/icons/coupon.svg"} width={16} height={16} alt={"icon"}/>
                            </span>
                            <span className={"h-auto w-auto inline-block text-accent2-dark text-xs font-iranSans text-ellipsis whitespace-nowrap font-medium overflow-hidden pt-0.5 mr-[0.28125rem]"}>
                                {`${couponList} و پیشنهاد دیگر `}
                            </span>
                        </div>
                        <div className={clsx( !discountNumber ? "hidden" : "inline-block" ,"absolute right-0 bottom-0 py-1 px-3 bg-surface-light rounded-tl-2xl")}>
                            <span className={"text-accent-dark leading-5 font-iRANSansBold text-[0.875rem]"}>
                                {`${discountNumber} ٪`}
                            </span>
                        </div>
                    </div>
                    <div className={"shrink-0 grow flex flex-col justify-between"}>
                        <div className={"mt-7 flex flex-col items-center"}>
                            <h2 className={"max-w-full mb-2 overflow-hidden text-ellipsis whitespace-nowrap font-iRANSansBold text-lg text-center text-carbon-main"}>{name}</h2>
                            <div className={"mb-2"}>
                                <div className={"ml-2 flex items-center"}>
                                    <span className={"ml-2 flex items-center"}>
                                        <Image src={"/icons/star.svg"} width={12} height={12} alt={"icon"} className={"align-middle ml-1"}/>
                                        <span className={"font-iRANSansBold text-xs text-carbon-main"}>{star}</span>
                                    </span>
                                    <p className={"font-iranSans text-xs text-inactive-dark"}>{`(${rating})`}</p>
                                </div>
                            </div>
                            <h3 className={"mb-3 font-iranSans text-xs text-inactive-dark"}>{`${category[0]}، ${category[1]}، ${category[2]}`}</h3>
                        </div>
                        <DeliveryType
                            delivery={delivery}
                            snappExpress={delivery.snappExpress}
                            price={delivery.price}
                            express={delivery.express}
                            type={delivery.type}
                        />
                    </div>
                </div>
            </Link>
        </div>
    )
}