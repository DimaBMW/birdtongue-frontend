import React from "react";
import "./ButtonOne.scss";
import Image from "../Image/Image";

// icon (+)
import icon1 from "../../../assets/Icon/svg/plus(white).svg";
import icon2 from "../../../assets/Icon/svg/plus(black).svg";

interface ButtonOneProps{
    name?:string;
    icon?:number;
    className?:string;
}

const ButtonOne:React.FC<ButtonOneProps> = ({name,icon,className}) =>{
    return(
        <div className="button__conatainer">
            <button className={`${className}`}>
                <h1 className="h1">{name}</h1>
                {className=="default"?
                    <Image src={icon1} alt="plus" className={`button__icon ${icon==1?"show":"no__show"}`}/>
                    :
                    <Image src={icon2} alt="plus" className={`button__icon ${icon==1?"show":"no__show"}`}/>
                }
                
            </button>
        </div>
    );
};

export default ButtonOne;