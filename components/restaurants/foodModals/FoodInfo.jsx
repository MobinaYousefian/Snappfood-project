import {Description, FoodPrice, ImageSlider, RemainingFoodNumber} from "@/components";
import {useSelector} from "react-redux";

export const FoodInfo = ({resInfo}) => {
    const {foodData} = useSelector(state => state.foodData);


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
            </div>
        </div>
    )
}