import { useEffect, useRef, useState } from "react"; 
import useSound from "use-sound";
import './AudioPlayer.scss';
import audioFile from './testSong.mp3';

export const AudioPlayer = () => {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const [url, setUrl] = useState('')
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeDuration, setTimeDuration] = useState({
      min: 0,
      sec: 0,
    });
  const [currTime, setCurrTime] = useState({
    min: 0,
    sec: 0,
  }); // текущее положение звука в минутах и секундах

  const [seconds, setSeconds] = useState(); // текущая позиция звука в секундах
  const [play, { pause, duration, sound }] = useSound(url);

  useEffect(() => {
    setUrl(audioFile);
  }, [])

  useEffect(() => {
    const sec = duration! / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    setTimeDuration({
      min: min,
      sec: secRemain
    });
  }, [duration]);

  useEffect(() => {
  
  const interval = setInterval(() => {
    if (sound) {
      setSeconds(sound.seek([])); // устанавливаем состояние с текущим значением в секундах
      const min = Math.floor(sound.seek([]) / 60);
      const sec = Math.floor(sound.seek([]) % 60);
      setCurrTime({
        min,
        sec,
      });
    }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    // const AUDIO = new Audio(audioFile);
    // console.log(audioFile)
    // if (AUDIO) {
    //   const playPromis = AUDIO.play();

    //   if (playPromis != null) {
    //     playPromis
    //       .then(() => AUDIO.play());
    //   };

    //   playPromis.then(() => AUDIO.pause());
    // }

    if (isPlaying) {
      audioPlayerRef.current?.pause(); // приостанавливаем воспроизведение звука
      setIsPlaying(false);
    } else {
      audioPlayerRef.current?.play(); // воспроизводим аудиозапись
      setIsPlaying(true);
      console.log(url)
    }
  };

  return (
    <div>
      <div className="time">
        <p>
          {currTime.min}:{currTime.sec}
        </p>
        <p>
          {timeDuration.min}:{timeDuration.sec}
        </p>
      </div>
      {/* <input
        type="range"
        min="0"
        max={duration! / 1000}
        value={seconds}
        className="timeline"
        onChange={(e) => {
          sound.seek([e.target.value]);
        }}
      /> */}
      <audio src={url} ref={audioPlayerRef} />
      <button className="playButton" onClick={playingButton}>
        play
      </button>
    </div>
  )
}
