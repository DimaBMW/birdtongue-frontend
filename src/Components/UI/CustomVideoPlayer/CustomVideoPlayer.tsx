// импорт библиотек
import React, { useRef, useEffect, useState } from "react";
// импорт стилей
import styles from "./CustomVideoPlayer.module.scss";
// icons
import play from "../../../assets/Icon/Video_Player/play.svg";
import pause from "../../../assets/Icon/Video_Player/pause.svg";
import volume from "../../../assets/Icon/Video_Player/volume.svg";
import mute from "../../../assets/Icon/Video_Player/mute.svg";
import fullscreen from "../../../assets/Icon/Video_Player/fullscreen.svg";
import back from "../../../assets/Icon/Video_Player/skip-forward.svg";
import forward from "../../../assets/Icon/Video_Player/skip-forward2.svg";
import offsubtitleS from "../../../assets/Icon/Video_Player/subtitlesOFF.svg";
// компоненты
import Image from "../Image/Image";
import sub from "../../../assets/Subtitles/BMW.vtt";

// интерфейс видео плеера
interface InVideoPlayer {
  source: string; // источник видео
  src: string; // путь к файлу .vtt
}
// переменные
let size = 0;
// компонента видео плеера
const CustomVideoPlayer: React.FC<InVideoPlayer> = ({ source,src }) => {
  const videoRef = useRef<HTMLVideoElement>(null!); // ссылка на видео
  const trackRef = useRef<HTMLTrackElement>(null); // ссылка на субтитры
  const [currentTime, setCurrentTime] = useState<number>(0); // текущее время
  const [duration, setDuration] = useState(0); // длительность
  const [activeplay, setActivePlay] = useState(false); // управление кнопкой плей и пауза
  const [activeVolume, setActiveVolume] = useState(true); // управление кнопкой громкостью
  const [inputValue, setInputValue] = useState(0.5); //состояние уровня громкости// управление субтитрами
  const [currentCue, setCurrentCue] = useState<string>('');//текущие субтитры
  const [nextCue, setNextCue] = useState<string>('');//следующие субтитры
  const [offsubtitles,setOffSubtitles]=useState(true);//выключение субтитров
  const [isScrubbing, setIsScrubbing] = useState(false);//перемотка видео
  //==============================================================
  //                ВОСПРОИЗВЕДЕНИЕ ПЛЕЕРА И ПАУЗА
  //==============================================================
  // функция воспроизведения
  const playVideo = () => {
    if (videoRef.current) {
      setActivePlay(!activeplay);
      if (activeplay == false) {
        videoRef.current.play();
      } else {
        videoRef.current.pause(); // функция остановки видео
      }
    }
  };
  // функция воспроизведения с помощью пробела
  const handleSpaceKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === " ") {
      event.preventDefault();
      if (videoRef.current) {
        setActivePlay(!activeplay);
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }
  };
  //==============================================================
  //                          ГРОМКОСТЬ
  //==============================================================
  // функция регулировки громкости
  const volumeVideo = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      videoRef.current.volume = +event.target.value;
      setInputValue(+event.target.value);
      if (activeVolume == false) {
        setActiveVolume(!activeVolume);
      }
    }
  };
  //функция мута и анмута
  const muteVolume = () => {
    if (videoRef.current) {
      setActiveVolume(!activeVolume);
      if (activeVolume == false) {
        videoRef.current.volume = size;
        setInputValue(size);
      } else {
        if (inputValue > 0) {
          size = inputValue;
        }
        videoRef.current.volume = 0;
        setInputValue(0);
      }
    }
  };
  //==============================================================
  //                       BACK AND FORWARD
  //==============================================================
  // функция назад
  const backVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 15;
    }
  }
  // функция вперёд
  const forwardVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 15;
    }
  }
  //==============================================================
  //                         FULL SCRIN
  //==============================================================
  const requestFullScreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };
  //==============================================================
  //                         SUBTITLE
  //==============================================================
  // выключение субтитров
  const activeSubtitles=()=>{
    if(videoRef.current){
      setOffSubtitles(!offsubtitles);
    }
  }
  //===============================================================
  //                         СОСТОЯНИЯ ВИДЕО
  //===============================================================
  // стостояния видео
  useEffect(() => {
    const video = videoRef.current;
      //==============================================================
      //                         SUBTITLE
      //==============================================================
    const onCueChange=()=>{
      if(video){
        // текущие субтитры
        const activeCues = video.textTracks[0].activeCues as TextTrackCueList;
        if(activeCues && activeCues.length > 0){
          setCurrentCue((activeCues[0] as VTTCue).text);
          // следующие субтитры
          const cues = Array.from(video.textTracks[0].cues as TextTrackCueList);
          const upcoming = cues.filter((cue)=>cue.startTime>video.currentTime);
          setNextCue((upcoming[0] as VTTCue).text);
        }else{
          setCurrentCue('');
          setNextCue('');
        }
      }
    }
    if(video){
      video.textTracks[0].mode='hidden';
      video.textTracks[0].oncuechange=onCueChange;
    }
      //==============================================================
      //                         Time
      //==============================================================
    const timeUpdateHandler = () => {
      setCurrentTime(video.currentTime);
    };
    const loadedMetadataHandler = () => {
      setDuration(video.duration);
    };
    video.addEventListener("timeupdate", timeUpdateHandler);
    video.addEventListener("loadedmetadata", loadedMetadataHandler);

    return () => {
      video.removeEventListener("timeupdate", timeUpdateHandler);
      video.removeEventListener("loadedmetadata", loadedMetadataHandler);
      if(video){
        video.textTracks[0].oncuechange=null;
      }
    };
  }, [currentTime]); //
  //===============================================================
  //                ПЕРЕВОД ВРЕМЕНИ В МИНУТЫ И ЧАСЫ
  //===============================================================
  // форматирование времени
  const formatTime = (time: number, maxLength: number) => {
    const minutes: number = Math.floor(time / 60);
    const seconds: number = time % 60;
    let timeString = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (timeString.length > maxLength) {
      timeString = timeString.slice(0, maxLength);
    }

    return timeString;
  };
  //===============================================================
  //                       ПЕРЕМОТКА ВИДЕО
  //===============================================================
  // функция перемотки
  const scrubVideo = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isScrubbing) {
      const bar = e.currentTarget;
      const posX = e.clientX - bar.getBoundingClientRect().left;
      const percentage = (posX / bar.offsetWidth) * 100;
      const newTime = (duration / 100) * percentage;
      videoRef.current!.currentTime = newTime;
    }   
  }
  //===============================================================
  //                         MAIN RETURN
  //===============================================================
  return (
    <div className={styles.customVideoPlayer} onKeyDown={handleSpaceKeyDown}>
      {/* видео */}
      <video
        className={styles.customVideoPlayer_VideoPlayer}
        ref={videoRef}
        src={source}
        onClick={playVideo}
      >
        <track ref={trackRef} label="English" kind="subtitles" lang="en" src={sub} default/>
      </video>
      {/* вывод субтитр по слову тест */}
      <div className={`${styles.customVideoPlayer_SubtitlesBox} ${!offsubtitles?styles.offsubtitles:''}`}>
        <pre className={styles.subtitles_current}>{currentCue}</pre> {/* текущие субтитры */} 
        <pre className={styles.subtitles_next}>{nextCue}</pre>    {/* послудующие субтитры */}
      </div>
      {/* контроллеры */}
      <div className={styles.customVideoPlayer_Controls}>
        {/* кнопка воспроизведения */}
        <div className={styles.customVideoPlayer_PlayPause}>
          <button
            className={styles.customVideoPlayer_Controls__Play}
            onClick={playVideo}
          >
            <Image
              src={!activeplay ? play : pause}
              alt="play/pause"
              className="play-pause__videoplayer"
            />
          </button>
        </div>
        {/* кнопка регулировки громкости */}
        <div className={styles.customVideoPlayer_Volume}>
          <button
            className={styles.customVideoPlayer_Volume_btn}
            onClick={muteVolume}
          >
            <Image
              src={!activeVolume ? mute : volume}
              alt="play/pause"
              className="volume__videoplayer"
            />
          </button>
          <input
            className={styles.customVideoPlayer_Volume_btn__input}
            value={inputValue}
            type="range"
            min="0"
            max="1"
            step="0.01"
            onChange={volumeVideo}
          />
        </div>
        {/* кнопки перемотки назад и вперед (на 15 секунд) */}
        <div className={styles.customVideoPlayer_Forwards}>
          <button
            className={styles.customVideoPlayer_FullScrenn__btn}
            onClick={backVideo}
            >
            <Image
              src={back}
              alt="назад"
              className="back__videoplayer"
            />
          </button>
          <button
            className={styles.customVideoPlayer_FullScrenn__btn}
            onClick={forwardVideo}
            >
            <Image
              src={forward}
              alt="вперед"
              className="forward__videoplayer"
            />
          </button>
        </div>
        {/* кнопка включения и выключения субтитров */}
        <div className={styles.customVideoPlayer_OffSubtitles}>
          <button
            className={styles.customVideoPlayer_FullScrenn__btn}
            onClick={activeSubtitles}
            >
            <Image
              src={offsubtitleS}
              alt="полный экран"
              className="offsubtitles__videoplayer"
            />
          </button>
        </div>
        {/* кнопка полноэкранного режима */}
        <div className={styles.customVideoPlayer_FullScrenn}>
          <button
            className={styles.customVideoPlayer_FullScrenn__btn}
            onClick={requestFullScreen}
          >
            <Image
              src={fullscreen}
              alt="полный экран"
              className="volume__videoplayer"
            />
          </button>
        </div>
      </div>
      {/* прогресс бар */}
      <div className={styles.customVideoPlayer_ProgressBarContainer}>
        <div className={styles.ProgressBar}
          onMouseDown={() => setIsScrubbing(true)}
          onMouseUp={() => setIsScrubbing(false)}
          onMouseMove={scrubVideo}
        >
          <div
            className={styles.ProgressBar_fill}
            style={{ width: `${(currentTime / duration) * 100}%` }}
          >
            <div className={styles.scrubbtn} style={{ left: `${(currentTime / duration) * 100}%` }}></div>
          </div>
          <div className={styles.ProgressBar_timeIndicator}>
            <h1 className={styles.ProgressBar_timeIndicator__currentTime}>
              {formatTime(currentTime, 4)}
            </h1>
            /
            <h1 className={styles.ProgressBar_timeIndicator__duration}>
              {formatTime(duration, 5)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;

// ================= описание =====================
/* 
    Задачи которые должен выполнять кастомный видео плеер 
    ------------------------------------------------------    
    1. Возможность ставить видео на паузу и воспроизводить.✅
    2. Возможность воспроизводить и ставить на паузу с 
       помощью пробела.✅
    3. Воспроизводить и ставить на паузу с помощью клика на видео.✅
    4. Кнопка регулировки громкости.✅
    5. Возможность полнгостью выключить звук и при включее
       уровень громкости ставить на последний✅
    6. Есть иедикатор прогресс бара.✅
    7. Кнопки перематывания ✅
    8. Возможность сделать видео во весь экран.✅
    9. Подключить и выводить на экрна субтитры✅
    10. Включать и выключать субтитры✅
    11. менять язык субтитров🔘
    12. перематывать видео✅
    13. вывод субтитров которые будут впереди✅
    14. вывод непонятных слов🔘
    15. Занести слова в словарь🔘
    -----------------------
    Условные обозначения
    ❌- Не выполнено
    ✅- Выполнено
    🔘- В процессе
*/
