import {
    SocialButton,
    FirstPageListLinks,
    SecondPageListLinks,
    SupportButton
}
    from "@/components";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {

    return (
        <footer className={"w-full bg-surface-main box-border p-12 bottom-0"}>
            <SupportButton/>
            <div className={"box-border flex flex-wrap m-[calc(-2.5rem)] w-[calc(100% + 5rem)]"}>
                <div className={"flex-grow p-10"}>
                    <div className={"flex items-center"}>
                        <Link href={"/"}>
                            <Image className={"min-w-[81.64px] min-h-[41.72px]"} src={"/icons/snappfood.svg"} width={81.64} height={41.72} alt={"snappfood"}/>
                        </Link>
                        <div className={"flex flex-col mr-6"}>
                            <p className={"mb-1 font-SnapWebBold font-bold text-lg text-accent-main"}>اسنپ{"\u200c"}فود</p>
                            <p className={"font-iranSans text-xs text-carbon-light inline-block"}>تجربه سفارش غذا، از زودفود تا اسنپ{"\u200c"}فود</p>
                        </div>
                    </div>
                    <SocialButton/>
                </div>
                <div className={"flex-grow p-10"}>
                    <div className={"flex flex-col"}>
                        <FirstPageListLinks/>
                    </div>
                </div>
                <div className={"flex-grow p-10"}>
                    <div className={"flex flex-col"}>
                        <SecondPageListLinks/>
                    </div>
                </div>
                <div className={"flex-grow p-10 flex justify-end"}>
                    <Image className={"max-w-24 max-h-[75px]"} src={"/icons/senf.png"} width={71} height={75} alt={"e-namad"}/>
                </div>
            </div>
        </footer>
    )
}