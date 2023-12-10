'use client'

import {Button} from "@stn-ui/button";
import {DeleteChatIcon} from "@stn-ui/icons";
import {FC} from "react";

interface IDeleteUserButtonProps {
    handleClick: (userId: string) => void
    userId: string
}

export const DeleteUserButton: FC<IDeleteUserButtonProps> = ({handleClick, userId}) => {
    return <Button onClick={() => handleClick(userId)}><DeleteChatIcon /></Button>
}
