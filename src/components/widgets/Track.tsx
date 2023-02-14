import React from 'react';
import { SpotifyArtist } from '~/types';

type Props = {
  image: string;
  name: string;
  artists: SpotifyArtist[];
  album: string;
};

function Track({ image, name, artists, album }: Props) {
  const artistNames = artists.map((a) => a.name);
  return (
    <div className="flex justify-center">
      <div className="flex gap-6 justify-center p-6 dark:bg-gradient-to-r bg-gradient-to-l rounded from-indigo-500">
        <img className="md:h-36 md:w-36 h-20 w-20" src={image} alt="" />
        <div className="flex flex-col items-start text-white">
          <h3 className="md:text-3xl mb-auto">{name}</h3>
          <p className="text-xs">
            <span className="mr-2 dark:text-gray-400 text-gray-600">by</span>
            {artistNames.join('-')}
          </p>
          <p className="text-xs">
            <span className="mr-2 dark:text-gray-400 text-gray-600">on</span>
            {album}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Track;
