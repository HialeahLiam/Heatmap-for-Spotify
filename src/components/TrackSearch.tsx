import { useEffect, useRef, useState } from 'react';
import useTrackSearch from '~/hooks/useTrackSearch';
import { selectedTrack } from '~/trackStore';
import { SpotifyAlbum, SpotifyArtist, SpotifyTrack } from '~/types';

const TrackSearch = () => {
  const [track, setTrack] = useState('');
  const { setSearch, isLoading, error, data } = useTrackSearch();
  const [results, setResults] = useState<SpotifyTrack[]>([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [resultsVisible, setResultsVisible] = useState(false);

  useEffect(() => {
    setSearch(track);
  }, [track]);

  useEffect(() => {
    if (data) {
      const tracks: SpotifyTrack[] = data.items;
      setResults(tracks);
    }
  }, [data]);

  useEffect(() => {
    if (results.length > 0 && isInputFocused) setResultsVisible(true);
    else setResultsVisible(false);
  }, [isInputFocused, results]);

  function handleTrackSearch(input: string) {
    setTrack(input);
  }

  function handleInputFocus() {
    setIsInputFocused(true);
  }

  function handleInputUnfocus() {
    setIsInputFocused(false);
  }

  function handleTrackSelection(track: SpotifyTrack) {
    selectedTrack.set(track);
    setTrack(track.name);
  }

  const resultElements = results.map((item: SpotifyTrack) => {
    return (
      <div
        key={item.id}
        className="flex bg-white py-3 px-6 gap-3 cursor-pointer hover:shadow-[inset_0px_0px_50px_0px] hover:shadow-green-200"
        onClick={() => handleTrackSelection(item)}
      >
        <img
          className=" h-24 w-24"
          src={item.album.images[0]?.url}
          alt={`Album cover for ${item.album?.name} by ${item.artists[0]?.name}`}
        />
        <div className=" text-left text-black">
          <h3 className=" text-2xl">{item?.name}</h3>
          <span className=" text-xs text-gray-500">{item.album?.name}</span>
          <div>
            {item.artists.map((a) => (
              <span>{a.name}</span>
            ))}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col relative items-center justify-center">
      <input
        className=" bg-gray-800 text-white dark:text-black dark:bg-white py-1 px-2 rounded focus:outline-none  focus:shadow-[inset_0px_0px_5px_2px] dark:focus:shadow-green-400 focus:shadow-gray-200 mb-4"
        type="text"
        value={track}
        placeholder="Search a track"
        onInput={(e) => handleTrackSearch((e.target as HTMLInputElement).value)}
        onFocus={handleInputFocus}
        onBlur={handleInputUnfocus}
      />
      <div
        className={` ${
          resultsVisible ? ' max-h-80' : 'max-h-0'
        } absolute z-20 top-10 overflow-scroll rounded w-5/6 divide-y transition-[max-height] duration-300`}
      >
        {resultElements}
      </div>
    </div>
  );
};

export default TrackSearch;
