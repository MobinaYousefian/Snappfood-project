import {
    CategorySection,
    Cities,
    DownloadSection,
    Seller,
    RestaurantSections,
    FoodParty
} from "@/components";
import {getData} from "@/lib/dataFeching";

export default async function Home() {
    const { restaurants, categories, cities } = await getData();

  return (
      <div>
          <main className={"box-border mx-auto max-w-[85.375rem] pb-4 sp-tablet:py-6 sp-laptop:py-10"}>
              <CategorySection categories={categories}/>
              {/*<FoodParty/>*/}
              <RestaurantSections restaurants={restaurants}/>
              <DownloadSection/>
              <Seller/>
          </main>
          <Cities cities={cities}/>
      </div>
  )
}
