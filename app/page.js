import {
    CategorySection,
    Cities,
    DownloadSection,
    Seller
} from "@/components";

export default function Home() {
  return (
      <div>
          <main className={"mx-auto max-w-[85.375rem] pb-4 sp-tablet:pb-6 sp-laptop:pb-10"}>
              <CategorySection/>
              <DownloadSection/>
              <Seller/>
          </main>
          <Cities/>
      </div>
  )
}
