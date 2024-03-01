import {getData} from "@/lib/dataFeching";

export async function getWorkTime () {

    const { restaurants } = await getData();

    const workTime = restaurants.map(({workHour}) => {
        return workHour;
    });

    return workTime;
}






