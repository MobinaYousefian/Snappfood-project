import './globals.css'
import {Footer, Header} from "@/components";
import {Providers} from "@/redux/provider";
import dynamic from "next/dynamic";



export const metadata = {
  title: 'اسنپ فود | سفارش آنلاین غذا از تمامی رستوران ها و فست فودها',
  description: 'سفارش غذا با تخفیف از رستوران ها و فست فود های ایران. ارسال اکسپرس در سریع ترین زمان ممکن. خرید غذا با امکان مقایسه رستوران ها.\n',
}

export default function RootLayout({ children }) {

    const DynamicModals = dynamic(() => import("../components/header/AddressModal"), {
        ssr : false
    })

  return (
    <html lang="en">
      <body>
      <Providers>
          <Header/>
          {children}
          <Footer/>
          <DynamicModals/>
      </Providers>
      </body>
    </html>
  )
}
