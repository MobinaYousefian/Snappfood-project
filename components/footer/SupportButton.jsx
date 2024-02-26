import Image from "next/image";

export const SupportButton = () => {
    return (
        <button
            className={"fixed right-4 bottom-4 z-10 transition-spport inline-flex justify-center items-center w-12 h-12 border-borderFooter border-solid border-accent-alphaLight rounded-full bg-accent-main shadow-sp-medium overflow-visible bg-clip-padding hover:bg-accent-light"}>
            <Image src={"/icons/support.svg"} width={24} height={24} alt={"Snapp-support"}/>
        </button>
    )
}