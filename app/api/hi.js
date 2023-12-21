export function onRequest(context) {
    return new Response("Hello Nextjs Edge API, world!")
  }


  export const runtime = "edge";