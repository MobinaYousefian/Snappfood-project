import {SocialButton} from "@/components/footer/SocialButton";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={"bg-surface-main box-border w-full p-12"}>
            <div className={"box-border flex flex-wrap m-[calc(-2.5rem)] w-[calc(100% + 5rem)]"}>
                <div className={"flex-grow p-10"}>
                    <div className={"flex items-center"}>
                        <Link href={"/"}>
                            <Image src={"/icons/snappfood.svg"} width={81.65} height={41.73} alt={"snappfood"}/>
                        </Link>
                        <div className={"flex flex-col mr-6"}>
                            <p className={"mb-1 font-SnapWeb font-bold text-lg text-accent-main"}>اسنپ فود</p>
                            <p className={"font-iranSans text-xs text-carbon-light inline-block"}>تجربه سفارش غذا، از زودفود تا اسنپ فود</p>
                        </div>
                    </div>
                    <SocialButton/>
                </div>
            </div>
        </footer>
    )
}