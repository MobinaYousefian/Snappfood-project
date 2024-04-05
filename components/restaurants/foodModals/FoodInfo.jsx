'use client'
import {Description, FoodPrice, ImageSlider, RemainingFoodNumber} from "@/components";
import {useDispatch, useSelector} from "react-redux";
import Link from "next/link";
import Image from "next/image";
import {handleCloseFoodModal} from "@/redux/features/foodDataSlice";
import {useParams} from "next/navigation";

export const FoodInfo = ({resInfo}) => {
    const {foodData} = useSelector(state => state.foodData);
    const dispatch = useDispatch();
    const params = useParams();


    return (
        <div className={"sp-laptop:flex-row flex-col flex px-4 pb-4 justify-between"}>
            <ImageSlider/>
            <div className={"w-auto flex flex-col justify-start sp-laptop:w-[24rem]"}>
                <Description/>
                {
                    foodData.isParty === true ?
                        <RemainingFoodNumber partyRemain={foodData.partyRemain}/>
                        : null
                }
                {
                    foodData.price.map((item, i) =>(
                        <FoodPrice
                            key={i}
                            item={item}
                            discountNumber={resInfo.discountNumber}
                            food={foodData}
                            partyRemain={foodData.partyRemain}
                            partyDiscount={foodData.partyDiscount}
                        />
                    ))
                }
                {
                    (foodData.isParty === true && !params.restaurantId) &&
                    <div className={"flex justify-between py-[1.9375rem]"}>
                        <div className={"px-3.5 rounded-[4.5rem]"}>
                            <p className={"ml-2 font-iranSans text-sm text-carbon-main"}>{foodData.resDelivery.type}</p>
                        </div>
                        <Link onClick={() => dispatch(handleCloseFoodModal())} href={`/restaurant/${foodData.resId}/${foodData.resName.split(" ").join("_").replace("(", "").replace(")", "")}`}>
                            <div className={"flex items-center"}>
                                <p className={"font-iRANSansBold text-sm text-accent2-main"}>{foodData.resName}</p>
                                <Image src={"/icons/arrow-left-green.svg"} width={9} height={16} alt={"icon"} className={"mr-4"}/>
                            </div>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}