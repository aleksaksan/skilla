import React, { useState, useRef, useEffect } from 'react';
import { PlayerControls } from './PlayerControls';

export const AudioPlayer = () => {
  const [audioTrack, setAudioTrack] = useState(null); //get from api
  const [isPlaying, setIsPlaying] = useState(false);

  const audioElem = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isPlaying) {
      audioElem.current!.play();
    }
    else {
      audioElem.current!.pause();
    }
  }, [isPlaying]);

  const onPlaying = () => {
    const duration = audioElem.current!.duration;
    const ct = audioElem.current!.currentTime;

    // setAudioTrack({ ...currentSong, "progress": ct / duration * 100, "length": duration });
  };

  return (
    <div>
      <audio src={audioTrack.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElem={audioElem} audioTrack={audioTrack} setCurrentSong={audioTrack} />
    </div>
  )
}
