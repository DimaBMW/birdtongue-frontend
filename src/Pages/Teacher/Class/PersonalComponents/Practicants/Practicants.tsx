// компонент для сраницы кк (Всплывашка Проктиканты + add Procticant)
// импорт биьлиотек
import React, { useState,useEffect,useRef } from "react";
// импорт стилей
import styles from "./Practicants.module.scss";
// импорт компонент
import Image from "../../../../../Components/UI/Image/Image";
import ButtonOne from "../../../../../Components/UI/ButtonOne/ButtonOne";
import PracticantCard from "../Practicant_Card/Practicant_card";
import { flag } from "../../../../../Components/UI/ListItem/ListItem";
// импорт icons
import close from "../../../../../assets/Icon/AddFilm_Admin/x.svg";
import IconSerach from "../../../../../assets/Icon/Home/search.svg";
// импорт data
import { InfoPracticants } from "../../../../../Data/Practicants.data";

// интерфейс
interface InPracticants{
    classActive:boolean;
    onChangePropValue: (newValue: boolean) => void;
   className:string;
}
interface InPracticant{
    name: string;
    logo:string;
    DeadLine:string;
    Progress:number;
}

const AddPracticants:React.FC<InPracticants>=({classActive,onChangePropValue,className})=>{
    const handleClose=()=>{
        onChangePropValue(false);
    }
    // ===================================
    //             search
    // ===================================
    const [searchvalue,setSearchValuse]=useState('');
    const [filteredData,setFilteredData] = useState<InPracticant[]>([]);
    const handleSearch=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchValuse(event.target.value);
    }
    useEffect(()=>{
        const filtered=InfoPracticants.filter((item:InPracticant)=>item.name.toLowerCase().includes(searchvalue.toLowerCase()));
        // const filteredlist=InfoFilm.filter((item:IDFilm)=>(item.level&&item.teg&&item.genre).toLowerCase().includes(searchTerm.toLowerCase()));
        const filteredlist = InfoPracticants.filter((item: InPracticant) => {
            if (
              (item.name && item.name.toLowerCase().includes(searchvalue.toLowerCase()))
            ) {
              return true;
            }
            return false;
          });
        if(flag)
                setFilteredData(filteredlist)
            else
                setFilteredData(filtered)
    },[searchvalue]);

    const currentData=filteredData.slice();
    // закрытие всплывашки на нажатие на свободную облать экрана
    const blockRef=useRef<HTMLDivElement>(null);
    useOutsideClick(blockRef,handleClose);
    let kol=0;
    return(
        <div className={`${styles.AddPracticants_container} ${classActive? styles.active:''}`} >
            <div className={styles.AddPracticants_box} >
                <div className={styles.AddPracticants_box__title}>
                    <h1>Participants</h1>
                    <button className={styles.btn_close} onClick={handleClose}>
                        <Image src={close} alt="закрыть" className="form-admin__icon"/>
                    </button>
                </div>
                <div className={styles.AddPracticants_box__searches}>
                    <div className={styles.AddPracticants_box__search}>
                        <input type="text" value={searchvalue} placeholder="Search..." onChange={handleSearch}/>
                        <Image className="search__img" src={IconSerach} alt="search"/>
                    </div>
                    <div className={styles.AddPracticants_box__statisticks}>
                        {InfoPracticants.map((item)=>{
                                let flag=false;
                                InfoPracticants[item.id].nameClass.map((arrayName)=>{
                                    arrayName.forEach((name)=>{
                                        if(name==className){
                                            flag=true;
                                        }
                                    })
                                })
                                if(item.id<=5 && searchvalue=='' && flag){
                                    console.log(item.id);
                                    return(
                                        <div>
                                            <PracticantCard logo={item.logo} name={item.name} deadline={item.DeadLine} progress={item.Progress}/>
                                        </div> 
                                    )
                                }
                            })

                        }
                        {currentData.map((item)=>{
                            kol+=1;
                            if(searchvalue!=''&& kol<=5){
                                return(<PracticantCard logo={item.logo} name={item.name} deadline={item.DeadLine} progress={item.Progress}/>)
                            }
                         })
                        }
                    </div>
                </div>
                <div className={styles.AddPracticants_box__buttons}>
                    <ButtonOne name="Add a participant" icon={1} className="admin-opacity"/>
                    <ButtonOne name="Apply" icon={0} className="admin-default"/>
                </div>
            </div>
        </div>
    );
}

export default AddPracticants;