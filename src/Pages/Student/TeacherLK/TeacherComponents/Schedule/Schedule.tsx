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
import { InfoFreeTime } from "../../../../../Data/FreeTime_Teacher.data";
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
    const options: InOption[] =  InfoFreeTime.map((element) => ({
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

  return (
    <div className={styles.Schedule_container}>
      <div className={styles.Schedule_container__controlers}>
        <div className={styles.Controllers_selector}>
          <h1>Free time schedule</h1>
          <Select 
              onChange={onChange}
              value={getValue()}
              options={currentOption}
              classNamePrefix="select"/>
        </div>
      </div>
      <div className={styles.Schedule_container__databox}>
        { InfoFreeTime.map((element)=>{

          if(currentMenu==element.Month + " " + element.Day + "," + element.year){
            return(
              <div className={styles.databox}>
                <h1>{element.Month+" "+element.Day+","+element.year}</h1>
                <div className={styles.freetime_box}>
                  {InfoFreeTime[element.id].FreeTime.map((arrayFreeTime)=>{
                    return(
                      <div className={styles.databox_lessons}>
                        <div className={styles.databox_lessons__box}>
                            <div className={styles.databox_lessons__time}>
                              <h1>{arrayFreeTime}</h1>
                            </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          }
          if(currentMenu==''){
            return(
              <div className={styles.databox}>
                <h1>{element.Month+" "+element.Day+","+element.year}</h1>
                <div className={styles.freetime_box}>
                  {InfoFreeTime[element.id].FreeTime.map((arrayFreeTime)=>{
                    return(
                      <div className={styles.databox_lessons}>
                        <div className={styles.databox_lessons__box}>
                            <div className={styles.databox_lessons__time}>
                              <h1>{arrayFreeTime}</h1>
                            </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
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