'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {handleCloseSupport, handleOpenSupport} from "@/redux/features/supportSlice";

export const SupportButton = () => {
    const {isOpen} = useSelector((state) => state.supportModal);
    const dispatch = useDispatch();

    const handleOpenModal = () => {
        dispatch(handleOpenSupport());
        document.body.style.overflow = "hidden";
    };
    const handleClose = () => {
        dispatch(handleCloseSupport());
        document.body.style.overflow = "auto";
    };

    return (
        <>
            {
                !isOpen && <button onClick={handleOpenModal}
                                   className={"support-modal-card-animation2 py-[1px] px-[6px] fixed right-4 bottom-4 z-10 transition-spport inline-flex justify-center items-center w-12 h-12 border-[1px] border-accent-alphaLight rounded-full bg-accent-main shadow-sp-medium overflow-visible bg-clip-padding hover:bg-accent-light"}>
                    <Image src={"/icons/support.svg"} width={24} height={24} alt={"Snapp-support"}/>
                </button>
            }
            {
                isOpen && <button onClick={handleClose} className={"support-modal-card-animation transition-spport fixed right-4 bottom-4 z-[10001] inline-flex justify-center items-center w-12 h-12 py-[1px] px-[6px] rounded-full bg-surface-light shadow-sp-medium bg-clip-padding border-surface-alphaLight border-[1px]"}>
                    <Image src={"/icons/close-support.svg"} width={14} height={14} alt={"Snapp-support"}/>
                </button>
            }
        </>
    )
}