import { headers } from "next/headers";
import { WebhookReceiver } from "livekit-server-sdk";
import { db } from "@/lib/db";

const receiver = new WebhookReceiver(
    process.env.LIVEKIT_API_KEY!,
    process.env.LIVEKIT_API_SECRET!
)

export async function POST(req: Request) {
    const body = await req.text();
    const headerPayload = headers();
    const authorization = headerPayload.get("Authorization");

    if(!authorization) {
        return new Response("No authorization header", { status: 400 })
    }

    const evt = await receiver.receive(body, authorization)

    if(evt.event === 'ingress_started') {
        await db.stream.update({
            where: {
                ingressId: evt.ingressInfo?.ingressId,
            },
            data: {
                isLive: true
            }
        })
    }

    if(evt.event === 'ingress_ended') {
        await db.stream.update({
            where: {
                ingressId: evt.ingressInfo?.ingressId,
            },
            data: {
                isLive: false
            }
        })
    }
}