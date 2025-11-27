import { NextResponse } from "next/server";
import { createPost } from "@/lib/posts";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const post = createPost(body);
    return NextResponse.json(post, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }
}
