import { chatSession } from "@/configs/AiModel";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const { prompt } = await req.json();
        console.log('Prompt received:', prompt);

        const result = await chatSession.sendMessage(prompt);

        if (!result || !result.response) {
            throw new Error("No response from chatSession");
        }

        console.log('Response:', result.response.text());
        return NextResponse.json({ result: JSON.parse(result.response.text()) });
    } catch (e) {
        console.error("Error in API route:", e);
        return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
    }
}
