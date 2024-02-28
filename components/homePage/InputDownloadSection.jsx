'use client'
import {useState} from "react";
import { v4 as uuidv4 } from "uuid";
// import * as fs from "fs";


export const InputDownloadSection = ({jsonData}) => {
    const [number, setNumber] = useState("");

    const handleSetNumber = (e) => {
        setNumber(e.target.value);
    }

    const handleAssignData = () => {
        // jsonData.userNumbers.push(
        //     {
        //         "userId" : uuidv4(),
        //         "number" : number
        //     }
        // )
        // fs.writeFileSync('data.json', JSON.stringify(jsonData));
    }

    return (
        <form className={"leading-8 box-border w-[35vw] justify-between items-center flex shadow-sp-medium border-[0.0625rem] rounded-[0.375rem] border-carbon-alphaMedium border-solid bg-surface-light mt-[0.375rem] h-12 max-w-[50%] min-w-[17.8125rem]"}>
            <div className={"h-full grow transition-socialFooter"}>
                <input type={"text"} value={number} onChange={handleSetNumber} className={"outline-none placeholder-carbon-main/40 text-carbon-main rounded-[0.375rem] box-border w-full h-full font-iranSans p-3 leading-6"} placeholder={"*********۰۹"}/>
            </div>
            <button type={"submit"} onClick={handleAssignData} className={"hover:bg-accent-light font-iRANSansBold text-[0.875rem] bg-accent-main text-surface-light rounded-[0.375rem] border-accent-main border-solid border-spBorder h-8 min-w-[6.6875rem] ml-2 inline-flex justify-center items-center transition-socialFooter"}>دریافت لینک</button>
        </form>
    )
}