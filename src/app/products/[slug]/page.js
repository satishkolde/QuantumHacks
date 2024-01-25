"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useEffect } from 'react';
 
export default function Page({params: {slug}}) {
  const router = useRouter()
  const id = slug
  let [data,setData] = useState([])
  useEffect(()=>{
    let func = async ()=>{
      let data = await fetch("/api/products?id="+id).then(async (response)=>{
        let res = await response.json()
        return res;
      })
     
      setData(data)
    }
    func()
  },[id])
  
  return (
    <div>
       <div>Brand Name : {data.Brand_name}</div>
       <div>Fabric_type : {data.Fabric_type}</div>
       <div>Age : {data.Age}</div>
       <div>Color : {data.Color}</div>
       <div>Stain : {data.Stain}</div>
       <div>Usage : {data.Usage}</div>
       <div>Wash_Cycle : {data.Wash_Cycle}</div>
    </div>
  )
}