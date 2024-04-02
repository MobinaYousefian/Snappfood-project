'use client'
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {UserProfile} from "@/components";

export const UserAccount = ({user}) => {
    const [open, setOpen] = useState(false);
    const profileRef = useRef(null);

    const handleOpenProfile = () => {setOpen(!open)};
    const handleCloseProfile = () => {setOpen(false);}

    useEffect(() => {

        const handleClickOutside = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                handleCloseProfile()
            }
        }
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    },[open]);

    return (
        <>
        <div onClick={handleOpenProfile} className={"p-4 cursor-pointer flex sp-laptop:ml-[0.5625rem]"}>
            <Image src={"/icons/user.svg"} width={14} height={16} alt={"icon"} className={"w-[14px] h-[16px] ml-2"}/>
        </div>
            <div ref={profileRef} className={"w-0 h-0 relative sp-laptop:ml-[0.5625rem]"}>
                {open && <UserProfile user={user}/>}
            </div>
        </>
    )
}