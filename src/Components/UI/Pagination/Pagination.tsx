import React,{useEffect,useState,useContext} from "react";
import {InfoFilm} from "../../../Data/Films.data";
import { InfoUser } from "../../../Data/Layout.data";
import styles from "./Pagination.module.scss";
import Image from "../Image/Image";
import Icon from "../../../assets/Icon/Home/search.svg";
import { HomeContext } from "../../../Pages/Teacher/Home_RegTeacher/Home_regTeacher";
import { flag } from "../ListItem/ListItem";
import { Link } from "react-router-dom";
import icon from "../../../assets/Icon/svg/plus(black).svg";
import AddMovieForm from "../../Admin/UI/Add_Movie/Add_Movie_Form";

interface IDFilm{
    id:number;
    name:string;
    logo:string;
    level:string;
    data:string;
    description:string;
    teg:string;
    genre:string;
}

const pageSize=20;
const maxDisplayPages=5;


const Pagination:React.FC=()=>{
    const [currentPage,setCurentPage]=useState(1);
    const [totalPages,setTotalpages]=useState(0);
    const [searchFilm,setSearchFilm] = useState('');
    const [filteredData,setFilteredData] = useState<IDFilm[]>([]);
    const {searchTerm}=useContext(HomeContext);
    

    useEffect(()=>{
        const filtered=InfoFilm.filter((item:IDFilm)=>item.name.toLowerCase().includes(searchFilm.toLowerCase()));
        // const filteredlist=InfoFilm.filter((item:IDFilm)=>(item.level&&item.teg&&item.genre).toLowerCase().includes(searchTerm.toLowerCase()));
        const filteredlist = InfoFilm.filter((item: IDFilm) => {
            if (
              (item.level && item.level.toLowerCase().includes(searchTerm.toLowerCase())) ||
              (item.teg && item.teg.toLowerCase().includes(searchTerm.toLowerCase())) ||
              (item.genre && item.genre.toLowerCase().includes(searchTerm.toLowerCase()))
            ) {
              return true;
            }
            return false;
          });
        if(flag)
                setFilteredData(filteredlist)
            else
                setFilteredData(filtered)

        setTotalpages(Math.ceil(filteredlist.length/pageSize)||Math.ceil(filtered.length/pageSize));
    },[searchTerm,searchFilm]);



    const handleSearch=(event:React.ChangeEvent<HTMLInputElement>)=>{setSearchFilm(event.target.value);};


    const handleChangePage=(page:number)=>{
        setCurentPage(page);
    };

    const handlePreviousPage=()=>{
        setCurentPage((prevPage)=>prevPage-1);
    };

    const handleNextPage=()=>{
        setCurentPage((prevPage)=>prevPage+1);
    }; 

    const startIndex=(currentPage-1)*pageSize;
    const endIndex = currentPage*pageSize;

    const currentData=filteredData.slice(startIndex,endIndex);
    
    // const currentDataList=filteredDataList.slice(startIndex,endIndex);



    const renderPageNumbers = () =>{
        const pageNumber=Array.from({
            length:totalPages},(_,index)=>index+1);

            if (pageNumber.length<=maxDisplayPages){
                return pageNumber.map((page)=>(
                    <button key={page} onClick={()=>handleChangePage(page)} disabled={currentPage===page} className={styles.page_btn}>
                        {page}
                    </button>
                ));
            }

            const midPoint=Math.ceil(maxDisplayPages/2);
            const lowerBound=Math.max(currentPage-midPoint,1);
            const upperBound = Math.min(currentPage+midPoint-1,totalPages);

            const pageButtons=[];

            if(lowerBound>1){
                pageButtons.push(
                    <button key={1} onClick={()=>handleChangePage(1)} className={styles.page_btn}>
                        1
                    </button>
                );
                if(lowerBound-1>1){
                    pageButtons.push(
                        <button key="ellipsis1" disabled className={styles.page_btn}>
                            ...
                        </button>
                    );
                }
                
            }

            for(let i=lowerBound;i<=upperBound;i++){
                pageButtons.push(
                    <button key={i} onClick={()=>handleChangePage(i)} disabled={currentPage===i} className={styles.page_btn}>
                        {i}
                    </button>
                );
            }

            if(upperBound<totalPages){
                if(totalPages-upperBound>1){
                    pageButtons.push(
                        <button key="ellipsis2" disabled className={styles.page_btn}>
                            ...
                        </button>
                    );
                }
                pageButtons.push(
                    <button key={totalPages} onClick={()=>handleChangePage(totalPages)} className={styles.page_btn}>
                        {totalPages}
                    </button>
                );
            }
            return pageButtons;
    };

    // admin
    const [isAdminForm,setIsAdminForm]=useState(true);

    const handleActiveAdminForm=()=>{
        setIsAdminForm(!isAdminForm);
    }

    return(
        <div className={styles.pagination_container}>
            <div className={styles.pagination_container_input}>
                <div className={styles.pagination_container_search}>
                    <input type="text" value={searchFilm} onChange={handleSearch} placeholder="Search..."/>
                    <Image src={Icon} alt="поиск" className="search__img"/>
                </div>
            </div>
            {
                InfoUser.access=='admin' &&(
                    <div className={styles.btn_admin}>
                    <button className={styles.btn_admin__addMovie} onClick={handleActiveAdminForm}>
                        <Image src={icon} alt="Add a movie" className="button-admin__icon"/>
                        Add a movie
                    </button>
                 </div>       
                )
            }
            <div className={styles.pagination_container_fimls}>
                {currentData.map((item:IDFilm)=>(
                    <>
                    {location.pathname=="/teacher"?
                        <>
                            <Link to={`/teacher/movies/${item.id}`} className={styles.film_name}>
                                <div key={item.id} className={styles.pagination_container_fiml}>
                                    <Image src={item.logo} alt="обложка фильма" className="filmcard__img"/>
                                    {item.name}
                                    <div className={styles.pagination_container_hoverbox}>
                                        <h1>{item.level}</h1>
                                        <h2>{item.data}</h2>
                                        <h3>{item.description}</h3>
                                    </div>
                                </div>
                            </Link>  
                        </>
                        :
                        <>
                            <Link to={`/movies/${item.id}`} className={styles.film_name}>
                                <div key={item.id} className={styles.pagination_container_fiml}>
                                    <Image src={item.logo} alt="обложка фильма" className="filmcard__img"/>
                                    {item.name}
                                    <div className={styles.pagination_container_hoverbox}>
                                        <h1>{item.level}</h1>
                                        <h2>{item.data}</h2>
                                        <h3>{item.description}</h3>
                                    </div>
                                </div>
                            </Link>  
                        </>
                    }
                    </>
                ))}
            </div>
            <div className={styles.pagination_container_page}>
                <button onClick={handlePreviousPage} disabled={currentPage===1} className={styles.page_btn}>
                    <h1>{'<'}-</h1>
                </button>
                {renderPageNumbers()}
                <button onClick={handleNextPage} disabled={currentPage==totalPages} className={styles.page_btn}>
                    <h1>-{'>'}</h1>
                </button>
            </div>
            <AddMovieForm isActoveForm={isAdminForm}/>
        </div>
    );
}

export default Pagination;