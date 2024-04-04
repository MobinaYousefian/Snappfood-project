import {Header} from "@/components";
import {getData} from "@/lib/dataFeching";

export const HeaderGetData = async () => {
    const {user, storeCategories, restaurants} = await getData()

    return (
        <Header storeCategories={storeCategories} user={user} restaurants={restaurants}/>
    )
}