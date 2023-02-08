import { getSpotifyAuthToken } from './auth';

export const playTrack = async (trackUri: string, deviceId?: string) => {
  const query = new URLSearchParams();
  if (deviceId) {
    query.append('device_id', deviceId);
  }

  const body = {
    context_uri: trackUri,
  };

  const token = await getSpotifyAuthToken();

  if (token) {
    const { accessToken } = token;
    await fetch(`https://api.spotify.com/v1/me/player/play?${query.toString()}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });
  }
};
