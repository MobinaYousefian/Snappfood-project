import Link from "next/link";
import {toFarsiNumber} from "@/utils/numberConverter";
import Image from "next/image";

export const SearchRestaurants = ({resSearch, handleClose, resSearchResult}) => {

    return (
        <div className={"border-b flex flex-col border-b-[rgb(235,237,240)]"}>
            <div className={"items-center justify-between flex mt-[1.125rem]"}>
                <span className={"mr-3 font-iranSans text-sm text-carbon-main"}>فروشگاه‌ها</span>
                <Link href={""}>
                    <div className={"ml-3 flex items-center"}>
                        <span className={"ml-1 font-iranSans text-sm text-accent2-main"}>
                            مشاهده همه
                            {` (${toFarsiNumber(resSearch.length)})   `}
                        </span>
                        <Image src={"/icons/arrow-left-green.svg"} width={7} height={7} alt={"icon"} className={"mr-1"}/>
                    </div>
                </Link>
            </div>
            {
                resSearchResult.map((item) => (
                    <Link onClick={handleClose} key={item.name} href={`/restaurant/${item.id}/${item.name.split(" ").join("_").replace("(", "").replace(")", "")}`}>
                        <div className={"p-5 flex items-center"}>
                            <Image src={"/icons/res-search.png"} width={28} height={18} alt={"icon"} className={"ml-4"}/>
                            <p className={"font-iranSans text-sm text-carbon-main"}>{item.name}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}