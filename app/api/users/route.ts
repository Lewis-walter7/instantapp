import prisma from '@/app/lib/prismadb'

export async function GET() {
   try {
        const users = await prisma.user.findMany({
            orderBy:{
                createdAt: 'desc'
            }
        })
        if(!users){
            return []
        }

        return Response.json(users)
   } catch (error) {
        return []
   }
}