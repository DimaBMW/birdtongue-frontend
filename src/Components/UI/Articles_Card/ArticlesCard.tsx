import React from "react";
import styles from "./ArticlesCard.module.scss";
import Image from "../Image/Image";
import { Link } from "react-router-dom";
// img 
import preview from "../../../assets/Img/Preview.png";
interface InArticlesCard{
    title:string;
    data:string;
    text:string;
}

const ArticlesCard:React.FC<InArticlesCard>=({title,data,text})=>{
    return(
        <div className={styles.ArticlesCard_container}>
            <Link to={'/'} className={styles.link}>
                    <Image alt="articels" className="arcticles-card__img" src={preview}/>
                    <div className={styles.ArticlesCard_textBox}>
                        <h1>{data}</h1>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
            </Link>
        </div>
    );
}

export default ArticlesCard;