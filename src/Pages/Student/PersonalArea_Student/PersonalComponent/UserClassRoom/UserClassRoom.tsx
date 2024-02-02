// импорт библиотек
import React from "react";
// импорт стилей
import styles from "./UserClassRoom.module.scss";
// импорт компонент
import ClassRoomBtn from "../../../../../Components/UI/ClassRoom/ClassRoom";
// импорт data
import { InfoClassRoom } from "../../../../../Data/ClassRooms.data";
import { InfoUser } from "../../../../../Data/Layout.data";
// интерфейс
interface InUser {
  username: string;
}
const UserClassRoom: React.FC<InUser> = ({ username }) => {
  // ===================================
  //          ClASSROOM
  // ===================================
  return (
    <div className={styles.UserClassRoom_container}>
      {InfoClassRoom.map((item) => {
        let flag = false;
        InfoClassRoom[item.id].StudentName.map((nameArray) => {
          nameArray.forEach((name) => {
            if (name == username) {
              flag = true;
            }
          });
        });
        if (flag) {
          return (
            <div>
              <ClassRoomBtn ClassRoomName={item.name} link={item.id} UserName={InfoUser.name}/>
            </div>
          );
        }
      })}
    </div>
  );
};

export default UserClassRoom;
