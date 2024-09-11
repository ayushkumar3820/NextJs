import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Product from '../../../lib/model/products';

export async function GET() {
  try {
    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB successfully');

    console.log('Fetching products...');
    const products = await Product.find();
    console.log(`Found ${products.length} products`);

    return NextResponse.json({ success: true, result: products });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  } finally {
    if (mongoose.connection.readyState === 1) {
      console.log('Closing MongoDB connection');
      await mongoose.connection.close();
    }
  }
}

 


export async function POST(){
    await mongoose.connect(
        "mongodb+srv://ayushkumarnbd125:Iw7AYyJyQGaJVizg@cluster0.k916s.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"
      );
      let product=new Product({
        name:"aaa",
        price:"2000",
        "color":"Red",
        company:"nothing",
        category:"mobile"
      });
      const  result =await product.save();
      return NextResponse.json({result,success:true});
    }