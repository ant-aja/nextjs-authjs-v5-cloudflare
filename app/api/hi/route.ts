
type ResponseData = {
  message: string
}
 
export const runtime = "edge";
export async function GET(
  req:   Request
) {

  return new Response('Hello, Next.js edge runtime!', {
    status: 200,
    headers: { 'Set-Cookie': `token=afsdfsdflkj` },
  })
}


