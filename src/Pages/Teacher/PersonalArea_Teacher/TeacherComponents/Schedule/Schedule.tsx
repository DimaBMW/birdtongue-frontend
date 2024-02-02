// календарь занятий для преподователя
// импорт библиотек
import React, { useState, useEffect } from "react";
import Select ,{ SingleValue, MultiValue } from "react-select";
// имопорт стилей
import styles from "./Schedule.module.scss";
// импорт icon 
import trash from "../../../../../assets/Icon/AddFilm_Admin/trash.svg";
// импорт компонент
import Image from "../../../../../Components/UI/Image/Image";
// импорт data
import { InfoSchedule } from "../../../../../Data/Schedule.data";
import { array, element } from "prop-types";
// интерфейсы
interface InOption {
  value: string;
  label: string;
}

const Schedule: React.FC = () => {
  // ============================
  //           SELECTOR
  // ============================
  const [currentMenu, setCurrentMenu] = useState("");
  const [currentOption, setCurrentOption] = useState<InOption[]>([]);

  useEffect(() => {
    const options: InOption[] = InfoSchedule.map((element) => ({
      value: element.Month + " " + element.Day + "," + element.year,
      label: element.Month + " " + element.Day + "," + element.year,
    }));
    setCurrentOption(options);
  }, []);

  const getValue = () => {
    return currentMenu ? currentOption.find((c) => c.value === currentMenu) : null;
  };

  const onChange = (newValue: SingleValue<string | InOption> | MultiValue<string | InOption>) => {
    const selectedValue = newValue ? (newValue as InOption).value : "";
    setCurrentMenu(selectedValue);
  };
  // ============================
  //         Buttons
  // ===========================
  const [dayBtn,setDayBtn]=useState(false);
  const [weekBtn,setWeekBtn]=useState(false);
  const [monthBtn,setMonthBtn]=useState(false);

  const handleDay=()=>{
    setDayBtn(true);
    setWeekBtn(false);
    setMonthBtn(false);
    const options: InOption[] = InfoSchedule.map((element) => ({
      value: element.Month + " " + element.Day,
      label: element.Month + " " + element.Day,
    }));
    InfoSchedule.map((item)=>{setCurrentMenu(item.Month + " " + item.Day)})
    setCurrentOption(options);
  }
  const handleWeek=()=>{
    setWeekBtn(true);
    setDayBtn(false);
    setMonthBtn(false);
    const options: InOption[] = InfoSchedule.map((element) => ({
      value: element.Month + " " + element.Week,
      label: element.Month + " " + element.Week,
    }));
    InfoSchedule.map((item)=>{setCurrentMenu(item.Month + " " + item.Week)})
    setCurrentOption(options);
  }
  const handleMoth=()=>{
    setMonthBtn(true);
    setDayBtn(false);
    setWeekBtn(false);
    const options: InOption[] = InfoSchedule.map((element) => ({
      value: element.Month+","+element.year,
      label: element.Month+","+element.year,
    }));
    InfoSchedule.map((item)=>{setCurrentMenu(item.Month+","+item.year)})
    setCurrentOption(options);
  }
  return (
    <div className={styles.Schedule_container}>
      <div className={styles.Schedule_container__controlers}>
        <div className={styles.Controllers_selector}>
          <Select 
              onChange={onChange}
              value={getValue()}
              options={currentOption}
              classNamePrefix="select"/>
        </div>
        <div className={styles.Controllers_buttons}>
          <button className={`${styles.Controllers_buttons__btn} ${dayBtn?styles.activebtn:''}`} onClick={handleDay}>
            Day
          </button>
          <button className={`${styles.Controllers_buttons__btn} ${weekBtn?styles.activebtn:''}`} onClick={handleWeek}>
            Week
          </button>
          <button className={`${styles.Controllers_buttons__btn} ${monthBtn?styles.activebtn:''}`} onClick={handleMoth}>
            Month
          </button>
        </div>
      </div>
      <div className={styles.Schedule_container__databox}>
        {InfoSchedule.map((element)=>{
          if(dayBtn && currentMenu==element.Month + " " + element.Day){
            return(
              <div className={styles.databox}>
                {InfoSchedule[element.id].Inlesson.map((arrayLesson)=>{
                  return(
                    <div className={styles.databox_lessons}>
                      <div className={styles.databox_lessons__box}>
                          <div className={styles.databox_lessons__time}>
                            <h1>{arrayLesson.time}</h1>
                          </div>
                          <div className={styles.databox_lessons__name}>
                            <h1>{arrayLesson.name}</h1>
                            <button className={styles.databox_lessons__btn}>
                              <Image
                                src={trash}
                                alt="аватарка"
                                className="button-admin__icon"/>
                            </button>
                          </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          }
          if(weekBtn && currentMenu==element.Month + " " + element.Week){
            return(
              <div className={styles.databox}>
                <h1>{element.Month + " " + element.Week}</h1>
                {InfoSchedule[element.id].Inlesson.map((arrayLesson)=>{
                  return(
                    <div className={styles.databox_lessons}>
                      <div className={styles.databox_lessons__box}>
                          <div className={styles.databox_lessons__time}>
                            <h1>{arrayLesson.time}</h1>
                          </div>
                          <div className={styles.databox_lessons__name}>
                            <h1>{arrayLesson.name}</h1>
                            <button className={styles.databox_lessons__btn}>
                              <Image
                                src={trash}
                                alt="аватарка"
                                className="button-admin__icon"/>
                            </button>
                          </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            );
          }
          if(monthBtn && currentMenu==element.Month+","+element.year){
            return(
              <div className={styles.databox}>
                <h1>{element.Month+" "+element.Day+","+element.year}</h1>
                {InfoSchedule[element.id].Inlesson.map((arrayLesson)=>{
                  return(
                    <div className={styles.databox_lessons}>
                      <div className={styles.databox_lessons__box}>
                          <div className={styles.databox_lessons__time}>
                            <h1>{arrayLesson.time}</h1>
                          </div>
                          <div className={styles.databox_lessons__name}>
                            <h1>{arrayLesson.name}</h1>
                            <button className={styles.databox_lessons__btn}>
                              <Image
                                src={trash}
                                alt="аватарка"
                                className="button-admin__icon"/>
                            </button>
                          </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            );
          }
          if(currentMenu==element.Month + " " + element.Day + "," + element.year){
            return(
              <div className={styles.databox}>
                {InfoSchedule[element.id].Inlesson.map((arrayLesson)=>{
                  return(
                    <div className={styles.databox_lessons}>
                      <div className={styles.databox_lessons__box}>
                          <div className={styles.databox_lessons__time}>
                            <h1>{arrayLesson.time}</h1>
                          </div>
                          <div className={styles.databox_lessons__name}>
                            <h1>{arrayLesson.name}</h1>
                            <button className={styles.databox_lessons__btn}>
                              <Image
                                src={trash}
                                alt="аватарка"
                                className="button-admin__icon"/>
                            </button>
                          </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          }
          if(currentMenu==''){
            return(
              <div className={styles.databox}>
                <h1>{element.Month+" "+element.Day+","+element.year}</h1>
                {InfoSchedule[element.id].Inlesson.map((arrayLesson)=>{
                  return(
                    <div className={styles.databox_lessons}>
                      <div className={styles.databox_lessons__box}>
                          <div className={styles.databox_lessons__time}>
                            <h1>{arrayLesson.time}</h1>
                          </div>
                          <div className={styles.databox_lessons__name}>
                            <h1>{arrayLesson.name}</h1>
                            <button className={styles.databox_lessons__btn}>
                              <Image
                                src={trash}
                                alt="аватарка"
                                className="button-admin__icon"/>
                            </button>
                          </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            );
          }
        })
        }
      </div>
    </div>
  );
};

export default Schedule;