import Image from "next/image";
import {FoodPrice} from "@/components";

export const FoodCard = ({food, resName, discountNumber}) => {

    return (
        <div className={"FoodCard p-[calc(0rem)] border-b-[0.0625rem] w-full border-surface-dark odd:border-l-[0.0625rem]"}>
            <section className={"h-full py-4 flex flex-col"}>
                <div className={"cursor-pointer px-4 flex pb-1.5"}>
                    <div className={"flex flex-col grow pt-4 pl-4"}>
                        <h2 className={"font-iRANSansBold text-base text-carbon-main"}>
                            {food.name}
                        </h2>
                        <p className={"mt-2 break-words font-iranSans text-xs text-inactive-dark"}>
                            {food.ingredients}
                        </p>
                    </div>
                    <div className={"relative shrink-0"}>
                        <Image src={food.photos[0]} width={200} height={200} alt={`${food.name} از ${resName}`} className={"rounded-lg w-[112px] h-[112px]"}/>
                    </div>
                </div>
                {
                    food.price.map((item, i) => (
                        <FoodPrice
                            key={i}
                            item={item}
                            discountNumber={discountNumber}
                        />
                    ))
                }
            </section>
        </div>
    )
}