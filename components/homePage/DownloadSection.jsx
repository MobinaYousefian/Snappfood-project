import Image from "next/image";
import {InputDownloadSection} from "@/components";
import {getData} from "@/lib/dataFeching";

export const DownloadSection = async () => {
    const {userNumbers} = await getData()

    const applicationDownloader = ["myket", "bazar", "sibapp", "iapps"]

    return (
        <section className={"padding-size"}>
            <div className={"relative sp-laptop:p-16 sp-laptop:mt-[9.375rem] sp-laptop:rounded-br-[7.5rem] mt-10 px-2 py-16 box-border bg-surface-dark flex"}>
                <div className={"sp-laptop:pl-24 sp-laptop:pr-20 max-w-full px-4 flex flex-col sp-laptop:max-w-[60%]"}>
                    <p className={"text-carbon-main leading-8 mb-10 font-SnapWebBold text-[2rem]"}>اپلیکیشن اسنپ‌فود</p>
                    <p className={"text-[0.875rem] leading-8 font-SnapWeb text-carbon-light mb-10"}>با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.</p>
                    <div className={"leading-8 mb-10"}>
                        <p className={"mb-3.5 text-xs text-carbon-light font-iRANSansBold"}>برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان را وارد کنید</p>
                        <InputDownloadSection userNumbers={userNumbers}/>
                    </div>
                    <div className={"max-[1320px]:w-full w-[40.625rem] mb-10 flex flex-wrap"}>
                        {applicationDownloader.map( (item, i) => (
                            <a key={i} href={"/"} className={"ml-4 py-1.5"}>
                                <Image src={`/icons/${item}.svg`} width={135} height={41} alt={item} className={"w-[8.4375rem] h-[2.5625rem]"}/>
                            </a>
                        ))}
                    </div>
                </div>
                <Image src={"/icons/img_app_mockup.png"} width={424} height={636} alt={"img_app_mockup"} className={"sp-laptop:flex hidden translate-y-[-31%] absolute left-[3.4375rem]"}/>
            </div>
        </section>
    )
}