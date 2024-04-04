import Image from "next/image";
import {FoodPrice, PartyCountDown, RemainingFoodNumber} from "@/components";
import clsx from "clsx";

export const FoodPartyMenu = ({resInfo}) => {
    const partyFood = resInfo.foods.filter(({isParty}) => isParty === true);

    if (partyFood.length < 1) return null
    return (
        <section className={"rounded-lg mb-4 bg-surface-light border-[0.0625rem] border-[rgb(235,237,240)]"}>
            <div className={"items-center justify-between flex rounded-t-lg foodParty-gradiant px-[1.625rem] py-[0.875rem]"}>
                <div className={"flex"}>
                    <Image src={"/icons/food-party.svg"} width={24} height={24} alt={"food-party"} className={"w-6 h-6"}/>
                    <p className={"mr-1.5 font-iRANSansBold text-base text-surface-light"}>فود پارتی</p>
                </div>
                <div className={"flex"}>
                    <PartyCountDown/>
                    <Image src={"/icons/foodParty-countdown.svg"} width={18} height={18} alt={"icons"} className={"drop-shadow-[0-1px-0-rgba(0,0,0,0.24)]"}/>
                </div>
            </div>
            <div className={"flex-wrap flex m-[calc(0rem)] w-[calc(100%+0rem)] border-t-[0.0625rem] border-t-[#EBEDF0]"}>
                {
                    partyFood.map((food) => (
                        <div className={"FoodCard p-[calc(0rem)] w-full border-b-[0.0625rem] border-b-[#EBEDF0] odd:border-l-[0.0625rem]"} key={food.id}>
                            <section className={"h-full py-4 flex flex-col"}>
                                <div className={"px-4 cursor-pointer flex"}>
                                    <div className={"flex flex-col grow pt-4 pl-4"}>
                                        <h2 className={clsx(food.partyRemain === 0 ? "text-inactive-dark" : "text-carbon-dark", "font-iRANSansBold text-base text-carbon-main")}>
                                            {food.name}
                                        </h2>
                                        <p className={clsx(food.partyRemain === 0 ? "text-inactive-dark" : "text-carbon-dark", "mt-2 break-words font-iranSans text-xs text-inactive-dark")}>
                                            {food.ingredients}
                                        </p>
                                    </div>
                                    <div className={clsx(food.partyRemain === 0 ? "grayscale" : "grayscale-0", "relative shrink-0")}>
                                        <Image src={food.photos[0]} width={200} height={200} alt={`${food.name}`} className={"rounded-lg w-[112px] h-[112px]"}/>
                                    </div>
                                </div>
                                <div className={"flex flex-col"}>
                                    <RemainingFoodNumber partyRemain={food.partyRemain}/>
                                    {
                                        food.price.map((item, i) => (
                                            <FoodPrice
                                                key={i}
                                                item={item}
                                                partyDiscount={food.partyDiscount}
                                                partyRemain={food.partyRemain}
                                                food={food}
                                            />
                                        ))
                                    }
                                </div>
                            </section>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}