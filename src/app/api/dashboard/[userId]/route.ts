import {deleteUser} from "@/lib/api/db";
import {NextRequest, NextResponse} from "next/server";
import {revalidateTag} from "next/cache";

interface Params {
    params: {
        userId: string;
    };
}

export const DELETE = async (_: NextRequest, { params }: Params) => {
    try {
        const response = await deleteUser(params.userId)

        revalidateTag('all_users')

        return NextResponse.json(response)
    } catch(error){
        return NextResponse.json(error)
    }
}
