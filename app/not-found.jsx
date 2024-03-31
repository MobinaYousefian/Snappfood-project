import Image from "next/image";

export default function NotFound () {
    return (
        <body className={"relative bg-[#e3e3e3] min-w-[300px]"}>
        <div className={"relative w-auto h-auto text-center my-auto align-middle top-[5%]"}>
            <div className={"mx-auto text-center mt-[5%]"}>
                <Image src={"/icons/new-error-logo.png"} width={107} height={114} alt={"new-error-logo"} className={"mx-auto"}/>
            </div>
            <div className={"mx-auto text-center mt-[1%]"}>
                <Image src={"/icons/404_1.jpg"} width={830} height={344} alt={"new-error-logo"} className={"mx-auto"}/>
            </div>
            <div>
                <div className={"text-center mb-[10px] mt-[15px] text-[#353535] font-iRANSansBold text-[28px]"}>
                    متاسفانه، صفحه‌ موردنظر شما یافت نشد
                </div>
                <div className={"items-center justify-center inline-flex mx-auto w-[18%] m-[40px] text-center rounded-[5px] px-[40px] py-[10px] border border-[#505050]"}>
                    <a href={"/"}>
                        <p  className={"transition-categoryHomePage text-[13px] font-iranSans text-[#505050]"}>
                            بازگشت به صفحه اصلی
                        </p>
                    </a>
                </div>
            </div>
        </div>
        </body>
    )
}