import Image from "next/image";
import Link from "next/link";

export const SocialButton = () => {
    const socialIcon = ["twitter", "telegram", "linkedin", "instagram", "aparat"]

    return (
        <div className={"flex mt-8 items-baseline"}>
            <Image className={"invisible"} src={"/icons/hiddenFooter.svg"} width={52.8} height={41.72} alt={"hiddenFooter"}/>
            <div className={"mr-6 flex flex-wrap w-[calc(100% + 1rem)]"}>
                {socialIcon.map((item, i) => (
                    <div className={"box-border p-[calc(0.5rem)]"} key={i}>
                        <Link href={"/"}>
                            <button
                                className={"inline-flex justify-center items-center w-10 h-10 rounded-full bg-surface-light text-base shadow-sp-medium transition-socialFooter border-borderFooter border-carbon-alphaLight border-solid hover:bg-surface-main"}>
                                <Image src={`/icons/${item}.svg`} width={20} height={20} alt={item}/>
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}