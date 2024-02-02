import React from "react";
import styles from "./Sertificate.module.scss";
import Image from "../../../../../Components/UI/Image/Image";
import Delete from "../../../../../assets/Icon/LK/trash.svg";
import OpenSertificat from "../../../../../assets/Icon/LK/sertificatopen.svg";
const Sertificate:React.FC=()=>{
    return(
        <div className={styles.Sertificate_container}>
            <div className={styles.Sertificate_part1}>
                <div className={styles.Sertificate_btnOpen}>
                    <button className={styles.btnOpen}>
                        <Image className="homearrow__img" alt="open sertificat" src={OpenSertificat}/>
                    </button>
                </div>
                <div className={styles.Sertificate_textbox}>
                    <h1>Teacher's Certificate</h1>
                    <h2>Description of the teacher's certificate</h2>
                </div>
            </div>
            <div className={styles.Sertificate_btnDelete}>
                <button className={styles.btnDelete}>
                    <Image className="homearrow__img" alt="open sertificat" src={Delete}/>
                </button>
            </div>
        </div>
    )
}

export default Sertificate;