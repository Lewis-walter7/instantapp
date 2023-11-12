import bcrypt from 'bcrypt';
import prisma from '@/app/lib/prismadb';

import { NextResponse } from 'next/server';


export async function POST(
    request: Request
){
    try{
    const body = await request.json();
    const {
        email, username, password
    } = body;

    if(!email || !password || !username){
        return new NextResponse('Missing Info', {status: 400})
    }
    
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            email, username, hashedPassword
        }
    });

    return NextResponse.json(user)
    } catch(error: any){
        return new NextResponse('Internal Error',{status: 500})
    }
}

