"use client"

import { useState,useEffect } from "react";


export default function Cluster(){
    const [data,setData] = useState([])
    const [params,setParams] = useState("")
    
    const formResult = async (e)=>{
        try {
            const res = await fetch(`/api/cluster?parm=${params}`);
            const result = await res.json();
            console.log(result); // Check the fetched data
            setData(result.result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }
    useEffect(() => {
        console.log(data); // Check the updated data after the state change
      }, [data]);
    
    return (<div>
        <div >
           
            <label>Filter :</label>
          <select
            value={params}
            onChange={(e) => setParams(e.target.value)}
          >
            <option value="">Select Usage</option>
            <option value="wc">Wash Cycle</option>
            <option value="spread">Stain</option>
            <option value="freq">Frequecy</option>
            {/* Add more options as needed */}
          </select>

          <button onClick={formResult}>Get Recommendations</button>
            
        </div>
        <div>
            {Object.entries(data).map((elem) =>
                <div>
                    <div>{elem[0]}</div>
                    {elem[1].map((e, innerIndex) => (
                        <div>
                            <div>Brand Name : {e.Brand_name}</div>
                            <div>Fabric_type : {e.Fabric_type}</div>
                            <div>Age : {e.Age}</div>
                            <div>Color : {e.Color}</div>
                            <div>Stain : {e.Stain}</div>
                            <div>Usage : {e.Usage}</div>
                            <div>Wash_Cycle : {e.Wash_Cycle}</div>
                        </div>
                    ))}
                
                </div>
            )}
        </div>
    </div>)
    
}