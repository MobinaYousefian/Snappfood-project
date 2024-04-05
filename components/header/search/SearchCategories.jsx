import Link from "next/link";
import Image from "next/image";

export const SearchCategories = ({categorySearch, handleClose}) => {

    return (
        <div className={"border-b flex flex-col border-b-[rgb(235,237,240)]"}>
            {
                categorySearch.map((item) => (
                    <Link onClick={handleClose} href={`/restaurant?category=${item.id}&parent=${item.parent}`} key={item.id}>
                        <div className={"p-5 flex items-center"}>
                            <Image src={"/icons/category-search.svg"} width={24} height={22} alt={"icon"} className={"ml-4"}/>
                            <div className={"items-center flex font-iranSans text-sm text-carbon-light"}>
                                <p>دسته‌بندی</p>
                                <span className={"mr-1 font-iRANSansBold text-carbon-main"}>{item.name}</span>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}