import Image from "next/image";

export const SearchNotFound = () => {

    return (
        <section className={"FoodMenu basis-full max-w-full p-[calc(1rem)]"}>
            <section className={"border-surface-dark bg-surface-light rounded-lg border-[0.0625rem]"}>
                <div className={"flex justify-center items-center flex-col"}>
                    <div className={"h-[50vh] flex justify-center items-center flex-col"}>
                        <Image src={"/icons/search-not-found.svg"} width={160} height={160} alt={"icon"}/>
                        <p className={"font-iranSans text-sm text-inactive-dark my-4"}>هیچ نتیجه‌ای یافت نشد!</p>
                    </div>
                </div>
            </section>
        </section>
    )
}