import Image from "next/image";

export const SearchBox = () => {
    return (
        <div className={"header-searchBox w-[10.5625rem] items-center flex absolute left-0 box-border h-12 p-4 rounded-[0.625rem]"}>
            <Image src={"/icons/search.svg"} width={17} height={17} alt={"icon"} className={"ml-2"}/>
            <p className={"text-inactive-dark text-base font-iranSans ml-2 max-[959px]:hidden"}>جست و جو در اسنپ فود</p>
        </div>
    )
}