import React, { useState } from 'react';
import { SpotifyTrack } from '~/types';
import TrackSearch from './TrackSearch';
import Track from './widgets/Track';
import { useStore } from '@nanostores/react';
import { currentTrack } from '~/trackStore';

function TrackDisplay() {
  const track = useStore(currentTrack);

  console.log({ track }, 'current track');

  // console.log({ track });

  return (
    <div>
      <div className="mb-5">
        {track ? (
          <Track
            name={track.name}
            image={track.album.images[0].url}
            artists={track.artists}
            album={track.album.name}
            trackUrl={track.external_urls?.spotify}
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

      <TrackSearch />
    </div>
  );
}

export default TrackDisplay;
