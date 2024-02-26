import Link from "next/link";

export const SecondPageListLinks = () => {
    const pageList2 = ["تماس با اسنپ‌فود", "پرسش‌های متداول", "ثبت شکایات", "اپلیکیشن موبایل"]

    return (
        <>
            {pageList2.map((item, i) => (
                <div key={i}>
                    <Link href={"/"} >
                        <div className={"m-2"}>
                            <p className={"font-iranSans text-xs inline-block text-carbon-main hover:text-accent-dark transition-socialFooter"}>{item}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}