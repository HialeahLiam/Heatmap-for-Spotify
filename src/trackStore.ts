import { atom } from 'nanostores';
import { SpotifyTrack } from './types';

export const selectedTrack = atom(null as SpotifyTrack | null);
export const currentTrack = atom(null as SpotifyTrack | null);
