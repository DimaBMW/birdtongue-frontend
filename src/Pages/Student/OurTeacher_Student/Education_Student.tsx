// import libraries
import React, { useState,useEffect } from "react";
import axios from "axios";
// import styles
import styles from "./Education_Student.module.scss";
// import components
import ButtonOne from "../../../Components/UI/ButtonOne/ButtonOne";
import Image from "../../../Components/UI/Image/Image";
import { flag } from "../../../Components/UI/ListItem/ListItem";
import CommunityTest from "../../../Components/UI/CommunityTest/CommunityTest";
import TeacherCard from "../../../Components/UI/Teacher_Card/TeacherCard";
import ArticlesCard from "../../../Components/UI/Articles_Card/ArticlesCard";
// import icon
import IconSerach from "../../../assets/Icon/Home/search.svg";

// interface for Article
interface Articles{
    title:string;
    short_description:string;
    date:string;
}
// interface for Teacher_Card
interface Teacher {
  name: string;
  lastname: string;
  languages:string[];
}
const Education_Student:React.FC=()=>{
    const [searchvalue,setSearchValuse]=useState('');
    const [teacherData, setTeacherData] = useState<Teacher[]>([]);
    const [articlesData,setArticlesData] = useState<Articles[]>([]);
    const [filteredData,setFilteredData] = useState<Articles[]>([]);
    const handleSearch=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchValuse(event.target.value);
    }
    // search of Artocles
    useEffect(()=>{
        const filtered=articlesData.filter((item:Articles)=>item.title.toLowerCase().includes(searchvalue.toLowerCase()));
        const filteredlist = articlesData.filter((item) => {
            if (
              (item.title && item.title.toLowerCase().includes(searchvalue.toLowerCase()))
            ) {
                  return true;
                }
                return false;
              });
            if(flag)
                    setFilteredData(filteredlist)
                else
                    setFilteredData(filtered)
    },[searchvalue]);
    const currentData=filteredData.slice();
    // obtaining data about teachers
    useEffect(()=>{
        const token=localStorage.getItem('user_token');
        axios.get('http://185.119.56.134:8000/api/v1/education/teachers',{
            headers:{
                'Authorization':`Bearer ${token}`,
            }
        })
        .then(response=>{
            console.log('Data sent successfully');
            console.log('Response data ->',JSON.stringify(response.data));
            setTeacherData(response.data);
        })
        .catch(error=>{
            console.error(`ERROR! ${error}`)
        });
    },[])
    // obtaining data about articles
    useEffect(()=>{
        const token=localStorage.getItem('user_token');
        axios.get('http://185.119.56.134:8000/api/v1/education/articles',{
            headers:{
                'Authorization':`Bearer ${token}`,
            }
        })
        .then(response=>{
            console.log('Data sent successfully');
            console.log('Response data ->',JSON.stringify(response.data));
            setArticlesData(response.data);
        })
        .catch(error=>{
            console.log(`ERROR! ${error}`);
        })
    },[])
    return(
        <section className={styles.OurTeacher}>
            <div className={styles.OurTeacher_container}>
                {/* Teachers */}
                <div className={styles.OurTeacher_container__title}>
                    <h1>Our teachers</h1>
                    <div className={styles.OurTeacher_container__teachers}>
                        {/* displaying data about teachers */}
                        {teacherData.map((teacher) =>{
                            const mass:any=[];
                            teacher.languages.map((language)=>{
                                mass.push((language as any).name);
                            })
                            if(teacherData!=undefined){
                                return(
                                    <TeacherCard id={0} name={teacher.name+' '+teacher.lastname} logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg_nrQRIM9IOzKmJb2XxBxMUQIHoh6sIdCA&usqp=CAU" testResult={60} languages={mass}/>    
                                )
                            }
                        })
                        }
                    </div>
                </div>
                {/* Articles */}
                <div className={styles.OurTeacher_container__search}>
                    <h1 className={styles.h1_article}>Articles</h1>
                    <div className={styles.Search_search}>
                        <div className={styles.Search_search__inputContainer}>
                            <input type="text" value={searchvalue} placeholder="Search..." onChange={handleSearch}/>
                            <Image className="search__img" src={IconSerach} alt="search"/>
                        </div>
                    </div>
                    <div className={styles.Search_classrooms}>
                         {/* displaying data about teachers */}
                         {articlesData.map((article)=>{
                            if(articlesData!=undefined && searchvalue==''){
                                return(
                                    <ArticlesCard title={article.title} text={article.short_description} data={article.date}/>
                                )
                            }
                         })
                         }
                         {currentData.map((item)=>{
                            if(searchvalue!='' && articlesData!=undefined){
                                return(<ArticlesCard title={item.title} text={item.short_description} data={item.date}/>)
                            }
                         })
                        }
                    </div>
                    <div className={styles.Search_btn}>
                        <ButtonOne name="My tests" icon={0} className="admin-opacity"/>
                        <ButtonOne name="Vocabularies" icon={0} className="admin-default"/>
                    </div>
                </div>
                {/* рекомендации */}
                <div className={styles.OurTeacher_container__community}>
                    <div className={styles.community_title}>
                        <h1>Community Tests</h1>
                    </div>
                    <div className={styles.community_tests}>
                        <CommunityTest forChildren={0} level="B2" CountQuetions={30} classID={1} id={0}/>
                        <CommunityTest forChildren={1} level="" CountQuetions={10} classID={0} id={1}/>
                        <CommunityTest forChildren={0} level="B2" CountQuetions={30} classID={0} id={2}/>
                        <CommunityTest forChildren={1} level="" CountQuetions={10} classID={0} id={3}/>
                        <CommunityTest forChildren={0} level="B2" CountQuetions={30} classID={0} id={4}/>
                        <CommunityTest forChildren={1} level="" CountQuetions={10} classID={0} id={5}/>
                        <CommunityTest forChildren={0} level="B2" CountQuetions={30} classID={0} id={6}/>
                        <CommunityTest forChildren={1} level="" CountQuetions={10} classID={0} id={7}/>
                    </div>
                </div>
                {/* кнопка Show More */}
                <div className={styles.OurTeacher_container__btn}>
                    <ButtonOne name="Show more" icon={0} className="admin-opacity"/>
                </div>
            </div>
        </section>
    )
}
// export
export default Education_Student;