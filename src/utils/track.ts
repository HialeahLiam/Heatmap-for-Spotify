import { TrackSearchItem } from '~/types';

const trackObservers: Function[] = [];
export let selectedTrackId: string | null;
export function assignSelectedTrack(trackId: string) {
  selectedTrackId = trackId;

  trackObservers.forEach((f) => {
    f();
  });
}

export function observeSelectedTrack(f: Function) {
  trackObservers.push(f);
}
