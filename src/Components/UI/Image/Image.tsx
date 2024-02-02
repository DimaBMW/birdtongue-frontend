import React from "react";
import "./Image.scss";

interface ImageProps{
    src?:string;
    className:string;
    alt:string;
}

const Image: React.FC<ImageProps> = ({ src,className,alt }) => {
    return(
        <div className={`image ${className}`}>
            <img src={src} alt={alt}/>
        </div>
    );
};

export default Image;