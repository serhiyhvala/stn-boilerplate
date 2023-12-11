'use client'

import {FC} from "react";
import {ToastTypes, useToasts} from "@stn-ui/toasts";
import {useRouter} from "next/navigation";

interface IDeleteButtonProps {
    userId: string
}

export const DeleteButton:FC<IDeleteButtonProps> = ({userId}) => {
    const {notify} = useToasts()
    const router = useRouter()
    const handleDeleteUser = async () => {
        try {
            await fetch(`/api/dashboard/${userId}`, {
                method: 'DELETE',
            })
            router.refresh()
            notify({
                message: 'User Successfully Deleted',
                type: ToastTypes.Success
            })
        } catch(error){
            notify({
                message: 'Something went wrong',
                type: ToastTypes.Danger
            })
        }
    }
    return (
        <button onClick={handleDeleteUser}>Delete</button>
    )
}
