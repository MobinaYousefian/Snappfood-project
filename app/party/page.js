import Image from "next/image";
import {getData} from "@/lib/dataFeching";
import {Footer, PartyCountDown, PartyFoodCard} from "@/components";

export default async function Party () {
    const {partyFoods} = await getData()

    return (
        <>
            <main className={"mx-auto max-w-[85.375rem] w-full grow p-6 pt-[4.25rem] min-h-[80vh]"}>
                <div className={"mb-8 flex justify-between"}>
                    <div className={"flex items-center"}>
                        <Image src={"/icons/party-colored.svg"} width={600} height={600} alt={"party"} className={"h-[24px] w-[24px] ml-[0.9375rem]"}/>
                        <h1 className={"font-iRANSansBold text-lg text-[rgb(103,106,112)]"}>فود پارتی</h1>
                    </div>
                    <div className={"flex items-center justify-center"}>
                        <div className={"min-w-[2.625rem] ml-1.5 pt-0.5"}>
                            <PartyCountDown/>
                        </div>
                        <Image src={"/icons/foodParty-countdown-pink.svg"} width={18} height={18} alt={"party count down"}/>
                    </div>
                </div>
                <div className={"flex-wrap flex m-[calc(-0.75rem)] w-[calc(100%+1.5rem)]"}>
                    {
                        partyFoods.map((food) => (
                            <div className={"party-mainPage max-w-full basis-full p-[calc(0.75rem)]"} key={food.id}>
                                <PartyFoodCard food={food}/>
                            </div>
                        ))
                    }
                </div>
                <div className={"p-8"}/>
            </main>
            <Footer/>
        </>
    )
}