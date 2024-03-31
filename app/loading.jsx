export default function Loading ()  {

    return (
        <div className={"p-8"}>
            <div className={"m-auto h-full relative flex justify-center items-center w-[72px]"}>
                <div className={"loading1-animation left-[8px] absolute rounded-full bg-accent-main w-[13px] h-[13px]"}> </div>
                <div className={"loading23-animation left-[8px] absolute rounded-full bg-accent-main w-[13px] h-[13px]"}> </div>
                <div className={"loading23-animation left-[32px] absolute rounded-full bg-accent-main w-[13px] h-[13px]"}> </div>
                <div className={"loading4-animation left-[56px] absolute rounded-full bg-accent-main w-[13px] h-[13px]"}> </div>
            </div>
        </div>
    )
}