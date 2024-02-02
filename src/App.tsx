import styles from './assets/App.module.scss'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { JwtPayload } from 'jwt-decode'
import { jwtDecode } from 'jwt-decode'
// data
import { InfoUser } from './Data/Layout.data'
// Section Desktop
import Layout from './Components/Layout/Layout'
// TEACHER
import Home_Teacher from './Pages/Teacher/Home_Teacher/Home_Teacher'
import SingIn_Teacher from './Pages/Teacher/Register_Teacher/SingIn/SingIn_Teacher'
import Login_Teacher from './Pages/Teacher/Login_Teacher/LogIn/Login_Teacher'
import InitialTest_Teacher from './Pages/Teacher/Initial_Test/InitialTest_Teacher'
import HomeReg_Teacher from './Pages/Teacher/Home_RegTeacher/Home_regTeacher'
import PersonalArea_Teacher from './Pages/Teacher/PersonalArea_Teacher/PersonalArea_Teacher'
import ClassRoom_Teacher from './Pages/Teacher/Class/ClassRoom_Teacher'
import TestRoom_Teacher from './Pages/Teacher/TestRoom/TestRoom_Teacher'
import Creat_Article from './Pages/CreateArticle/CreateArticle'
//  STUDENT
import Home_Student from './Pages/Student/Home_Student/Home_Student'
import SingIn_Student from './Pages/Student/Register_Student/SingIn/SingIn_Stydent'
import Login_Student from './Pages/Student/Login_Student/LogIn/Login_Student'
import PersonalArea_Student from './Pages/Student/PersonalArea_Student/PersonalArea_Student'
import Education_Student from './Pages/Student/OurTeacher_Student/Education_Student'
import TeacherLK_User from './Pages/Student/TeacherLK/TeacherLK_User'
import ClassRoom_Student from './Pages/Student/Class/ClassRoom_Student'
import TestRoom_Student from './Pages/Student/TestRoom/TestRoom_Student'
// Section Mobile
import Layout_Mobile from './Components/Layout/Mobile_Layout/Layout_mobile'
// TEACHER
//  STUDENT
function App() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	return (
		<div>
			{windowWidth < 768.98 && <MobileContent />}
			{windowWidth >= 769 && <DesktopContent />}
		</div>
	)
}

// for Desktop
function DesktopContent() {
	// jwt toket
	const [userData, setUserData] = useState<JwtPayload | null>(null)
	useEffect(() => {
		const token = localStorage.getItem('user_token')
		if (token) {
			setUserData(jwtDecode<JwtPayload>(token) as JwtPayload)
		}
	}, [])
	// deleting a token after 30 minutes
	setTimeout(() => {
		localStorage.removeItem('user_token')
	}, 10 * 60 * 1000)
	return (
		<div className={styles.app_container}>
			<Routes>
				{/* FIXME: Пофиксить ошибку с полем user почему ts на него реагирует */}
				<Route
					path='/'
					element={
						<Layout
							registered={userData ? true : false}
							user_name={userData !== null ? userData.user.name : ''}
							user_lastname={userData !== null ? userData.user.lastname : ''}
              user_role={userData!=null?userData.user.role:''}
						/>
					}
				>
					{userData ? (
						<Route index element={<Education_Student />} />
					) : (
						<Route index element={<Home_Student />} />
					)}
					<Route path='/singin' element={<SingIn_Student />} />
					<Route path='/login' element={<Login_Student />} />
					<Route
						path={`/${
							userData !== null
								? userData.user.name + userData.user.lastname
								: ''
						}`}
						element={<PersonalArea_Student />}
					/>
					<Route path='/PersonalAreaTeacher/:id' element={<TeacherLK_User />} />
					<Route
						path={`/${InfoUser.name}/${InfoUser.name}/class/:id`}
						element={<ClassRoom_Student />}
					/>
					<Route
						path='class/:idClass/test/:id'
						element={<TestRoom_Student />}
					/>
				</Route>
				<Route
					path='/teacher'
					element={
						<Layout
							registered={userData ? true : false}
							user_name={userData !== null ? userData.user.name : ''}
							user_lastname={userData !== null ? userData.user.lastname : ''}
							user_role={userData!=null?userData.user.role:''}
						/>
					}
				>
					{InfoUser.register == true ? (
						<Route index element={<HomeReg_Teacher />} />
					) : (
						<Route index element={<Home_Teacher />} />
					)}
					<Route path='/teacher/singin' element={<SingIn_Teacher />} />
					<Route path='/teacher/login' element={<Login_Teacher />} />
					<Route
						path='/teacher/Initial_test'
						element={<InitialTest_Teacher />}
					/>
					<Route
						path={`/teacher/personal_area/${
							userData !== null
								? userData.user.name + userData.user.lastname
								: ''
						}`}
						element={<PersonalArea_Teacher />}
					/>
					<Route
						path={`/teacher/personalArea/${InfoUser.name}/${InfoUser.name}/class/:id`}
						element={<ClassRoom_Teacher />}
					/>
					<Route
						path={`/teacher/class/:idClass/test/:id`}
						element={<TestRoom_Teacher />}
					/>
					<Route path='/teacher/create_article' element={<Creat_Article />} />
				</Route>
			</Routes>
		</div>
	)
}
// for Mobile
const MobileContent = () => {
	return (
		<div className={styles.app_mobile_container}>
			<Routes>
				<Route path='/' element={<Layout_Mobile />}></Route>
			</Routes>
		</div>
	)
}

export default App
