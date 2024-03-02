import {getData} from "@/lib/dataFeching";

export async function getWorkTime () {

    const { restaurants } = await getData();

    return restaurants.map(({openHour, openMinute, closeHour, closeMinute}) => {
        const openingTimeNoon = openHour[0] * 60 + openMinute[0];
        const openingTimeNight = openHour[1]? openHour[1] * 60 : null + openMinute[1] ? openMinute[1] : null;
        const closingTimeNoon = closeHour[0] * 60 + closeMinute[0];
        const closingTimeNight = closeHour[1] ? closeHour[1] * 60 : null + closeMinute[1] ? closeMinute[1] : null;

        return [openingTimeNoon, closingTimeNoon, openingTimeNight, closingTimeNight]
    });
}







