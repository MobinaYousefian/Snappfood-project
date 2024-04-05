'use client'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {
    handleCloseModal,
    setResPageSearchResult,
    setSearchHistory,
    setSearchTerm
} from "@/redux/features/headerSearchSlice";
import {SearchCategories, SearchFoods, SearchHistory, SearchInput, SearchRestaurants} from "@/components";
import {useParams, useRouter} from "next/navigation";
import Image from "next/image";

export const Search = ({resPageCategory, restaurants}) => {
    const dispatch = useDispatch();
    const {isOpen, searchTerm, searchHistory} = useSelector((state => state.searchModal));
    const searchRef = useRef(null);
    const inputRef = useRef(null);
    const params = useParams();
    const router = useRouter();

    let idParam
    let nameParam
    if (params.restaurantId) {
        idParam = params.restaurantId[0]
        nameParam = params.restaurantId[1]
    }

    const handleClose = () => {
        dispatch(handleCloseModal());
    }

    useEffect(() => {
        if (isOpen) {
            inputRef.current.focus();
        }
    }, [isOpen]);


    const foods = (restaurants.map((item) => item.foods)).flat()

    const foodsSearch = foods.filter((item) => item.name.includes(searchTerm));
    const resSearch = restaurants.filter((item) => item.name.includes(searchTerm));
    const categorySearch = resPageCategory.filter((item) => item.name.includes(searchTerm));

    const resSearchResult = resSearch.toSpliced(5);
    const foodsSearchResult = foodsSearch.toSpliced(2);

    let whichResPage
    if (params.restaurantId) {
        whichResPage = params.restaurantId[0];
    }

    let searchFoodInRes
    if (whichResPage) {
        const resFood = restaurants[whichResPage - 1].foods
        searchFoodInRes = resFood.filter((item) => item.name.includes(searchTerm));
    }

    const handleCloseSearch = (e) => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            dispatch(handleCloseModal());
            if (!whichResPage) {
                dispatch(setSearchHistory(searchTerm));
            }
        }
    }

    const handleSearch = () => {
        dispatch(handleCloseModal());
        if (whichResPage) {
            dispatch(setResPageSearchResult(searchFoodInRes))
            router.push(`/restaurant/${idParam}/${nameParam}?query=${searchTerm}`);
        }
    }

    const handleOnChange = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(e.target.value));
    }

    if (!isOpen) return null;
    return (
        <div onClick={handleCloseSearch} className={"z-[10000] inset-0 fixed modal-card-animation flex justify-center items-center"}>
            <div ref={searchRef} className={"search-modal-card-animation overflow-hidden max-h-[90vh] py-3 m-auto min-w-[18.75rem] fixed top-0 flex justify-center w-[31vw]"}>
                <div className={"flex-col flex w-[95%]"}>
                    <SearchInput inputRef={inputRef} whichResPage={whichResPage} searchFoodInRes={searchFoodInRes} handleOnChange={handleOnChange} nameParam={nameParam} idParam={idParam}/>
                    <div className={"mt-1 overflow-y-auto bg-surface-light rounded-md flex flex-col"}>
                        <SearchHistory searchHistory={searchHistory}/>
                        {
                            !searchFoodInRes &&
                            <>
                                {
                                    searchTerm && <SearchCategories categorySearch={categorySearch} handleClose={handleClose}/>
                                }
                                {
                                    searchTerm && resSearchResult.length > 0 && <SearchRestaurants resSearch={resSearch} resSearchResult={resSearchResult} handleClose={handleClose}/>
                                }
                                {
                                    foodsSearchResult.length > 0 && searchTerm && <SearchFoods foodsSearch={foodsSearch} foodsSearchResult={foodsSearchResult} restaurants={restaurants} handleClose={handleClose}/>
                                }
                            </>
                        }
                        {
                            (whichResPage && searchTerm) &&
                            <div onClick={handleSearch} className={"items-center justify-between flex cursor-pointer p-[1.125rem]"}>
                                <span className={"flex font-iranSans text-sm text-carbon-light"}>
                                    جستجوی
                                    <p className={"mr-1 font-iRANSansBold text-carbon-main"}>{searchTerm}</p>
                                   </span>
                                <Image src={"/icons/search-result.svg"} width={12} height={12} alt={"icon"}/>
                            </div>
                        }
                        {
                            !searchTerm &&
                            <div className={"items-center justify-between flex cursor-pointer p-[1.125rem]"}>
                                <span className={"font-iranSans text-sm text-carbon-light"}>
                                    عبارت مورد نظر خود را وارد کنید.
                                </span>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}