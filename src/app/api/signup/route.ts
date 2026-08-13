import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const SIGNUPS_FILE = path.join(DATA_DIR, "signups.json");

interface Signup {
  email: string;
  plan: string;
  spend: string;
  tools: string[];
  createdAt: string;
}

async function readSignups(): Promise<Signup[]> {
  try {
    const raw = await fs.readFile(SIGNUPS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeSignups(signups: Signup[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(SIGNUPS_FILE, JSON.stringify(signups, null, 2));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, plan, spend, tools } = body;

    // Validate required fields
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 },
      );
    }

    if (!plan || !["starter", "pro", "max"].includes(plan)) {
      return NextResponse.json(
        { error: "Please select a plan." },
        { status: 400 },
      );
    }

    if (!spend || typeof spend !== "string") {
      return NextResponse.json(
        { error: "Please select your current spend range." },
        { status: 400 },
      );
    }

    const signup: Signup = {
      email: email.trim().toLowerCase(),
      plan,
      spend,
      tools: Array.isArray(tools) ? tools : [],
      createdAt: new Date().toISOString(),
    };

    // Read, append, write
    const signups = await readSignups();

    // Check for duplicate email
    if (signups.some((s) => s.email === signup.email)) {
      return NextResponse.json(
        { error: "This email is already on the list." },
        { status: 409 },
      );
    }

    signups.push(signup);
    await writeSignups(signups);

    return NextResponse.json(
      { message: "Signup successful", plan: signup.plan },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
