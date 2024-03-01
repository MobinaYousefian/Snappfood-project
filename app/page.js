import {
    CategorySection,
    Cities,
    DownloadSection,
    Seller
} from "@/components";
import Link from "next/link";
import Image from "next/image";
import {RestaurantsSlider} from "@/components/homePage/RestaurantsSlider";

const slidersCategories = ["پیشنهاد کاربران", "تازه‌ها در اسنپ ‌فود", "برترین‌ها", "جایزه خرید", "مزه‌های خاص", "دارای تخفیف", "یک تجربه جدید", "دارای کوپن", "فقط در اسنپ‌فود"];

export default function Home() {

  return (
      <div>
          <main className={"mx-auto max-w-[85.375rem] pb-4 sp-tablet:py-6 sp-laptop:py-10"}>
              <CategorySection/>
              {
                  slidersCategories.map( (item, i) => (
                      <section key={i} className={"padding-size mx-4"}>
                          <section className={"flex flex-col slidersCategories-transition"}>
                              <div className={"mb-6 flex justify-between "}>
                                  <p className={"text-carbon-main leading-8 font-iRANSansBold text-[0.875rem]"}>{item}</p>
                                  <Link href={"/"}>
                                      <div className={"flex"}>
                                          <p className={"text-accent2-main leading-7 font-iRANSansBold text-[0.875rem]"}>مشاهده همه</p>
                                          <Image src={"/icons/arrow-left-green.svg"} width={9} height={16} alt={"icon"} className={"mr-4"}/>
                                      </div>
                                  </Link>
                              </div>
                              <RestaurantsSlider/>
                          </section>
                      </section>
                  ))
              }
              <DownloadSection/>
              <Seller/>
          </main>
          <Cities/>
      </div>
  )
}
