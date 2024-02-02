// импорт библиотек
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Select, { SingleValue, MultiValue } from "react-select";
import makeAnimated from "react-select/animated";
// импорт стилей
import styles from "./AddQuetions.module.scss";
import "./Select.scss";
// импорт компонентов
import Image from "../../../../../Components/UI/Image/Image";
import InputField from "../FormsQuetions/InputField/InputField";
import ChoosingAnAnswer from "../FormsQuetions/ChoosingAnAnswer/ChoosingAnAnswer";
import DetailedResponsed from "../FormsQuetions/DetailedResponse/DetailedResponse";
import Movies from "../FormsQuetions/Movies/Movies";
import Vocabulary from "../FormsQuetions/Vocabulary/Vocabulary";
// импорт icon
import close from "../../../../../assets/Icon/AddFilm_Admin/x.svg";
// импорт data
import { InfoQuetions } from "../../../../../Data/Quetions.data";
// интейфейс пропс
interface InProps {
  active: boolean;
  TestName: string;
  onChangePropValue: (newValue: boolean) => void;
}
// интерфейс FORM
interface InQuetionForm {
  isActiveForm: boolean;
  TestName: string;
  InputFieldForm:string;
}
// интерфейс option
interface InOption {
  value: string;
  label: string;
}
// опции для select
const options: InOption[] = [
  {
    value: "inputfield",
    label: "Input field",
  },
  {
    value: "choosingananswer",
    label: "Choosing an answer",
  },
  {
    value: "detailedresponse",
    label: "Detailed response",
  },
  {
    value: "movies",
    label: "Movies",
  },
  {
    value: "vocabulary",
    label: "Vocabulary",
  },
];
const animated = makeAnimated();
const AddQuetions: React.FC<InProps> = ({
  active,
  TestName,
  onChangePropValue,
}) => {
  // функция подсчета количества вопросов и исходном тесте
  function QuetionsKoll() {
    let koll = 0;
    InfoQuetions.map((item) => {
      if (item.TestName === TestName) {
        koll++;
      }
    });
    return koll;
  }
  const handleClose = () => {
    onChangePropValue(false);
  };
  // ==============
  //     FORM
  // ==============
  const {
    register,
    handleSubmit,
    setValue, watch, 
    formState: { errors },
  } = useForm<InQuetionForm>({
    mode: "onChange",
    defaultValues: {
      TestName: `${TestName}`,
      InputFieldForm:'',
    },
  });
  
  const onChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue('InputFieldForm', event.target.value)
  };
  const submit: SubmitHandler<InQuetionForm> = (data) => {
    console.log(data);
  };
  const WatchInputFieldForm= watch('InputFieldForm', '');

  // // функция прикрепления файла с видео и отображения его в input type=text
  const [selectdFile, setSelectedFile] = useState<string | null>(null);
  const handleSelectedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file?.name || null);
  };
  // ==============
  //     SELECT
  // ==============
  const [currentMenu, setCurrentMenu] = useState("inputfield");

  const getValue = () => {
    return currentMenu ? options.find((c) => c.value === currentMenu) : "";
  };
  const onChange = (
    newValue: SingleValue<string | InOption> | MultiValue<string | InOption>
  ) => {
    const selectedValue = newValue ? (newValue as InOption).value : "";
    setCurrentMenu(selectedValue);
  };
  return (
    <div
      className={`${styles.AddQuetions_container} ${
        active ? styles.active : ""
      }`}
    >
      <div className={styles.AddQuetions_box}>
        <div className={styles.AddQuetions_box__title}>
          <h1>Question {QuetionsKoll() + 1}</h1>
          <button onClick={handleClose} className={styles.btn}>
            <Image src={close} alt="закрыть" className="form-admin__icon" />
          </button>
        </div>
        <form
          className={styles.AddQuetions_box__form}
          onSubmit={handleSubmit(submit)}
        >
          <div className={styles.From_inputFile}>
            <div className={styles.From_inputFile__text}>
              <h1>Question</h1>
              <input
                {...register("TestName", { required: "Error Description" })}
                type="text"
                className={`${styles.input} ${
                  errors.TestName ? styles.input_errors : ""
                }`}
                placeholder="Username"
              />
              {errors?.TestName && (
                <div className={styles.errors}>{errors.TestName.message}</div>
              )}
            </div>
            <div className={styles.From_inputFile__file}>
              <input
                type="file"
                id="file-input"
                style={{ display: "none", visibility: "hidden" }}
                onChange={handleSelectedFile}
              />
              <button
                onClick={() => document.getElementById("file-input")?.click()}
                className={styles.btn_File}
              >
                Review
              </button>
              <h1>{selectdFile || "File name"}</h1>
            </div>
          </div>
          <div className={styles.From_selectMenu}>
            <h1>Response form</h1>
            <Select
              onChange={onChange}
              value={getValue()}
              options={options}
              classNamePrefix="select"
              components={animated}
            />
          </div>
          <div className={styles.Form_form}>
            {(() => {
              switch (currentMenu) {
                case "inputfield":
                  return (<InputField onChange={onChangeForm} value={WatchInputFieldForm}/>);
                case "choosingananswer":
                    return(<ChoosingAnAnswer/>);
                case "detailedresponse":
                    return(<DetailedResponsed/>);
                case "movies":
                    return(<Movies/>);
                case "vocabulary":
                    return(<Vocabulary/>);
                default:
                  return null;
              }
            })()}
          </div>
          <div className={styles.Form_btn}>
                <button>
                  отправить
                </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuetions;
