"use client"
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {handleCloseExtraService} from "@/redux/features/ExtraServiceSlice";
import {ExtraItem} from "@/components/restaurants/leftAside/extraService/ExtraItem";
import {AddExtraToCart} from "@/components/restaurants/leftAside/extraService/AddExtraToCart";

export const ExtraServiceOnFood = () => {
    const {isOpenExtraService, foodWithExtra, extrasSelected} = useSelector(state => state.extraService);
    const {foodE, priceTagE} = foodWithExtra
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(handleCloseExtraService());
        document.body.style.overflow = "auto";
    }

    if (!isOpenExtraService) return null;
    return (
        <div className={"inset-0 modal-card-animation flex justify-center items-center fixed z-[1000]"}>
            <div className={"w-[95vw] max-w-[30rem] address-modal-card-animation rounded-xl bg-surface-light shadow-sp-modal max-h-[90vh] overflow-hidden"}>
                <div className={"items-center h-[56px] w-full relative flex justify-between pl-[56px]"}>
                    <button onClick={handleCloseModal} className={"items-center justify-center flex py-[1px] px-[6px] w-[56px] h-[56px]"}>
                        <Image src={"/icons/close.svg"} width={14} height={14} alt={"icons"} className={"w-3.5 h-3.5"}/>
                    </button>
                    <p className={"font-iRANSansBold text-sm text-carbon-main"}> </p>
                </div>
                <section className={"px-4 pb-4"}>
                    <div className={"mb-2"}>
                        <p className={"font-iRANSansBold text-base text-carbon-light"}>انتخاب افزودنی</p>
                    </div>
                    <div>
                        <p className={"font-iranSans text-sm text-carbon-light"}>{`${foodE.name} ${foodE.name !== priceTagE ? priceTagE : ""}`}</p>
                    </div>
                </section>
                <form>
                    <section className={"overflow-y-auto p-4 max-h-[50vh]"}>
                        <section className={"border-carbon-alphaLight border-[0.0625rem] rounded-[4px] pt-5 pr-4 pl-[1.125rem] pb-[1.125rem]"}>
                            <div className={"m-2"}>
                                <p className={"pl-2 font-iRANSansBold text-xs text-carbon-light"}>سرویس اضافه</p>
                            </div>
                            {
                                foodE.extraService.map((item) => (
                                    <ExtraItem
                                        key={item.id}
                                        extra={item}
                                        extrasSelected={extrasSelected}
                                    />
                                ))
                            }
                        </section>
                    </section>
                    <AddExtraToCart
                        foodWithExtra={foodWithExtra}
                        extrasSelected={extrasSelected}
                        handleCloseModal={handleCloseModal}
                    />
                </form>
            </div>
        </div>
    )
}