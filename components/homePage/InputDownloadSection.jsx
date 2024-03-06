'use client'
import {useState} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup"
import {useForm} from "react-hook-form";

const phoneRegex = new RegExp('^(098|0098|98|\\+98|0)?9(0[0-5]|[1 3]\\d|2[0-3]|9[0-9]|41)\\d{7}$')

const schema = yup.object({
    phoneNumber : yup.string().matches(phoneRegex, "شماره تلفن همراه وارد شده معتبر نیست.").required()
}).required()

export const InputDownloadSection = () => {
    const [submitMassage, setSubmitMassage] = useState("");

    const {register, handleSubmit, formState: { errors }, reset} = useForm({
        resolver : yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
        setSubmitMassage("لینک دانلود اپلیکیشن برای شما ارسال شد.");
        reset();
    }

    /* to change Farsi digits to English: */
    const [number, setNumber] = useState("");
    const handleChange = (e) => {setNumber(e.target.value);}

    const convertToEnglish = () => {
        return number.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, function (c) {
            return c.charCodeAt(0) & 0xf;
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={"leading-8 box-border w-[35vw] justify-between items-center flex shadow-sp-medium border-[0.0625rem] rounded-[0.375rem] border-carbon-alphaMedium border-solid bg-surface-light mt-[0.375rem] h-12 max-w-[50%] min-w-[17.8125rem]"}>
                <div className={"h-full grow transition-socialFooter"}>
                    <input {...register("phoneNumber")} value={convertToEnglish()} onChange={handleChange} type={"text"} className={"outline-none placeholder-carbon-main/40 text-carbon-main rounded-[0.375rem] box-border w-full h-full font-iranSans p-3 leading-6"} placeholder={"*********۰۹"}/>
                </div>
                <button type={"submit"} className={"hover:bg-accent-light font-iRANSansBold text-[0.875rem] bg-accent-main text-surface-light rounded-[0.375rem] border-accent-main border-solid border-spBorder h-8 min-w-[6.6875rem] ml-2 inline-flex justify-center items-center transition-socialFooter"}>دریافت لینک</button>
            </form>
            <p className={"mt-2 font-iranSans text-sm text-alert-main"}>
                {errors.phoneNumber?.message}
            </p>
            <p className={"mt-2 font-iranSans text-sm text-accent2-main"}>
                {submitMassage}
            </p>
        </>
    )
}