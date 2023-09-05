import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    const res: { str: string, url: string } = { str: "Ответ", url: request.url }
    return NextResponse.json(res)
}