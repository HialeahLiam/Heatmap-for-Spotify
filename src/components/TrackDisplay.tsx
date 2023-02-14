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
    <div>
      <div className="mb-5">
        {track ? (
          <Track
            name={track.name}
            image={track.album.images[0].url}
            artists={track.artists}
            album={track.album.name}
          ></Track>
        ) : (
          <>
            <h2 id="title" className="md:text-7xl text-4xl mb-4 ">
              Search a track
            </h2>

            <p id="subtitle" className="md:text-2xl text-xl px-10 mb">
              Visualize Spotify's analysis of the track's pitches.
            </p>
          </>
        )}
      </div>

      <TrackSearch onTrackSelect={handleTrackSelection} />
    </div>
  );
}

export default TrackDisplay;
