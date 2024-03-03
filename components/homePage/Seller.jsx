import Link from "next/link";
import Image from "next/image";

export const Seller= () => {
    return (
        <section id={"sign-seller"} className={"mx-4 padding-size"}>
            <div className={"flex rounded-[2rem] bg-surface-main p-12 mt-[10.0625rem]"}>
                <div className={"grow flex flex-col"}>
                    <p className={"text-carbon-main inline-block leading-8 font-SnapWebBold mb-10 text-[2rem]"}>صاحب کسب و کار هستید؟</p>
                    <p className={"font-SnapWeb text-carbon-main inline-block text-lg mb-10"}>با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.</p>
                    <Link href={"/"} className={"mb-10"}>
                        <button className={"px-[6px] py-[1px] hover:bg-accent-light font-iRANSansBold text-lg bg-clip-padding bg-accent-main rounded-[0.375rem] border-accent-main border-solid spBorder transition-socialFooter h-12 inline-flex justify-center items-center box-border min-w-[6.6875rem]"}>
                            <Image src={"/icons/sign-seller.svg"} width={24} height={26} alt={"Snapp-seller"} className={"overflow-hidden"} />
                            <span className={"mr-2 text-surface-light"}>ثبت نام فروشندگان</span>
                        </button>
                    </Link>
                </div>
                <div className={"grow hidden sp-laptop:flex items-end flex-col"}>
                    <Image src={"/icons/seller-pic.png"} width={351} height={331} alt={"seller-pic"} className={"mb-10 mt-[-8.75rem]"}/>
                </div>
            </div>
        </section>
    )
}