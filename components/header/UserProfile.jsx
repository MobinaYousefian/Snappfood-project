import Link from "next/link";
import Image from "next/image";
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";

export const UserProfile = ({user}) => {
    return (
        <div className={"sp-laptop:left-[-7.5rem] overflow-hidden flex-col items-center flex bg-surface-light rounded-lg shadow-sp-high top-6 min-h-12 w-[16.25rem] absolute left-[-1.875rem]"}>
            <Link href={"/"} className={"w-full"}>
                <div className={"items-center flex box-border w-full h-16 py-3 px-4"}>
                    <Image src={"/icons/user.svg"} width={14} height={18} alt={"icon"} className={"ml-4"}/>
                    <div className={"flex flex-col"}>
                        <p className={"font-iRANSansBold text-sm text-carbon-main"}>{`${user.name} ${user.familyName}`}</p>
                        <p className={"mt-1 cursor-pointer font-iranSans text-xs text-accent2-main"}>مشاهده حساب کاربری</p>
                    </div>
                </div>
            </Link>
            <button className={"rounded-md py-[1px] pl-[6px] grow w-full justify-start min-h-12 pr-4 h-14 items-center inline-flex transition-socialFooter box-border min-w-[6.6875rem]"}>
                <div className={"w-full flex justify-between"}>
                    <div className={"flex items-center"}>
                        <Image src={"/icons/clubGray.svg"} width={20} height={20} alt={"icon"} className={"ml-3.5"}/>
                        <p className={"text-carbon-main font-iranSans text-sm"}>اسنپ! کلاب</p>
                    </div>
                    <div className={"items-center flex pl-3 pr-1 py-0.5 mr-auto rounded-[2rem] border-[#ffce00] border bg-[#fd0]"}>
                        <Image src={"/icons/club.svg"} width={12.94} height={16} alt={"icon"} className={"h-4 mx-1"}/>
                        <div className={"flex items-baseline"}>
                            <p className={"font-iRANSansBold text-sm text-carbon-main"}>{toFarsiNumber(priceFormatting(user.clubPoints))}</p>
                            <p className={"mr-[0.2rem] text-carbon-main leading-3 font-iranSans text-[0.625rem]"}>امتیاز</p>
                        </div>
                    </div>
                </div>
            </button>
            <button className={"rounded-md py-[1px] pl-[6px] grow w-full justify-start min-h-12 pr-4 h-14 items-center inline-flex transition-socialFooter box-border min-w-[6.6875rem]"}>
                <div className={"w-full flex justify-between"}>
                    <div className={"flex "}>
                        <Image src={"/icons/wallet.svg"} width={17} height={16} alt={"icon"} className={"ml-4"}/>
                        <p className={"text-carbon-main font-iranSans text-sm"}>کیف پول</p>
                    </div>
                    <div className={"inline-flex flex-col"}>
                            <span className={"font-iRANSansBold text-sm text-carbon-main"}>
                                {toFarsiNumber(priceFormatting(user.wallet))}
                                <span className={"font-iranSans text-xs text-carbon-light"}> تومان</span>
                            </span>
                    </div>
                </div>
            </button>
            <button className={"rounded-md grow w-full pr-4 justify-start min-h-12 py-[1px] pl-[6px] h-14 items-center inline-flex transition-socialFooter box-border min-w-[6.6875rem]"}>
                <div className={"w-full flex items-center"}>
                    <Image src={"/icons/gift.svg"} width={18} height={17} alt={"icon"}/>
                    <p className={"text-carbon-main text-sm font-iranSans mr-3.5"}>دعوت از دوستان</p>
                </div>
            </button>
            <button className={"rounded-md grow w-full pr-4 justify-start min-h-12 py-[1px] pl-[6px] h-14 items-center inline-flex transition-socialFooter box-border min-w-[6.6875rem]"}>
                <Image src={"/icons/sign-out.svg"} width={18} height={18} alt={"icon"} className={"ml-2"}/>
                <p className={"mr-2 font-iranSans text-sm text-carbon-main"}>خروج</p>
            </button>
        </div>
    )
}