import prisma from '@/app/lib/prismadb'

export async function GET() {
   try {
        const users = await prisma.user.findMany({
            orderBy:{
                createdAt: 'desc'
            }
        })
        if(!users || users.length === 0){
            return Response.json([])
        }

        return Response.json(users)
   } catch (error) {
        return;
   }
}