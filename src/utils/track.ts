import { SpotifyTrack } from '~/types';

const trackObservers: Function[] = [];
export let selectedTrack: SpotifyTrack | null;
export function assignSelectedTrack(track: SpotifyTrack) {
  selectedTrack = track;
  trackObservers.forEach((f) => {
    f();
  });
}

export function observeSelectedTrack(f: Function) {
  trackObservers.push(f);
}
