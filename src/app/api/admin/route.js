import Blogs from "../../(models)/models";
import { NextResponse } from "next/server";
export async function POST(req){
    console.log("post request recieved")
    try{
        const body=await req.json();
        console.log(body);
        
        await Blogs.create(body);
        return NextResponse.json( {status:201,message:"Blog created successfully"});
        }
        catch(err){
            console.log(err);
            return NextResponse.json({status:500,message:"Internal server error"});
            }
            }
            


export async function GET(){
    console.log("get request recieved")
    try{
        const blogs=await Blogs.find();
        return NextResponse.json({blogs},{status:200})
        }
        catch(err){
            console.log(err);
            return NextResponse.json({status:500,message:"Internal server error"});
            }
}