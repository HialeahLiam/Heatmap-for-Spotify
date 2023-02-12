import React, { useState } from 'react';
import { SpotifyTrack } from '~/types';
import { assignSelectedTrack } from '~/utils/track';
import TrackSearch from './TrackSearch';
import Track from './widgets/Track';

function TrackDisplay() {
  const [track, setTrack] = useState<SpotifyTrack>();
  function handleTrackSelection(track: SpotifyTrack) {
    setTrack(track);
    assignSelectedTrack(track);
  }
  return (
    <>
      {track ? (
        <Track name={track.name} image={track.album.images[0].url}></Track>
      ) : (
        <>
          <h2 id="title" className="text-7xl mb-4">
            This is an app
          </h2>

          <p id="subtitle" className="text-2xl px-10 mb-10">
            This is everthing the app does. It does many things. So many things in fact it's actually insane.
          </p>
        </>
      )}

      <TrackSearch onTrackSelect={handleTrackSelection} />
    </>
  );
}

export default TrackDisplay;
