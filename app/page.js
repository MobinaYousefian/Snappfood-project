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
    const { restaurants, categories, cities, partyFoods} = await getData();

  return (
      <>

          <div>
              <Suspense fallback={<Loading/>}>
                  <main className={"box-border mx-auto max-w-[85.375rem] pb-4 sp-tablet:py-6 sp-laptop:py-10"}>
                      <CategorySection categories={categories}/>
                      <FoodParty restaurants={restaurants} partyFoods={partyFoods}/>
                      <RestaurantSections restaurants={restaurants}/>
                      <DownloadSection/>
                      <Seller/>
                  </main>
              </Suspense>
              <Cities cities={cities}/>
          </div>
          <Footer/>
      </>

  )
}
