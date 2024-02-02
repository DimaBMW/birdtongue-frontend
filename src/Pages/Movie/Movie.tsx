import styles from "./Movie.module.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
// компоненты
import PopularCard from "../../Components/UI/PopularCard/PopularCard";
import ButtonOne from "../../Components/UI/ButtonOne/ButtonOne";


import Vocabulary from "../../Components/UI/Vocabulary/Vocabulary";
import Image from "../../Components/UI/Image/Image";
import EditMovieForm from "../../Components/Admin/UI/Edit_Movie/Edit_Movie_Form";
import CustomVideoPlayer from "../../Components/UI/CustomVideoPlayer/CustomVideoPlayer";
// data
import { InfoFilm } from "../../Data/Films.data";
import { InfoUser } from "../../Data/Layout.data";
// video
import video from "../../assets/Video/BMWM5.mp4";
import sub from "../../assets/Subtitles/BMW.vtt";
// icon
import icon from "../../assets/Icon/AddFilm_Admin/edit.svg";



function Movie() {
  const { id } = useParams();
  const isId = typeof id === "string" ? parseInt(id) : undefined;

  // admin
  const [isAdminForm, setIsAdminForm] = useState(true);



  
  const handleActiveAdminForm = () => {
    setIsAdminForm(!isAdminForm);
  };
  return (
    <div>
      <section className={styles.Movie_container}>
        <div className={styles.Movie_container_main}>
          <div className={styles.main_title}>
            <h1>{InfoFilm[isId || 0]?.name}</h1>
            {InfoUser.access == "admin" && (
              <div className={styles.btn_admin}>
                <button
                  className={styles.btn_admin__addMovie}
                  onClick={handleActiveAdminForm}
                >
                  <Image
                    src={icon}
                    alt="Add a movie"
                    className="button-admin__icon"
                  />
                  Edit
                </button>
              </div>
            )}
          </div>
          <div className={styles.main_video}>
            <CustomVideoPlayer source={video} src={sub}/>

          </div>
          <div className={styles.main_vocabulary}>
            <Vocabulary
              LevelLanguage={InfoFilm[isId || 0]?.level}
              CountRepost={InfoFilm[isId || 0]?.MyVocabulary.Repost}
              CountViews={InfoFilm[isId || 0]?.MyVocabulary.Views}
              Words={InfoFilm[isId || 0]?.MyVocabulary.Words}
            />
          </div>
          <div className={styles.main_dictionaries}>
            <ButtonOne icon={0} name="Dictionaries" className="opacity" />
          </div>
        </div>
        <div className={styles.Movie_container_cards}>
          <h1>Popular Card</h1>
          <div className={styles.Movie_container_saitbar}>
            <PopularCard />
          </div>
          <Link to="/Dictionaries" className={styles.Movie_link}>
            Show more
          </Link>
        </div>
      </section>
      <EditMovieForm isActoveForm={isAdminForm} />
    </div>
  );
}

export default Movie;
