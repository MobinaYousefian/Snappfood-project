import clsx from "clsx";
import {toFarsiNumber} from "@/utils/numberConverter";

export const RemainingFoodNumber = ({partyRemain}) => {

    return (
        <div className={"px-4"}>
            <div className={"mt-4"}>
                {
                    partyRemain > 0 ?
                        <div className={clsx(partyRemain === 0 ? "text-inactive-dark" : partyRemain < 4 ? "text-alert-light" : "text-carbon-main", "flex items-center justify-start")}>
                            <p className={"mb-2 font-iRANSansBold text-sm"}>{toFarsiNumber(partyRemain)}</p>
                            <p className={"mb-2 font-iranSans text-sm mr-1"}>عدد باقی مانده</p>
                        </div>
                        :
                        <div className={"mt-1 flex items-baseline"}>
                            <span className={"mb-2 text-inactive-dark mr-1 font-iranSans text-sm"}>اتمام موجودی</span>
                        </div>
                }
                <div className={"w-full bg-[rgb(235, 237, 240)] mb-2 h-[0.125rem]"}>
                    <div className={clsx( partyRemain === 0 ?  "bg-surface-dark" : partyRemain < 4 ? "bg-alert-light" : "bg-inactive-dark" , "w-full h-full")}/>
                </div>
            </div>
        </div>
    )
}