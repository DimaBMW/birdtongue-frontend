import styles from "./Layout.module.scss";
import { Outlet, Link, useLocation } from "react-router-dom";
import React from "react";
// import data
import { InfoUser } from "../../Data/Layout.data";
// import components
import Logo from "../UI/Logo/Logo";
// import Chat from "./Chat/Chat/Chat";
import Image from "../UI/Image/Image";
// import Icon
import icon1 from "../../../public/Logo/Logo.svg";
// interface user_info
interface InUserInfo{
  registered:boolean;
  user_name:string;
  user_lastname:string;
  user_role:string;
}
const Layout:React.FC<InUserInfo>=({registered,user_name,user_lastname,user_role})=>{
  // get the url
  const location = useLocation();
  return (
    <div className={styles.layout_container}>
      <header className={styles.header}>
        {location.pathname === "/login" ? (
          <div className={styles.header_container}>
            <div className={styles.header_container_logo}>
              <Link to="/">
                <Logo src={icon1} />
              </Link>
            </div>
            <div className={styles.header_container_logout}>
              <div className={styles.logout_NoRegistered}>
                <Link to="/singin" className={styles.logout_link__singin}>
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        ) : location.pathname === "/singin" ? (
          <div className={styles.header_container}>
            <div className={styles.header_container_logo}>
              <Link to="/">
                <Logo src={icon1} />
              </Link>
            </div>
            <div className={styles.header_container_logout}>
              <div className={styles.logout_NoRegistered}>
                <Link to="/login" className={styles.logout_link__login}>
                  Log in
                </Link>
              </div>
            </div>
          </div>
        ) : location.pathname=="/teacher/singin"?( 
          <div className={styles.header_container}>
            <div className={styles.header_container_logo}>
              <Link to="/teacher">
                <Logo src={icon1} />
              </Link>
            </div>
            <div className={styles.header_container_logout}>
              <div className={styles.logout_NoRegistered}>
                <Link to="/teacher/login" className={styles.logout_link__login}>
                  Log in
                </Link>
              </div>
            </div>
          </div>
        ):location.pathname=="/teacher/login"?( 
          <div className={styles.header_container}>
            <div className={styles.header_container_logo}>
              <Link to="/teacher">
                <Logo src={icon1} />
              </Link>
            </div>
            <div className={styles.header_container_logout}>
              <div className={styles.logout_NoRegistered}>
                <Link to="/teacher/singin" className={styles.logout_link__singin}>
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        ):(
          <div className={styles.header_container}>
            <div className={styles.header_container_logo}>
              {location.pathname.startsWith("/teacher")?
                <>
                  <Link to="/teacher">
                    <Logo src={icon1} />
                  </Link>
                </>
                :
                <>
                  <Link to="/">
                    <Logo src={icon1} />
                  </Link>
                </>
              }
            </div>
            <div className={styles.header_container_navigation}>
              <nav className={styles.navigation}>
                <ul className={styles.navigation_ul}>
                  <li className={styles.navigation_li}>
                    {location.pathname.startsWith("/teacher")?
                      <>
                        <Link to="/teacher/login" className={styles.navigation_link}>
                          Movies
                        </Link>
                      </>
                      :
                      <>
                        <Link to="/login" className={styles.navigation_link}>
                          Movies
                        </Link>
                      </>
                    }
                  </li>
                  <div className={styles.navigation_li__hoverbox}>
                    <div className={styles.navigation_li__hoverbox}>
                      <li className={styles.navigation_li__hover}>
                          Education
                      </li>
                    </div>
                    <div className={styles.nav_podmenu}>
                      {!registered ? (
                        <>
                          {location.pathname.startsWith("/teacher")?
                              <>
                              {/* Teacher */}
                                <Link to="/teacher/login" className={styles.navigation_link}>
                                  Classrooms
                                </Link>
                                <Link to="/teacher/login" className={styles.navigation_link}>
                                  For teachers
                                </Link>
                                <Link to="/teacher/login" className={styles.navigation_link}>
                                  For students
                                </Link>
                              </>
                            :
                              <>
                              {/* Student */}
                            <Link to="/login" className={styles.navigation_link}>
                              Classrooms
                            </Link>
                            <Link to="/login" className={styles.navigation_link}>
                              For teachers
                            </Link>
                            <Link to="/login" className={styles.navigation_link}>
                              For students
                            </Link>
                              </>
                          }
                        </>
                      ) : (
                        <>
                          {location.pathname.startsWith("/teacher")?
                            <>
                            {/* Teacher */}
                              <Link
                                to="/teacher/classrooms"
                                className={styles.navigation_link}
                              >
                                Classrooms
                              </Link>
                              <Link
                                to="/teacher/forteachers"
                                className={styles.navigation_link}
                              >
                                For teachers
                              </Link>
                              <Link
                                to="/teacher/forstudents"
                                className={styles.navigation_link}
                              >
                                For students
                              </Link>
                            </>
                            :
                            <>
                            {/* Student */}
                              <Link
                                to="/classrooms"
                                className={styles.navigation_link}
                              >
                                Classrooms
                              </Link>
                              <Link
                                to="/forteachers"
                                className={styles.navigation_link}
                              >
                                For teachers
                              </Link>
                              <Link
                                to="/forstudents"
                                className={styles.navigation_link}
                              >
                                For students
                              </Link>
                            </>
                          }
                        </>
                      )}
                    </div>
                  </div>
                  {!registered ? (
                    <>
                      <li className={styles.navigation_li}>
                        <Link
                          to="/login"
                          className={styles.navigation_link}
                        >
                          Community
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                    {location.pathname.startsWith("/teacher")?
                      <>
                      {/* Teacher */}
                        <li className={styles.navigation_li}>
                          <Link
                            to="/teacher/community"
                            className={styles.navigation_link}
                          >
                            Community
                          </Link>
                        </li>
                      </>
                      :
                      <>
                      {/* Student */}
                        <li className={styles.navigation_li}>
                          <Link
                            to="/community"
                            className={styles.navigation_link}
                          >
                            Community
                          </Link>
                        </li> 
                      </>
                    }
                    </>
                  )}
                </ul>
              </nav>
            </div>
            <div className={styles.header_container_logout}>
              {registered ? (
                <>
                {user_role=='Teacher'?
                 <>
                 {/* Teacher */}
                    <Link
                      to={`/teacher/personal_area/${user_name+user_lastname}`}
                      className={styles.logout_link__user}
                    >
                      <div className={styles.logout_Registered}>
                        <h1>{user_name+user_lastname}</h1>
                        <div className={styles.logout_Registered_imgbox}>
                          <Image
                            src={InfoUser.logo}
                            alt="аватарка"
                            className="user__img"
                          />
                        </div>
                      </div>
                    </Link>
                 </>
                 :
                 <>
                 {/* Student */}
                  <Link
                      to={`/personalArea/${user_name+user_lastname}`}
                      className={styles.logout_link__user}
                    >
                      <div className={styles.logout_Registered}>
                        <h1>{user_name+user_lastname}</h1>
                        <div className={styles.logout_Registered_imgbox}>
                          <Image
                            src={InfoUser.logo}
                            alt="аватарка"
                            className="user__img"
                          />
                        </div>
                      </div>
                  </Link>
                 </>
                }
                </>
              ) : (
                <div className={styles.logout_NoRegistered}>
                  {location.pathname=="/teacher"?
                    <>
                      <Link to="/teacher/login" className={styles.logout_link__login}>
                        Log in
                      </Link>
                      <Link to="/teacher/singin" className={styles.logout_link__singin}>
                        Sign in
                      </Link></>
                    :
                    <>
                      <Link to="/login" className={styles.logout_link__login}>
                        Log in
                      </Link>
                      <Link to="/singin" className={styles.logout_link__singin}>
                        Sign in
                      </Link>
                    </>
                  }
                </div>
              )}
            </div>
          </div>
        )}
      </header>
      <div className={styles.layout_main}>
        <Outlet />
      </div>
      <footer className={styles.footer}>
        <div className={styles. footer_chat}>
          {/* <Chat/> */}
        </div>
      </footer>
    </div>
  );
}

export default Layout;
