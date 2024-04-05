'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {FoodCard} from "@/components";
import {useRouter} from "next/navigation";
import {setSearchTerm} from "@/redux/features/headerSearchSlice";

export const SearchFoodResults = ({resInfo}) => {
    const {searchTerm, resPageSearchResult} = useSelector((state => state.searchModal));
    const dispatch = useDispatch();
    const router = useRouter();

    const handleGoBack = () => {
        router.push(`/restaurant/${resInfo.id}/${resInfo.name.split(" ").join("_").replace("(", "").replace(")", "")}`);
        dispatch(setSearchTerm(""))
    }

    return (
        <section className={"FoodMenu basis-full max-w-full p-[calc(1rem)]"}>
            <section className={"border-surface-dark bg-surface-light rounded-lg border-[0.0625rem]"}>
                <section className={"scroll-mt-[4.375rem]"}>
                    <div className={"font-iranSans items-center justify-start flex my-5 mr-[1.59375rem]"}>
                        <Image onClick={handleGoBack} src={"/icons/support-back.svg"} width={9} height={16} alt={"icon"} className={"cursor-pointer ml-[1.59375rem]"}/>
                        <p className={"ml-1"}>نتایج برای</p>
                        <p className={"font-iRANSansBold text-base text-carbon-main"}>«{searchTerm}»</p>
                    </div>
                    <div className={"flex-wrap flex m-[calc(0rem)] w-[calc(100%+0rem)] border-surface-dark border-t-[0.0625rem]"}>
                        {
                            resPageSearchResult.map((food) => (
                                <FoodCard
                                    key={food.id}
                                    food={food}
                                    resName={resInfo.name}
                                    discountNumber={resInfo.discountNumber}
                                />
                            ))
                        }
                    </div>
                </section>
            </section>
        </section>
    )
}