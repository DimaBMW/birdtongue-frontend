import React from "react";
import "./Link.scss";

interface LinkProps{
    name:string;
    href:string;
}

const Link: React.FC<LinkProps> = ({ name,href }) => {
    return(
        <div className="link__container">
            <a href={href} className="link">
                {name}
            </a>
        </div>
    );
}

export default Link;