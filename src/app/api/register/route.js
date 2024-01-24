import connectDB from '@/app/lib/connectDB'
import mongoose from 'mongoose'
import user from '@/app/Modal/User'
import { NextResponse } from 'next/server'


export async function POST(req,{body}) {
    
    try{
        const data = await req.formData()        
    let temp = {}
    console.log(data.values())
   for(const elem of data.entries()){
        let name = elem[0]
        let value = elem[1]
        temp = {...temp,[name]:value}
        console.log(elem)
   }
    await connectDB()
    let person = new user(temp)
    await person.save()
    }catch(err){
        console.log(err)
        return NextResponse.json({sucess:0})
    }
    
    return NextResponse.json({sucess:1});

}