import {
    CategorySection,
    Cities,
    DownloadSection,
    Seller
} from "@/components";

export default function Home() {
  return (
      <div>
          <main className={"mx-auto max-w-[85.375rem] pb-4 sp-tablet:py-6 sp-laptop:py-10"}>
              <CategorySection/>
              <DownloadSection/>
              <Seller/>
          </main>
          <Cities/>
      </div>
  )
}
