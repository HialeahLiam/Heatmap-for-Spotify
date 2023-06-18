import React from 'react';
import { SpotifyArtist } from '~/types';

type Props = {
  image: string;
  name: string;
  artists: SpotifyArtist[];
  album: string;
  trackUrl?: string;
};

function Track({ image, name, artists, album, trackUrl }: Props) {
  const artistNames = artists.map((a) => a.name);
  return (
    <div className="flex justify-center dark:bg-gradient-to-r bg-gradient-to-l rounded  ">
      <div className="flex gap-12 px-6 justify-between py-6 rounded-lg bg-indigo-900">
        <img className="md:h-36 md:w-36 h-20 w-20" src={image} alt="" />
        <div className="flex flex-col items-start dark:text-green-200 text-cyan-800 text-left">
          <a href={trackUrl} target="_blank">
            <h3 className="md:text-3xl mb-4">{name}</h3>
          </a>
          <p className="text-xs">
            <span className="mr-2 dark:text-gray-400 text-gray-600">by</span>
            {artistNames.join('-')}
          </p>
          <p className="text-xs">
            <span className="mr-2 dark:text-gray-400 text-gray-600">on</span>
            {album}
          </p>

          <div className="w-16 mt-auto ml-auto">
            <img src="Spotify_Logo_RGB_Green.png" alt="spotify logo" className="max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;
