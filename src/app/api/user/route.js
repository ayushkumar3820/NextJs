import { NextResponse } from "next/server";
import { user } from "@/util/db";
export  function GET(){
    const data =  user;
    return  NextResponse.json(data,{status:200 })

}

export async function POST(request){
     const payload= await request.json();
     console.log(payload.name);
     if(!payload.name || payload.email || !payload.age)
     {
        return NextResponse.json({result:"Invalid data",success:false},{status:400})
     }
     return  NextResponse.json({result:"valid data",success:true},{status:200})
    }


   