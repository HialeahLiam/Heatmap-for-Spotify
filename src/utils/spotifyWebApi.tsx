import { getSpotifyAuthToken } from './auth';

export const playTrack = async (albumUri, trackUri: string, deviceId?: string) => {
  console.log('TRYING TO PLAY!');
  const query = new URLSearchParams();
  if (deviceId) {
    query.append('device_id', deviceId);
  }

  const body = {
    context_uri: albumUri,
    offset: {
      uri: trackUri,
    },
  };

  const token = await getSpotifyAuthToken();

  if (token) {
    const { accessToken } = token;
    await fetch(`https://api.spotify.com/v1/me/player/play?${query.toString()}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });
  }
};

export const getTrackSegments = async (trackId) => {
  const token = await getSpotifyAuthToken();

  if (token) {
    const { accessToken } = token;
    const response = await fetch(`https://api.spotify.com/v1/audio-analysis/${trackId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      console.log('Failed to get track analysis!');
      return null;
    }

    const analysis = await response.json();
    if (analysis.segments) console.log('segments retrieved!');
    return analysis.segments;
  }
};
