import connectDB from '@/app/lib/connectDB'
import Product from '@/app/Modal/Product'
import mongoose from 'mongoose'
import { NextResponse } from 'next/server'

export async function POST(req){
    let id = null
    try{
        const data = await req.formData();
        let temp = {}
        for (const ele of data.entries()){
            let name = ele[0]
            let value = ele[1]
            temp = {...temp,[name]:value}
        }
        fetch("/predict",{
            method:"POST",
            body:JSON.stringify(data),headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=>{
            console.log(res)
        })
        temp["Wash_Cycle"] = "Delicate"
        let age = temp.Age
        let ageInDays = Number(age)
        temp.Age = ageInDays
        await connectDB()
        const sample = new Product(temp)
        console.log(sample)
        await sample.save()
        id = sample._id
    }catch(err){
        return NextResponse.json({sucess:0})
    }
    return NextResponse.json({sucess:1,id:id})
}

export async function GET(req){
    let id = req.nextUrl.searchParams.get('id')
    console.log()
    let result = null
    try{
        connectDB()
        console.log(id)
        result = await Product.findById(id).then((res)=>{
            return res._doc
        });
        console.log(result)
        return NextResponse.json({...result,sucess:1})
    }catch(err){
        return NextResponse.json({success:0})
    }
}