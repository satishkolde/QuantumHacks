import connectDB from '@/app/lib/connectDB';
import mongoose from 'mongoose';
import Product from '@/app/Modal/Product';
import User from '../../Modal/User';
import { NextResponse } from 'next/server';
import Register from '../../Modal/Login';

export async function POST(req) {
    const reqBody = await req.json();
    await connectDB();
    const { email, password } = reqBody;

    const user = await User.findOne({ email: email });

    if (!email) {
        NextResponse.json({ message: "Email is not present" });
    } else {
        const existingUser = await User.findOne({ email: email });

        if (existingUser && existingUser.password === password) {
            console.log(existingUser);

            // Set a cookie with the user's email
            const cookieOptions = {
                maxAge: 24 * 60 * 60 * 1000, // 1 day
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/',
            };

            NextResponse.json({ message: "Login successful" }).setCookie('userEmail', email, cookieOptions);
        } else {
            NextResponse.json({ message: "Invalid email or password" });
        }
    }
}
