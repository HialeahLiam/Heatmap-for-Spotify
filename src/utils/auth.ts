import { SpotifyToken } from '~/types';

const SPOTIFY_TOKEN_KEY = 'SPOTIFY_AUTH_TOKEN';

const authorizeParams = {
  client_id: import.meta.env.PUBLIC_SPOTIFY_CLIENT_ID,
  response_type: 'code',
  scope: import.meta.env.PUBLIC_SPOTIFY_SCOPES,
  redirect_uri: `${import.meta.env.PUBLIC_DEV_URL}/spotifyAuthCallback`,
};

const searchParams = new URLSearchParams(authorizeParams);

export const spotifyAuthUrl = `https://accounts.spotify.com/authorize?${searchParams.toString()}`;

export const getSpotifyAuthToken = async (): Promise<SpotifyToken | null> => {
  const tokenString = window.localStorage.getItem(SPOTIFY_TOKEN_KEY);

  if (!tokenString) return null;

  const token = JSON.parse(tokenString) as SpotifyToken;
  if (!token.refreshToken || !token.expirationDate) {
    console.log('Missing refresh token or expiration date!');
    return null;
  }

  if (token.expirationDate <= Date.now()) {
    // handle token expiration

    const searchParams = new URLSearchParams({ refreshToken: token.refreshToken });
    const response = await fetch(`${import.meta.env.PUBLIC_DEV_URL}/refresh-spotify-token?${searchParams.toString()}`);

    if (response.ok) {
      const newToken = await response.json();
      window.localStorage.setItem(SPOTIFY_TOKEN_KEY, JSON.stringify(newToken));
      return newToken;
    } else {
      console.log('Failed to refresh Spotify token!');
    }
  }
  return token;
};

// export const refreshSpotifyToken = async (refreshToken: string): Promise<SpotifyToken | null> => {
//   const body = {
//     grant_type: 'refresh_token',
//     refresh_token: refreshToken,
//   };

//   const Authorization = `Basic ${btoa(
//     `${import.meta.env.PUBLIC_SPOTIFY_CLIENT_ID}:${import.meta.env.SPOTIFY_CLIENT_SECRET}`
//   )}`;

//   console.log(`${btoa(`${import.meta.env.PUBLIC_SPOTIFY_CLIENT_ID}:${import.meta.env.SPOTIFY_CLIENT_SECRET}`)}`);
//   const response = await fetch('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     headers: {
//       Authorization,
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: new URLSearchParams(body),
//   });

//   if (!response.ok) {
//     console.log('Spotify error: ', await response.json());
//     return null;
//   }

//   const spotifyToken = await response.json();

//   console.log('Spotify token requested succesfully! - ', spotifyToken);

//   const { access_token: accessToken, expires_in: expiresIn } = spotifyToken;

//   return { accessToken, refreshToken, expirationDate: Date.now() + expiresIn * 1000 };
// };

export const requestSpotifyToken = async (authCode: string, redirectUri: string): Promise<SpotifyToken | null> => {
  const body = {
    grant_type: 'authorization_code',
    code: authCode,
    redirect_uri: redirectUri,
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
    return null;
  }

  const spotifyToken = await response.json();

  console.log('Spotify token requested succesfully! - ', spotifyToken);

  const { access_token: accessToken, expires_in: expiresIn, refresh_token: refreshToken } = spotifyToken;

  return { accessToken, refreshToken, expirationDate: Date.now() + expiresIn * 1000 };
};

export const eraseSpotifyTokenFromBrowser = () => {
  window.localStorage.removeItem(SPOTIFY_TOKEN_KEY);
};

export const storeSpotifyTokenInBrowser = (token: SpotifyToken) => {
  window.localStorage.setItem(SPOTIFY_TOKEN_KEY, JSON.stringify(token));
};
