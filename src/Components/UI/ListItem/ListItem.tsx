import React,{useContext} from "react";
import { HomeContext } from "../../../Pages/Teacher/Home_RegTeacher/Home_regTeacher";
import "./ListItem.scss";

export let flag:boolean=false;

interface ListItemProps{
    SerchTerm:string;
    name:string;
}


const ListItem:React.FC<ListItemProps>=({name,SerchTerm})=>{
    const {setSearchTerm}=useContext(HomeContext);

    const handleClick=()=>{
        setSearchTerm(SerchTerm);
        flag=true;
    };

    return(
        <li onClick={handleClick} className="saitbarlist__item">
            {name}
        </li>
    );
}

export default ListItem;