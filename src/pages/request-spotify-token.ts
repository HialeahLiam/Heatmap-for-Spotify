import { APIRoute } from 'astro';
import { requestSpotifyToken } from '~/utils/auth';

export const get: APIRoute = async ({ request }) => {
  console.log('CAALED');
  console.log(request.url);
  const url = new URL(request.url);
  const query = url.searchParams;
  const code = query.get('code');
  const redirectUri = query.get('redirectUri');

  console.log('query: ', query);

  if (!code || !redirectUri) return new Response(null, { status: 400 });

  const token = await requestSpotifyToken(code, redirectUri);
  console.log('token: ', token);
  if (!token) return new Response(null, { status: 500 });

  return new Response(JSON.stringify(token));
};
