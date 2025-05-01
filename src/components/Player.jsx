import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleSong } from "../store/CurrentSong";
import { Pause, Play, PlayIcon } from "lucide-react";

function Player() {
  const { details, status } = useSelector((state) => state.currentsong);
  const playerRef = useRef();
  const [isPlay, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const dispatch = useDispatch();
  const handleplayer = () => {
    setPlay(!isPlay);
    if (isPlay) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
  };

  useEffect(() => {
    const audio = playerRef.current;
    if (!audio) return;

    const onLoadedMetadata = () => {
      setDuration(details.duration);
    };

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [details]);

  const handleSliderChange = (e) => {
    const value = e.target.value;
    playerRef.current.currentTime = value;
    setCurrentTime(value);
  };

  return (
    <div className="w-full items-center fixed bottom-0 h-auto flex py-5 px-5 bg-neutral-950">
      {status && (
        <div className="p-2 flex gap-3 max-w-[30%] overflow-hidden rounded-sm items-center bg-neutral-800">
          <img src={details.image[2].url} className="w-15 rounded-sm" alt="" />
          <div>
            <p className="text-neutral-300 text-nowrap overflow-hidden">
              {details.name}
            </p>
            <span className="text-sm text-neutral-500">
              {details.artists.all[0].name}
            </span>
          </div>
          <audio
            src={details.downloadUrl[4].url}
            controls
            ref={playerRef}
            autoPlay
            className="hidden"
          ></audio>
        </div>
      )}
      {status && (
        <div className="flex justify-center items-center gap-2 flex-col">
          <button
            onClick={handleplayer}
            className="w-fit h-fit p-1 rounded-full scale-90 bg-white"
          >
            {isPlay ? <Play /> : <Pause />}
          </button>
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            step="0.1"
            onChange={handleSliderChange}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
}

export default Player;
