import { APIRoute } from 'astro';

export const get: APIRoute = async ({ request }) => {
  const query = new URL(request.url).searchParams;
  const refreshToken = query.get('refreshToken');
  if (!refreshToken) return new Response(null, { status: 400 });
  const body = {
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  };

  const Authorization = `Basic ${btoa(
    `${import.meta.env.PUBLIC_SPOTIFY_CLIENT_ID}:${import.meta.env.SPOTIFY_CLIENT_SECRET}`
  )}`;

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(body),
  });

  if (!response.ok) {
    console.log('Spotify error: ', await response.json());
    return new Response(null, { status: 400 });
  }

  const spotifyToken = await response.json();

  console.log('Spotify token refreshed succesfully! - ', spotifyToken);

  const { access_token: accessToken, expires_in: expiresIn } = spotifyToken;

  return new Response(JSON.stringify({ accessToken, refreshToken, expirationDate: Date.now() + expiresIn * 1000 }));
};
