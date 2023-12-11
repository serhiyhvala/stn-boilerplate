import {NextResponse} from "next/server";
import {getAllUsers} from "@/lib/api/db";

export const GET = async () => {
    try {
        const response = await getAllUsers()

        return NextResponse.json(response)
    } catch (error){
        return NextResponse.json(error)
    }
}
