import MessageModel from "@/model/message";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  const {name, email, message} = body;
  if(!name) {
    return NextResponse.json("Name is required", {status: 400});
  }
  if(!email) {
    return NextResponse.json("Email is required", {status: 400});
  }
  if(!message) {
    return NextResponse.json("Message is required", {status: 400});
  }

  try {
    await dbConnect();
    const insertedMessage = await MessageModel.insertMany({
      name,
      email,
      message
    })
    return NextResponse.json(insertedMessage, {status: 200});
  } catch(e) {
    console.log("[POST_SEND_MESSAGE]", e);
    return NextResponse.json("Internal Server Error", {status: 500});
  }
}