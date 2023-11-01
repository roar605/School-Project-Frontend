import dbConn from "@/utilis/dbConn";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const body = await req.json(); 
        await dbConn();
        await Contact.create(body);

        return new NextResponse.json(
            { message: "Message sent successfully" }, 
            { status: 200 } 
        );
    } catch (e) {
        return new NextResponse.json(
            { message: "Server error" }, 
            { status: 500 } 
        );
    }
}
