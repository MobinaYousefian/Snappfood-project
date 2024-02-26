import Link from "next/link";

export const FirstPageListLinks = () => {

    const pageList = ["درباره اسنپ‌فود", "فرصت‌های شغلی", "وبلاگ", "قوانین سایت", "حریم خصوصی", "ثبت نام فروشندگان"]

    return (
        <>
            {pageList.map( (item, i) => (
                <div key={i}>
                    <Link href={"/"}>
                        <div className={"m-2"}>
                            <p className={"font-iranSans text-xs inline-block text-carbon-main"}>{item}</p>
                        </div>
                    </Link>
                </div>
            ) )}
        </>
    )
}