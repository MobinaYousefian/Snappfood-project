import Link from "next/link";
import {toFarsiNumber} from "@/utils/numberConverter";
import Image from "next/image";
import {SearchFoodsCard} from "@/components";

export const SearchFoods = ({foodsSearch, handleClose, restaurants, foodsSearchResult}) => {

    return (
        <div className={"border-b flex flex-col border-b-[rgb(235,237,240)]"}>
            <div className={"items-center justify-between flex mt-[1.125rem]"}>
                <span className={"mr-3 font-iranSans text-sm text-carbon-main"}>محصولات</span>
                <Link href={""}>
                    <div className={"ml-3 flex items-center"}>
                        <span className={"ml-1 font-iranSans text-sm text-accent2-main"}>
                            مشاهده همه
                            {` (${toFarsiNumber(foodsSearch.length)})   `}
                        </span>
                        <Image src={"/icons/arrow-left-green.svg"} width={7} height={7} alt={"icon"} className={"mr-1"}/>
                    </div>
                </Link>
            </div>
            {
                foodsSearchResult.map((item) => (
                    <Link href={`/restaurant/${item.resId}/${item.resName.split(" ").join("_").replace("(", "").replace(")", "")}`} onClick={handleClose} key={item.id}>
                        <SearchFoodsCard
                            item={item}
                            restaurants={restaurants}
                        />
                    </Link>
                ))
            }
        </div>
    )
}