import prisma from '@/app/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET() {
   try {
        const users = await prisma.user.findMany({
            orderBy:{
                createdAt: 'desc'
            }
        })

        return NextResponse.json(users)
   } catch (error) {
        return null
   }
}