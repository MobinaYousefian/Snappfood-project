import Link from "next/link";
import Image from "next/image";
import {RestaurantsSlider} from "@/components";

export const RestaurantSections = ({restaurants}) => {

    const slidersCategories = ["پیشنهاد کاربران", "تازه‌ها در اسنپ ‌فود", "برترین‌ها", "جایزه خرید", "مزه‌های خاص", "دارای تخفیف", "یک تجربه جدید", "دارای کوپن", "فقط در اسنپ‌فود"];

    return (
        slidersCategories.map( (item, i) => (
            <section key={i} className={"padding-size mx-4"}>
                <section className={"flex flex-col slidersCategories-transition"}>
                    <div className={"mb-6 flex justify-between "}>
                        <p className={"text-2xl text-carbon-main font-iRANSansBold max-[400px]:text-[0.875rem]"}>{item}</p>
                        <Link href={"/"}>
                            <div className={"flex"}>
                                <p className={"text-lg text-accent2-main leading-7 font-iRANSansBold max-[400px]:text-[0.875rem]"}>مشاهده همه</p>
                                <Image src={"/icons/arrow-left-green.svg"} width={9} height={16} alt={"icon"} className={"mr-4"}/>
                            </div>
                        </Link>
                    </div>
                    <RestaurantsSlider restaurants={restaurants}/>
                </section>
            </section>
        ))
    )
}