'use client'
import {toFarsiNumber} from "@/utils/numberConverter";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import clsx from "clsx";
import {useDispatch} from "react-redux";
import {handleNotShow} from "@/redux/features/showPartySlice";

export const PartyCountDown = () => {
    const pathName = usePathname()
    const isPartyPage = pathName === "/party"

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    const dispatch = useDispatch();

    let date = new Date();
    date.setHours(23);
    date = date.getTime()
    // console.log(`date: ${date}`)

    const startTime = () => {
        let now = new Date()
        now.setHours(20);
        now.getTime()
        // console.log(`now: ${now}`)
        const distance =  date - now;
        // console.log(`distance: ${distance}`)

        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

        if (distance < 0) {
            dispatch(handleNotShow())
        }
    }

    useEffect(() => {

        const interval = setInterval(() => {
            startTime()
        }, 1000)

        return () => clearInterval(interval);
    },[])

    return (
        <div className={"pt-0.5 ml-1.5 flex justify-center min-w-[2.625rem] drop-shadow-[0-1px-0-rgba(0,0,0,0.24)]"}>
            <span className={clsx(isPartyPage ? "text-[rgb(225,36,146)]" : "text-surface-light" ,"w-6 text-center text-lg font-iRANSansBold")}>{toFarsiNumber(seconds)}</span>
            <span className={clsx(isPartyPage ? "text-[rgb(225,36,146)]" : "text-surface-light" ,"w-2 text-center text-lg font-iRANSansBold")}>:</span>
            <span className={clsx(isPartyPage ? "text-[rgb(225,36,146)]" : "text-surface-light" ,"w-6 text-center text-lg font-iRANSansBold")}>{toFarsiNumber(minutes)}</span>
            {
                hours > 0 ?
                    <span>
                        <span className={clsx(isPartyPage ? "text-[rgb(225,36,146)]" : "text-surface-light" ,"w-2 text-center text-lg font-iRANSansBold")}>:</span>
                        <span className={clsx(isPartyPage ? "text-[rgb(225,36,146)]" : "text-surface-light" ,"mr-1 w-5 text-center text-lg font-iRANSansBold")}>{toFarsiNumber(hours)}</span>
                    </span>
                : null
            }
        </div>
    )
}