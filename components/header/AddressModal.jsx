'use client'
import {Modal} from "@mui/base";
import { closeAddressModal } from "@/redux/features/headerAddressSlice";
import { useDispatch, useSelector } from "react-redux";

const AddressModal = () => {

    const headerAddress = useSelector(state => state.headerAddress)
    // console.log(headerAddress)
    // const { isOpen, address} =
    const dispatch = useDispatch()

    const handleCloseModal = () => {
        dispatch(closeAddressModal())
    }

    return (
        <div>

        </div>
        // <Modal onClose={handleCloseModal}>
        //     fgjfgj
        // </Modal>
    )
}

export default AddressModal;