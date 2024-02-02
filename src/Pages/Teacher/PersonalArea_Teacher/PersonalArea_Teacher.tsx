// import libraries
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { JwtPayload } from 'jwt-decode'
import { jwtDecode } from 'jwt-decode'
// import styles
import styles from './PersonalArea_Teacher.module.scss'
// user data
// TODO: Убрать когда появятся ендпойнты
import { InfoUser } from '../../../Data/Layout.data'
// import components
import Image from '../../../Components/UI/Image/Image'
import TeacherClassRoom from './TeacherComponents/TeacherClassRoom/TeacherClassRoom'
import Materials from './TeacherComponents/Materials/Materials'
import Students from './TeacherComponents/Students/Students'
import Schedule from './TeacherComponents/Schedule/Schedule'
import Applications from './TeacherComponents/Applications/Applications'
// import icons
import MoreVertical from '../../../assets/Icon/LK/more-vertical.svg'

const PersonalArea_Teacher: React.FC = () => {
    // check for jwt token
    const navigate = useNavigate();
    const [user_data,setUserData]=useState<JwtPayload | null>(null)
    useEffect(()=>{
        const user_token=localStorage.getItem('user_token');
        if(!user_token){
            navigate('/');
            location.reload();
        }else{
            setUserData(jwtDecode<JwtPayload>(user_token) as JwtPayload)
        }
    },[navigate])

	enum personal_area__teacherMenu {
		Classrooms = 'Classrooms',
		Materials = 'Materials',
		Students = 'Students',
		Applications = 'Applications',
		Schedule = 'Schedule',
	}
	const [isTeacherBtn, setIsTeacherBtn] = useState(
		personal_area__teacherMenu.Classrooms
	)
	const handle_menu = (item_menu: personal_area__teacherMenu) => {
		setIsTeacherBtn(item_menu)
	}
	return (
		<section className={styles.PersonalArea_container}>
			<div className={styles.PersonalArea_container_title}>
				<h1>My profile</h1>
			</div>
			<div className={styles.PersonalArea_container_main}>
				<div className={styles.UserCard}>
					<div className={styles.container_teacher}>
						<div className={styles.UserCard_prewie}>
							<Image
								src={InfoUser.logo}
								alt='аватарка'
								className='usercard__img'
							/>
							<div className={styles.UserCard_prewie_title}>
								<h1>{user_data!=null? user_data.user.name:''} {user_data!=null? user_data.user.lastname:''}</h1>
								<h2>{user_data!=null?user_data.user.role:''}</h2>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.UserInfo}>
					<div className={styles.container_teacher}>
						<div className={styles.UserInfo_title}>
							<div className={styles.UserInfo_title__btnbox}>
								{Object.values(personal_area__teacherMenu).map(item_menu => {
									return <button 
                                    key={item_menu}
                                    className={`${styles.UserInfo_title__btn} ${
										isTeacherBtn == item_menu
											? styles.UserInfo_title__btnActive
											: ''
									}`}
                                    onClick={()=>handle_menu(item_menu)}
                                    >
                                        {item_menu}
                                    </button>
								})}
							</div>
							<button className={styles.UserInfo_title__btn}>
								<Image
									src={MoreVertical}
									alt='аватарка'
									className='button-admin__icon'
								/>
							</button>
						</div>
						<div className={styles.UserInfo_from}>
							{(() => {
								switch (isTeacherBtn) {
									case 'Classrooms':
										return <TeacherClassRoom TeacherName={InfoUser.name} />
									case 'Materials':
										return <Materials NameTeacher={InfoUser.name} />
									case 'Students':
										return <Students NameTeacher={InfoUser.name} />
									case 'Applications':
										return <Applications NameTeacher={InfoUser.name} />
									case 'Schedule':
										return <Schedule />
									default:
										return null
								}
							})()}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PersonalArea_Teacher
