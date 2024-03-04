import './globals.css'
import {Footer, Header} from "@/components";
import dynamic from "next/dynamic";
import {getData} from "@/lib/dataFeching";



export const metadata = {
  title: 'اسنپ فود | سفارش آنلاین غذا از تمامی رستوران ها و فست فودها',
  description: 'سفارش غذا با تخفیف از رستوران ها و فست فود های ایران. ارسال اکسپرس در سریع ترین زمان ممکن. خرید غذا با امکان مقایسه رستوران ها.\n',
}

export default async function RootLayout({ children }) {

    const { storeCategories, user } = await getData()

    // const DynamicModals = dynamic(() => import("../components/header/Address"), {
    //     ssr : false
    // })

  return (
    <html lang="en">
      <body>
      <Header storeCategories={storeCategories} user={user}/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
