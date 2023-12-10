'use client'

import styles from './copy-button.module.scss'
import {FC} from "react";
import {ToastTypes, useToasts} from "@stn-ui/toasts";

interface ICopyButtonProps {
    prompt: string
}

export const CopyButton:FC<ICopyButtonProps> = ({prompt}) => {
    const { notify } = useToasts();

    const handleCopyToClipBoard = async () => {
        console.log(1)
        try {
            await navigator.clipboard.writeText(prompt)
            notify({
                type: ToastTypes.Success,
                message: 'Prompt successfully copied to clipboard',
            })
        } catch(error){
            notify({
                type: ToastTypes.Warning,
                message: 'Something went wrong',
            })
        }
    }

    return <button className={styles.button} onClick={handleCopyToClipBoard}>Copy</button>
}
