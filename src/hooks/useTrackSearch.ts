import { useState } from 'react';
import useSWR from 'swr';
import { SpotifyTrack } from '~/types';
import { getSpotifyAuthToken } from '~/utils/auth';

const spotifyWebApiBaseUrl = 'https://api.spotify.com/v1';

const fetcher = async (url: string) => {
  const token = await getSpotifyAuthToken();
  if (!token) throw new Error('No valid Spotify token available.');

  const headers = {};

  const { accessToken } = token;
  headers['Authorization'] = `Bearer ${accessToken}`;

  const response = await fetch(url, { headers });
  const data = await response.json();

  if (!response.ok) throw new Error(`Spotify search request failed: ${data?.error.message}`);
  return data.tracks;
};

function useTrackSearch(initialSearchText = '') {
  const [search, setSearch] = useState(initialSearchText);
  const { data, isLoading, error } = useSWR(`${spotifyWebApiBaseUrl}/search?q=${search}&type=track`, fetcher);

  return { setSearch, data, isLoading, error };
}

export default useTrackSearch;
