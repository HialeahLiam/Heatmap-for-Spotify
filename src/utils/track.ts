import { TrackSearchItem } from '~/types';

const trackObservers: Function[] = [];
export let selectedTrackName: string | null;
export function assignSelectedTrack(trackName: string) {
  selectedTrackName = trackName;

  trackObservers.forEach((f) => {
    f();
  });
}

export function observeSelectedTrack(f: Function) {
  trackObservers.push(f);
}
