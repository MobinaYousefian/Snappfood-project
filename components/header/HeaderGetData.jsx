import {Header} from "@/components";
import {getData} from "@/lib/dataFeching";

export const HeaderGetData = async () => {
    const {user, storeCategories} = await getData()

    return (
        <Header storeCategories={storeCategories} user={user}/>
    )
}