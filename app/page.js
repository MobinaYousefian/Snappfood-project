import {
    CategorySection,
    Cities,
    DownloadSection,
    Seller,
    RestaurantSections,
    FoodParty, Footer
} from "@/components";
import {getData} from "@/lib/dataFeching";
import {Suspense} from "react";
import Loading from "@/app/loading";

export default async function Home() {
    const { restaurants, categories, cities } = await getData();

  return (
      <>

          <div>
              <main className={"box-border mx-auto max-w-[85.375rem] pb-4 sp-tablet:py-6 sp-laptop:py-10"}>
                  <Suspense fallback={<Loading/>}>
                      <CategorySection categories={categories}/>
                      {/*<FoodParty/>*/}
                      <RestaurantSections restaurants={restaurants}/>
                      <DownloadSection/>
                      <Seller/>
                  </Suspense>
              </main>
              <Cities cities={cities}/>
          </div>
          <Footer/>
      </>

  )
}
