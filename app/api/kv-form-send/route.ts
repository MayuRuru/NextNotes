import kv, { VercelKV } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return new Response("Please provide all fields.", { status: 400 });
  }

  const uuid = crypto.randomUUID();
  const timestamp = Date.now();

  try {
    await kv.set(`contact-${uuid}`, { name, email, message, timestamp });

    return new Response("Contact saved!", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal error!", { status: 500 });
  }
}

/* export async function GET() {
  try {
    const keys = await kv.keys("contact-");
    const messages = await kv.mget(...keys);

    return NextResponse.json(messages);
  } catch (error) {
    console.error(error);
    return new Response("Internal error!", { status: 500 });
  }
}
 */
