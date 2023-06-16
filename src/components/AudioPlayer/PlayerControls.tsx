import React, { useRef } from 'react';

export type PlayerControlsProps = {
  audioElem?: any,
  isPlaying: boolean,
  setIsPlaying: (isPlaying: boolean) => void,
  audioTrack?: any,
  setCurrentSong: () => void,
  //song?: any
  }

export const PlayerControls = (props: PlayerControlsProps) => {
  const clickRef = useRef<HTMLDivElement>(null);

  const PlayPause = () => {
    props.setIsPlaying(!props.isPlaying);
  };


  const checkWidth = (event: any)=>
  {
    let width = clickRef.current!.clientWidth;
    const offset = event.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    props.audioElem.current.currentTime = divprogress / 100 * props.audioTrack.length;

  }

  // const skipBack = ()=>
  // {
  //   const index = songs.findIndex(x=>x.title == currentSong.title);
  //   if (index == 0)
  //   {
  //     setCurrentSong(songs[songs.length - 1])
  //   }
  //   else
  //   {
  //     setCurrentSong(songs[index - 1])
  //   }
  //   audioElem.current.currentTime = 0;
    
  // }


  // const skiptoNext = ()=>
  // {
  //   const index = songs.findIndex(x=>x.title == currentSong.title);

  //   if (index == songs.length-1)
  //   {
  //     setCurrentSong(songs[0])
  //   }
  //   else
  //   {
  //     setCurrentSong(songs[index + 1])
  //   }
  //   audioElem.current.currentTime = 0;
    
  // }

  return (
    <div className='player_container'>
      
      <div className="navigation">
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div className="seek_bar" style={{width: `${props.audioTrack.progress+"%"}`}}></div>
        </div>
      </div>
      <div className="controls">
        <div className='btn_action pp' onClick={PlayPause}/>
        {/* {isplaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause}/> : <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause}/>} */}
      </div>
    </div>
  )
}
