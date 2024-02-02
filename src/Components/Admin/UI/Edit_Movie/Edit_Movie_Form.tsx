// Стили
import styles from "./Edit_MovieForm.module.scss";
// Бибилиотеки
import { SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from "react";
// Компоненты
import Image from "../../../UI/Image/Image";
import ButtonOne from "../../../UI/ButtonOne/ButtonOne";
import FormSelect from "../../../UI/Selector/Selector";
import Selector from "../Custom_Selector/Custom_Selector";
// Icon
import maximize from "../../../../assets/Icon/AddFilm_Admin/maximize.svg";
import close from "../../../../assets/Icon/AddFilm_Admin/x.svg";
import minimize from "../../../../assets/Icon/AddFilm_Admin/minimize.svg";
import delet from "../../../../assets/Icon/AddFilm_Admin/trash.svg";
// Типизируем дынные для пропс
interface InAdminForm {
  isActoveForm: boolean;
}
// опци для выбора языка
const options = [
  {
    value: "russian",
    label: "Russian",
  },
  {
    value: "english",
    label: "English",
  },
  {
    value: "german",
    label: "German",
  },
];
// опци для выбора уровня
const LevelOption = [
  {
    value: "a1",
    label: "A1",
  },
  {
    value: "b1",
    label: "B1",
  },
  {
    value: "c1",
    label: "C1",
  },
];
// опци для выбора языка субтитров
const LanguageSubtitles = [
  {
    value: "russian",
    label: "Russian",
  },
  {
    value: "english",
    label: "English",
  },
  {
    value: "german",
    label: "German",
  },
];
//   данные для select list
const Selectoptions = [
  { label: "name", value: "1" },
  { label: "name", value: "2" },
  { label: "name", value: "3" },
];
// создаем компоненты Админки => Добавление фильма
const EditMovieForm: React.FC<InAdminForm> = ({ isActoveForm }) => {
  //необходимые методы для useFrom
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InAdminForm>();
  // Обрабатываем данные с формы
  const submit: SubmitHandler<InAdminForm> = (data) => {
    data;
  };
  // Фуекция закрытия формы
  const [closeAdminForm, setCloseAdminForm] = useState(true);
  const handleCloseAdminForm = () => {
    setCloseAdminForm(!closeAdminForm);
  };
  // Функция развеорачивания формы
  const [maximizeAdminForm, setMaximazeAdminForm] = useState(false);
  const handleMaximazeAdminForm = () => {
    setMaximazeAdminForm(!maximizeAdminForm);
  };
  // функция прикрепления файла с видео и отображения его в input type=text
  const [selectdFile, setSelectedFile] = useState<string | null>(null);
  const handleSelectedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file?.name || null);
  };
  const [selectdFile2, setSelectedFile2] = useState<string | null>(null);
  const handleSelectedFile2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile2(file?.name || null);
  };
  // при открытии админ формы, лишаем body скрола.
  !isActoveForm === closeAdminForm
    ? document.body.classList.add("no-scroll")
    : document.body.classList.remove("no-scroll");

  // выбор в селект по умолчанию
  const [currentSelectLanguage, setCurrentSelectLanguage] = useState("english");
  const [currentSelectLevel, setCurrentSelectLevel] = useState("a1");
  const [currentSelectSubtitle, setCurrentSelectSubtitle] = useState("english");

  const handleOnChangeLanguage = (value: string) => {
    setCurrentSelectLanguage(value);
  };
  const handleOnChangeLevel = (value: string) => {
    setCurrentSelectLevel(value);
  };
  const handleOnChangeSubtitle = (value: string) => {
    setCurrentSelectSubtitle(value);
  };
  // управление checkbox
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  // Возвращаем разметку tsx
  return (
    <div
      className={`${
        !isActoveForm === closeAdminForm
          ? styles.form_container_active
          : styles.form_container
      }`}
    >
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <div className={styles.form_title}>
          <h1>Editing the movie description</h1>
          <div className={styles.form_title_icon}>
            <button onClick={handleMaximazeAdminForm}>
              <Image
                src={!maximizeAdminForm ? maximize : minimize}
                alt="увеличить"
                className="form-admin__icon"
              />
            </button>
            <button onClick={handleCloseAdminForm}>
              <Image src={close} alt="закрыть" className="form-admin__icon" />
            </button>
          </div>
        </div>
        <div className={styles.form_main}>
          <div className={styles.form_main_linktoMovieFile}>
            <div className={styles.form_main_linktoMovieFile_inputbox}>
              <h2>Link to a movie or movie file</h2>
              <input type="text" className={styles.input_adminform} />
            </div>
            <div className={styles.form_main_linktoMovieFile_btnaddfile}>
              <input
                type="file"
                id="file-input"
                style={{ display: "none", visibility: "hidden" }}
                onChange={handleSelectedFile}
              />
              <button
                onClick={() => document.getElementById("file-input")?.click()}
                className={styles.btn_adminForm}
              >
                Review
              </button>
              <h1>{selectdFile || ""}</h1>
            </div>
          </div>
          <div className={styles.title_part2__checkbox}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              id="myCheckbox2"
              className={styles.custom_checkbox}
            />
            <label htmlFor="myCheckbox2">Hide a movie from users</label>
          </div>
          <div className={styles.form_main_inputbox}>
            <h2>The name of the movie</h2>
            <input type="text" className={styles.input_adminform} />
          </div>
          <div className={styles.form_main_inputbox}>
            <h2>Description of the film</h2>
            <textarea className={styles.input_adminform} />
          </div>
          <div className={styles.form_main_selectsbox}>
            <div className={styles.form_main_selectsbox__rows1}>
              <FormSelect
                options={options}
                name="Language"
                currentSelect={currentSelectLanguage}
                onChange={handleOnChangeLanguage}
              />
              <FormSelect
                options={LevelOption}
                name="Language level"
                currentSelect={currentSelectLevel}
                onChange={handleOnChangeLevel}
              />
            </div>
            <div className={styles.form_main_selectsbox_rows2}>
              <h1 className={styles.h1_select}>Subtitles</h1>
              <div className={styles.form_main_selectsbox_rows2_fileSubptatile}>
                <FormSelect
                  options={LanguageSubtitles}
                  name="Subtitle language"
                  currentSelect={currentSelectSubtitle}
                  onChange={handleOnChangeSubtitle}
                />
                <div className={styles.filebtnSubtitle}>
                  <input
                    type="file"
                    id="file-input2"
                    style={{ display: "none", visibility: "hidden" }}
                    onChange={handleSelectedFile2}
                  />
                  <button
                    onClick={() =>
                      document.getElementById("file-input2")?.click()
                    }
                    className={styles.btn_adminForm}
                  >
                    Review
                  </button>
                  <h1>{selectdFile2 || ""}</h1>
                </div>
              </div>
              <div className={styles.formbtnsubtitles}>
                <ButtonOne
                  name="Add subtitles"
                  icon={1}
                  className="admin-opacity"
                />
              </div>
            </div>
          </div>
          <div className={styles.form_main_castBox}>
            <h1>Cast</h1>
            <div className={styles.form_main_castBox__selectbox}>
              <Selector title="Film director" options={Selectoptions} />
              <Selector title="Film director" options={Selectoptions} />
            </div>
          </div>
          <div className={styles.delet_Movie}>
            <button className={styles.delet_Movie_btn}>
              <Image
                src={delet}
                alt="Edit a movie"
                className="button-admin__icon"
              />
              <h1>Delete a movie</h1>
            </button>
          </div>
        </div>
        <div className={styles.form_buttons}>
          <ButtonOne name="Cancel" icon={0} className="admin-opacity" />
          <ButtonOne name="Save" icon={0} className="admin-default" />
        </div>
      </form>
    </div>
  );
};
// "Экспортируем компоненку"
export default EditMovieForm;
