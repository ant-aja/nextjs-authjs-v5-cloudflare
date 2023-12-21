import type { NextRequest, NextResponse } from 'next';
 
type ResponseData = {
  message: string
}
 
export const runtime = "edge";
export async function GET(
  req: NextRequest,
  res: NextResponse<ResponseData>
) {
  // res.status(200).json({ message: 'Hello  from API route Next.js!' })
  return new Response('Hello, Next.js edge runtime!', {
    status: 200,
    headers: { 'Set-Cookie': `token=afsdfsdflkj` },
  })
}

