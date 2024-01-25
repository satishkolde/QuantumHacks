import connectDB from '@/app/lib/connectDB';
import mongoose from 'mongoose';
import Product from '@/app/Modal/Product';
import { NextResponse } from 'next/server';

export async function GET(req) {
  let params = req.nextUrl.searchParams.get('parm');
  let result = {}; // Initialize result array here

  await connectDB();

  switch (params) {
    case 'wc':
      const wc = ['Regular', 'Delicate', 'Quick', 'Heavy'];
      await Promise.all(
        wc.map(async (elem) => {
          let data = await Product.find({ Wash_Cycle: elem });
          result[elem] = data;
        })
      );
      break;
    case 'spread':
      const spread = ['Yes', 'No'];
      await Promise.all(
        spread.map(async (elem) => {
          let data = await Product.find({ Spread: elem });
          result[elem] = data;
        })
      );
      break;
    case 'freq':
      const freq = ['Regular', 'Ocasional', 'Daily'];
      await Promise.all(
        freq.map(async (elem) => {
          let data = await Product.find({ Freqency: elem });
          result[elem] = data;
        })
      );
      break;
    default:
      // Handle default case or provide a default value for result
      break;
  }

  console.log(result);
  return NextResponse.json({ result: result });
}