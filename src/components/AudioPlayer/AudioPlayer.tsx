import { useRef, useState } from "react";
import style from './AudioPlayer.module.scss';
import { SvgDownload } from "../SvgIcon/SvgFiles/SvgPlayer/SvgDownload";
import { SvgCross } from "../SvgIcon/SvgFiles/SvgButtonsIcons/SvgCross";

export type AudioPlayerProps = {
  callsDuration: string,
  record?: string,
  partnershipId: string,
}

export const AudioPlayer = (props: AudioPlayerProps) => {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const [url, setUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState('');

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const [remaningTime, setRemaningTime] = useState({
    min: props.callsDuration.split(':')[0],
    sec: props.callsDuration.split(':')[1],
  });

  const onChange = (e: any) => {
    const audio = audioPlayerRef.current;
    audio!.currentTime = e.target.value;
    setCurrentTime(e.target.value)
  };

  const play = () => {
    if (!url.length) {
      getAudio();
    } else {
      const audio = audioPlayerRef.current;

      if (!isPlaying) {
        setIsPlaying(true);
        audio!.play();
      }

      if (isPlaying) {
        setIsPlaying(false);
        audio!.pause();
      }
    }
  }

  const onTimeUpdateHandler = (e: any) => {
    setCurrentTime(e.currentTarget.currentTime);
    const min = Math.floor((duration-currentTime) / 60).toString();
    const sec = Math.floor((duration-currentTime) % 60) < 10 ?
      `0${Math.floor((duration-currentTime) % 60)}` :
      Math.floor((duration-currentTime) % 60).toString();

    if (currentTime !== duration) {
      setRemaningTime({
        min,
        sec,
      });
    } else {
      setRemaningTime({
        min: props.callsDuration.split(':')[0],
        sec: props.callsDuration.split(':')[1],
      })
    }
  }

  const getAudio = () => {
    if (!props.record?.length) {
      setError('Record is missing!');
      return;
    }
    fetch(`https://api.skilla.ru/mango/getRecord?record=${props.record}`, {
      method: 'post',
      headers: {
        Authorization: 'Bearer testtoken',
        'Content-Type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
        'Content-Transfer-Encoding': 'binary',
        'Content-Disposition': `filename="record.mp3"`
      },
    }).then(res=>res.blob())
    .then(blob=>{
      const objUrl = URL.createObjectURL(blob);
      setUrl(objUrl);
      setIsSaved(true);
    }).catch(error=>console.error(error));
  };

  const deleteAudio = () => {
    setUrl('');
    setIsSaved(false);
  }

  const onLoadedDataHandler = (e: any) => {
    setDuration(e.currentTarget.duration);
  }

  return (
    <div className={style.audioplayer}>
      <div className={style.time}>
        {remaningTime.min}:{remaningTime.sec}
      </div>
      <button className={isPlaying? `${style.playbtn} ${style.pause}` : `${style.playbtn}`} onClick={play}></button>
      {!error.length ?
      <input
        className={style.input}
        onChange={onChange}
        type="range"
        min="0"
        max={duration}
        value={currentTime}
      />
      :
      <div className={style.errror}>{error}</div> }
      <div className={style.wrapper} onClick={getAudio} >
        <SvgDownload />
      </div>
      {isSaved && <div className={style.wrapper} onClick={deleteAudio} ><SvgCross /></div>}
      <audio
        ref={audioPlayerRef}
        src={url} 
        onTimeUpdate={onTimeUpdateHandler}
        onLoadedData={onLoadedDataHandler}
        onEnded={()=>setIsPlaying(false)}
        />
      
    </div>
  )
}
