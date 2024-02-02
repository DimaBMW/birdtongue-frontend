import {FC} from "react";
import "./Logo.scss";

const Logo:FC<{src:string}>=({src})=>{
    return(
        <div className="logo">
            <img src={src} alt="логотип" useMap="#home" className="logo__img"/>
        </div>
    );
}

export default Logo;