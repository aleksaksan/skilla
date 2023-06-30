import { useEffect, useRef, useState } from "react";
import style from './AudioPlayer.module.scss';
import audioFile from '../../assets/mp3/testSong.mp3';
import { SvgDownload } from "../SvgIcon/SvgFiles/SvgPlayer/SvgDownload";
import { SvgCross } from "../SvgIcon/SvgFiles/SvgButtonsIcons/SvgCross";
import axios from "axios";

export type AudioPlayerProps = {
  callsDuration: string,
  record?: string,
  partnershipId: string,
}

export const AudioPlayer = (props: AudioPlayerProps) => {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const [url, setUrl] = useState('')
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSaved, setIsSaved] = useState(true);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // const [timeDuration, setTimeDuration] = useState({
  //     min: 0,
  //     sec: 0,
  // });

  const [remaningTime, setRemaningTime] = useState({
    min: props.callsDuration.split(':')[0],
    sec: props.callsDuration.split(':')[1],
  });


  useEffect(() => {
    setUrl(audioFile);
  }, []);

  const onChange = (e: any) => {
    const audio = audioPlayerRef.current;
    audio!.currentTime =  e.target.value;
    setCurrentTime(e.target.value)
  }

  // useEffect(() => {
  //   const sec = Math.floor(duration % 60);
  //   const min = Math.floor(duration / 60);

  //   setTimeDuration({
  //     min: min,
  //     sec: sec
  //   });
  // }, [duration]);

  const play = () => {
    const audio = audioPlayerRef.current;

    if (!isPlaying) {
      setIsPlaying(true)
      audio!.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio!.pause()
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
    axios({
      method: 'post',
      baseURL: `https://api.skilla.ru/mango/getRecord`,
      params: {
        record: props.record,
        partnership_id: props.partnershipId,
      },
      headers: {
        Authorization: 'Bearer testtoken',
        'Content-Type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
        'Content-Transfer-Encoding': 'binary',
        'Content-Disposition': `filename="record.mp3"`
      },
    }).then(response=> console.log(response))
  }

  return (
    <div className={style.audioplayer}>
      <div className={style.time}>
        {remaningTime.min}:{remaningTime.sec}
      </div>
      <button className={isPlaying? `${style.playbtn} ${style.pause}` : `${style.playbtn}`} onClick={play}></button>
      <input
        className={style.input}
        onChange={onChange}
        type="range"
        min="0"
        max={duration}
        value={currentTime}
      />
      <div className={style.wrapper} onClick={getAudio} >
        <SvgDownload />
      </div>
      {isSaved && <SvgCross />}
      <audio
        ref={audioPlayerRef}
        src={url} 
        onTimeUpdate={onTimeUpdateHandler}
        onLoadedData={(e) => setDuration(e.currentTarget.duration)}
        onEnded={()=>setIsPlaying(false)}
        />
      
    </div>
  )
}
