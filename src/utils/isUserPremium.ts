import { SpotifyToken } from '~/types';

export const isUserPremium = async (token: SpotifyToken) => {
  try {
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });

    if (!response.ok) return false;
    const { product } = await response.json();

    return product === 'premium';
  } catch (error) {
    console.log({ error });
    return false;
  }
};
