import {openai} from "@/app/openai";
import {bots} from "@/app/bots";

export const runtime = "nodejs";

// Send a new message to a thread
export async function POST(request, {params: {threadId}}) {
    const {content, assistantId} = await request.json();

    const assistant = bots.find((bot) => bot.localId === assistantId);
    if (!assistant) {
        return new Response(`Assistant not found ${assistantId}`, {status: 404});
    }

    await openai.beta.threads.messages.create(threadId, {
        role: "user",
        content: content,
    });

    const stream = openai.beta.threads.runs.stream(threadId, {
        assistant_id: assistant.assistantId,
    });

    return new Response(stream.toReadableStream());
}
