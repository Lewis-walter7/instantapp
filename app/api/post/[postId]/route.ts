import prisma from '@/app/lib/prismadb';
import { NextRequest } from "next/server";

export async function GET(
    req: NextRequest
){
   try {
        const postId  = req.nextUrl.searchParams.get('postId');

        if(!postId || typeof postId !== 'string'){
            return Response.error()
        }

        const post = await prisma.post.findUnique({
            where: {
                id: postId
            },
            include: {
                user: true,
                comments: true
            }
        });

        if(!post) {
            return Response.error()
        }

        return Response.json(post)
   } catch (error) {
        return Response.error()
   }
}