import React from "react";
import "./PopularCard.scss";
import Image from "../Image/Image";
// data
import { InfoCard } from "../../../Data/PopularCard.data";
// icon
import bookmark from "../../../assets/Icon/PopularCard/bookmark.svg";
import repost from "../../../assets/Icon/PopularCard/share.svg";
import views from "../../../assets/Icon/PopularCard/eye.svg";

interface InInfoCard {
  id: number;
  name: string;
  Words: number;
  Language: string;
  Level: string;
  Repost: number;
  Views: number;
}
const data: InInfoCard[] = InfoCard;

const PopularCard: React.FC = () => {
  return (
    <div className="card">
      {data.map((item: InInfoCard) => {
        return (
          <div className="card-container" key={item.id}>
            <div className="card-container-title">{item.name}</div>
            <div className="card-container-main">
                <label>Words amount: {item.Words}</label>
                <label>Language: {item.Language}</label>
                <label>Language level: {item.Level}</label>
            </div>
            <div className="card-container-info">
                <Image src={bookmark} alt="bookmark" className="img-popularcard"/>
                <label>
                    <Image src={repost} alt="bookmark" className="img-popularcard"/>
                    {item.Repost}
                </label>
                <label>
                    <Image src={views} alt="bookmark" className="img-popularcard"/>
                    {item.Views}
                </label>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PopularCard;