import './globals.css'
import {Footer, Header} from "@/components";
import dynamic from "next/dynamic";
import ReduxProvider from "@/redux/ReduxProvider";


export const metadata = {
  title: 'اسنپ فود | سفارش آنلاین غذا از تمامی رستوران ها و فست فودها',
  description: 'سفارش غذا با تخفیف از رستوران ها و فست فود های ایران. ارسال اکسپرس در سریع ترین زمان ممکن. خرید غذا با امکان مقایسه رستوران ها.',
}

export default async function RootLayout({ children }) {
    const DynamicModals = dynamic(() => import("../components/Modals"), {
        ssr : false
    })

  return (
      <ReduxProvider>
          <html lang="en">
          <body>
          <Header/>
          {children}
          <Footer/>
          <DynamicModals/>
          </body>
          </html>
      </ReduxProvider>
  )
}
