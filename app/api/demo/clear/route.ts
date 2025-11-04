import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

// POST /api/demo/clear
export async function POST(request: Request) {
    revalidateTag('demo', 'max')
    return NextResponse.json({ revalidated: true, now: Date.now() })
}
