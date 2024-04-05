'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {handleOpenModal} from "@/redux/features/headerSearchSlice";
import {useParams, usePathname} from "next/navigation";

export const SearchBox = ({restaurants}) => {
    const pathName = usePathname();
    const isHomePage = pathName === "/";
    const isResCategory = pathName === "/restaurant";
    const isPartyPage = pathName === "/party"

    const dispatch = useDispatch();
    const handleOpenSearch = () => {dispatch(handleOpenModal())}

    const {searchTerm} = useSelector(state => state.searchModal);

    let whichResPage;
    const params = useParams()
    if (params.restaurantId) {
        whichResPage = restaurants.find((res) => res.id === Number(params.restaurantId[0])).name;
    }

    return (
        <div onClick={handleOpenSearch} className={"header-searchBox w-[10.5625rem] items-center flex absolute left-0 box-border h-12 p-4 rounded-[0.625rem]"}>
            <Image src={"/icons/search.svg"} width={17} height={17} alt={"icon"} className={"opacity-[0.45] ml-2"}/>
            {
                !searchTerm ?
                <p className={"text-inactive-dark text-base font-iranSans ml-2 max-[959px]:hidden"}>
                    {isHomePage ? "جست‌وجو در اسنپ‌فود" : isResCategory || isPartyPage ? "جست‌وجو در رستوران" : `جست‌وجو در ${whichResPage}`}
                </p>
                    :
                    <p className={"text-inactive-dark text-base font-iranSans ml-2 max-[959px]:hidden"}>
                        {searchTerm}
                    </p>
            }

        </div>
    )
}