import { NextResponse } from "next/server";
import productDetails from "./db.json";

export async function GET() {
  return NextResponse.json({
    productDetails,
  });
}

export async function PUT() {
  return NextResponse.json({
    productDetails,
  });
}
