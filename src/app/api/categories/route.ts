import { NextResponse } from "next/server"
import { getCategories } from "./categories-data"

export async function GET(){
    const categories = await getCategories()
    return NextResponse.json(categories)
}