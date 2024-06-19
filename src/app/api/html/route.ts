import { NextResponse } from "next/server"
import  db  from "@/lib/db"




export async function POST(request) {
	const { nama, waktu, pesan } = await request.json()
	const data = { nama, waktu, pesan }
	console.log(data)
	const createcomment = await db.QuestionsHtml.create({ data })
	
	if(!createcomment) return NextResponse.json({ status: 500, isCreated: false})
		else return NextResponse.json({ status: 200, isCreated: true })

}