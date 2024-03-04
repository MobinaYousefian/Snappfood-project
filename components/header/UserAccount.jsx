'use client'
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import clsx from "clsx";
import {UserProfile} from "@/components";

export const UserAccount = ({user}) => {
    const [open, setOpen] = useState(false);
    const profileRef = useRef(null);

    const handleOpenProfile = () => {setOpen(!open)};

    useEffect(() => {
        document.addEventListener('click', () => setOpen(!open));

        return () => {
            document.removeEventListener("click", () => setOpen(!open))
        }
    },[open]);

    return (
        <>
        <div onClick={handleOpenProfile} className={"p-4 cursor-pointer flex sp-laptop:ml-[0.5625rem]"}>
            <Image src={"/icons/user.svg"} width={14} height={16} alt={"icon"} className={"ml-2"}/>
        </div>
            <div ref={profileRef} className={clsx( !open && "hidden", "relative sp-laptop:ml-[0.5625rem]")}>
                <UserProfile user={user}/>
            </div>
        </>
    )
}