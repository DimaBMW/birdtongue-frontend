import React from "react";
import "./UserVocabular.scss";
import Image from "../Image/Image";
// icon
import bookmark from "../../../assets/Icon/PopularCard/bookmark.svg";
import repost from "../../../assets/Icon/PopularCard/share.svg";
import views from "../../../assets/Icon/PopularCard/eye.svg";

interface InInfoCard {
  name: string;
  Words: number;
  Language: string;
  Level: string;
  Repost: number;
  Views: number;
}

const userVocabular: React.FC<InInfoCard>= ({name,Words,Language,Level,Repost,Views}) => {
  return (
    <div className="card">
          <div className="card-container">
            <div className="card-container-title">{name}</div>
            <div className="card-container-main">
                <label>Words amount: {Words}</label>
                <label>Language: {Language}</label>
                <label>Language level: {Level}</label>
            </div>
            <div className="card-container-info">
                <Image src={bookmark} alt="bookmark" className="img-popularcard"/>
                <label>
                    <Image src={repost} alt="bookmark" className="img-popularcard"/>
                    {Repost}
                </label>
                <label>
                    <Image src={views} alt="bookmark" className="img-popularcard"/>
                    {Views}
                </label>
            </div>
          </div>
    </div>
  );
}

export default userVocabular;