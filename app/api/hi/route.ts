import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export const runtime = "edge";
export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // res.status(200).json({ message: 'Hello  from API route Next.js!' })
  return new Response('Hello, Next.js edge runtime!', {
    status: 200,
    headers: { 'Set-Cookie': `token=afsdfsdflkj` },
  })
}

