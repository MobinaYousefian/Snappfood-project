'use client'
import Image from "next/image";
import {FoodPrice, PartyHeader, RemainingFoodNumber} from "@/components";
import clsx from "clsx";
import {useDispatch} from "react-redux";
import {handleOpenFoodModal, setFoodData, setImageUrl} from "@/redux/features/foodDataSlice";
import {useParams} from "next/navigation";

export const FoodPartyMenu = ({partyFoods}) => {
    const params = useParams();
    const partyFood = partyFoods.filter(({resId}) => resId === (+params.restaurantId[0]))

    const dispatch = useDispatch();

    const openFoodModal = (food ,e) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(handleOpenFoodModal());
        dispatch(setFoodData(food));
        dispatch(setImageUrl(`${food.photos[0]}`));
        document.body.style.overflow = "hidden";
    }

    if (partyFood.length < 1) return null
    return (
        <section className={"rounded-lg mb-4 bg-surface-light border-[0.0625rem] border-[rgb(235,237,240)]"}>
            <PartyHeader/>
            <div className={"flex-wrap flex m-[calc(0rem)] w-[calc(100%+0rem)] border-t-[0.0625rem] border-t-[#EBEDF0]"}>
                {
                    partyFood.map((food) => (
                        <>
                            {
                                food.partyRemain > 0 ?
                                    <div className={"FoodCard p-[calc(0rem)] w-full border-b-[0.0625rem] border-b-[#EBEDF0] odd:border-l-[0.0625rem]"} key={food.id}>
                                        <section className={"h-full py-4 flex flex-col"}>
                                            <div onClick={(e) => openFoodModal(food, e)} className={"px-4 cursor-pointer flex"}>
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
                                    : null
                            }
                        </>
                    ))
                }
            </div>
        </section>
    )
}