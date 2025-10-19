// Route handler: app/api/hello/route.js
import { auth } from '@clerk/nextjs/server';

export async function GET() {
  const { userId, sessionId } = auth();
  if (!userId) return new Response('Unauthorized', { status: 401 });
  return Response.json({ userId, sessionId });
}
