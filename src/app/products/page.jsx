'use client'

// pages/index.js
import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../auth/Layout';
import { useRouter } from 'next/navigation';

const FormContainer = styled.div`
  background-color: #4682b4; /* Changed the background color */
  color: black;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 50%; /* Decreased the width to 80% */
  margin-top: 10px; /* Optional: Add some top margin for spacing */
`;

const Index = () => {
  const [brandName, setBrandName] = useState('');
  const [fabricType, setFabricType] = useState('');
  const [age, setAge] = useState('');
  const [color, setColor] = useState('');
  const [stainDamage, setStainDamage] = useState('');
  const [usage, setUsage] = useState('');
  const [freq,setFreq] = useState('')
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your logic for processing the input data and providing recommendations
    console.log({ brandName, fabricType, age, color, stainDamage, usage });
    let formData = new FormData()
    formData.append('Brand_name',brandName)
    formData.append('Fabric_type',fabricType)
    formData.append('Age',age)
    formData.append('Color',color)
    formData.append('Stain',stainDamage)
    formData.append('Usage',usage)
    formData.append('Frequency',freq)

    await fetch("/api/products",{
        method:"POST",
        body:formData
    }).then(async (response)=>{
        const data = await response.json()
        const id = data.id
        if(data.sucess=="1"){
            console.log("Result was a success")
            router.push("/products/"+id);
        }else{
            console.log("something happend")
        }
    })
  };

  return (
    <Layout>
      <h2 style={{ color: 'black', textAlign: 'center' }}>Smart Washing Machine</h2>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <label>Brand Name:</label>
          <Select
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          >
            <option value="">Select Brand</option>
            <option value="h&m">H&M</option>
            <option value="puma">Puma</option>
            <option value="adidas">Adidas</option>
            {/* Add more options as needed */}
            <option value="other">Other</option>
          </Select>

          <label>Fabric Type:</label>
          <Select
            value={fabricType}
            onChange={(e) => setFabricType(e.target.value)}
          >
            <option value="">Select Fabric Type</option>
            <option value="cotton">Cotton</option>
            <option value="denim">Denim</option>
            <option value="polyester">Polyester</option>
            {/* Add more options as needed */}
          </Select>

          <label>Age of Cloth(In months):</label>
          <Select
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            <option value="">Select Age</option>
            <option value="new">New</option>
            <option value="30">1 Month</option>
            <option value="90">3 Month</option>
            <option value="180">6 Months</option>
            <option value="365">More than a Year</option>
            {/* Add more options as needed */}
          </Select>

          <label>Fabric Color:</label>
          <Select
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="">Select Fabric Color</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="blue">Blue</option>
            {/* Add more options as needed */}
          </Select>

          <label>Stain/Damage:</label>
          <Select
            value={stainDamage}
            onChange={(e) => setStainDamage(e.target.value)}
          >
            <option value="">Select Stain/Damage</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>

          <label>Usage:</label>
          <Select
            value={usage}
            onChange={(e) => setUsage(e.target.value)}
          >
            <option value="">Select Usage</option>
            <option value="casual">Casual</option>
            <option value="sports">Sports</option>
            <option value="formal">Formal</option>
            {/* Add more options as needed */}
          </Select>
          <label>Frequecy :</label>
          <Select
            value={freq}
            onChange={(e) => setFreq(e.target.value)}
          >
            <option value="">Select Usage</option>
            <option value="casual">Regular</option>
            <option value="sports">Ocasional</option>
            <option value="formal">Daily</option>
            {/* Add more options as needed */}
          </Select>

          <Button type="submit">Get Recommendations</Button>
        </form>
      </FormContainer>
    </Layout>
  );
};

export default Index;
