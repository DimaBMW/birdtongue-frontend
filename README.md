
# ❤️React + TypeScript + Vite❤️
---
# Документация 
## 🚀 Инициализация проекта ##
* 🙍‍♂️ Клиент
    + `cd client` - переходим в папку клиента  
    + `npm install` - инициализация клиента 
* 🌍 Сервер
    + `cd - ` - выходим из папки client 
    + `cd server` - переходим в папку сервера  
    + `npm install` - инициализация сервера
---
## ▶️ Запуск Проекта ##
* Запуски на выделенном сервере React (Клиент)
    + `cd client` - переходим в папку клиента  
    + `npm run build` - построение проекта
    >  `npm run build` пока не использовать !!!!
    + `npm run dev` - запуск клиента на выделенном сервере React
* Запуски на своем сервере (Клиент+Сервер)
    > удобнее использовать 2 открытых терминала
    + `cd server` - переходим в папку сервера  
    + `npm start` - запуск своего сервера на порту 5000
    + `cd client` - переходим в папку клиента
    + `npm run dev` - запуск клиента
    > если все правильно в терминале сервера увидите сообщение "user connect"
---
# Описание папок проекта
       ```
    Client
    ├── Node-models //  сторонние модули или пакеты
    ├── public
    │   ├── Logo // логотип проекта
    │   └── Svg // иконки
    ├── src // основная папка проекта
    │   ├── Assets // ассеты (Иконки, фото, лого, и т.д)
    │   ├── Components // коспоненты
    │   │   ├──Admin // Адинка 
    │   │   ├──API // тест гугл таблицы
    │   │   ├──Layout // Основной Layout
    │   │   │   ├──Chat // Чат
    │   │   │   ├──Mobile_Layout // Layout для мобилок
    │   │   │   ├──Layout.tsx // Layout
    │   │   ├──UI // Переиспользуемые компоненты
    │   │   │   ├── Articles_Card // Компонента Статьи
    │   │   │   ├── ButtonOne // Компонента Кнопок
    │   │   │   ├── ClassRoom // Компонента класса
    │   │   │   ├── CommunityTest // Компонента Тестов
    │   │   │   ├── CustomVideoPlayer // Компонента Видео Плеер
    │   │   │   ├── Image // Компонента Изображений
    │   │   │   ├── Link // Компонента Ссылок
    │   │   │   ├── ListItem // Компонента Список на главной страницы
    │   │   │   ├── Logo // Компонента Логотип
    │   │   │   ├── Pagination // Компонента Пагинация на главной страницы
    │   │   │   ├── PopularCard // Компонента Популярный словрь
    │   │   │   ├── Selector // Компонента Селектор
    │   │   │   ├── SelectorHome // Компонента Селектор на главной страницы
    │   │   │   ├── Teacher_Card // Компонента Карточка препода
    │   │   │   ├── UserVocabular // Компонента Словарь
    │   │   │   └── Vocabulary // Компонента Словари
    │   │   └──              
    │   ├── Data // тест данные
    │   │   ├── Articles.data.ts // Набор дынных Статьи
    │   │   ├── ClassRooms.data.ts // Набор дынных Классной комнаты
    │   │   ├── Films.data.ts // Набор дынных Фильма
    │   │   ├── FreeTime_Teacher.data.ts // Набор дынных Свободный график учителя
    │   │   ├── Layout.data.ts // Набор дынных Пользоватедя
    │   │   ├── PopularCard.data.ts // Набор дынных Карточки
    │   │   ├── Practicants.data.ts // Набор дынных Ученики
    │   │   ├── Quetions.data.ts // Набор дынных Вопросы
    │   │   ├── requestforTeacher.data.ts // Набор дынных Заявки учителю
    │   │   ├── Schedule.data.ts // Набор дынных Расписание
    │   │   ├── Teacher.data.ts // Набор дынных Учитель
    │   │   └── Tests.data.ts // Набор дынных Тесты
    │   ├── Hooks // хуки
    │   │   └──useOutsideClick.tsx // тестовый хукк 
    │   ├── Pages // страницы
    │   │   ├──Movie // страница просмотра фильма (Временно!)
    │   │   ├──Student // Страницы для студента
    │   │   │   ├──Class //Классная комната
    │   │   │   ├──Home_RegStudent //Главная страница для зарегестрированного пользователя
    │   │   │   ├──Home_Student // Главная страница
    │   │   │   ├──Login_Student // Вход
    │   │   │   ├──OurTeacher_Student //Рекомендованные преподователи
    │   │   │   ├──PersonalArea_Student // ЛК
    │   │   │   ├──Register_Student //Регистрация
    │   │   │   ├──TeacherLK // ЛК препода от лица ученика
    │   │   │   └──TestRoom  // Комната с тестом     
    │   │   ├──Teacher // Страницы для преподователя
    │   │   │   ├──Class //Классная комната
    │   │   │   ├──Home_RegTeacher //Главная страница для зарегестрированного пользователя
    │   │   │   ├──Home_Teacher // Главная страница
    │   │   │   ├──Initial_Test //  Комната с вопросами 
    │   │   │   ├──Login_Teacher // Вход
    │   │   │   ├──PersonalArea_Teacher // ЛК
    │   │   │   ├──Register_Teacher //Регистрация
    │   │   │   └──TestRoom //  Комната с тестом 
    │   ├── Types // типы
    │   │   └── typings.d.ts // описание типов для EsLint
    │   ├── App.tsx // файл routing and adaptive
    │   └── main.tsx // файл который рендрится в браузере
    └── 
    ```
##  Описание Данных
* [Articles](#articles) > Набор дынных Статьи
* [ClassRooms](#classRooms) > Набор дынных Классной комнаты
* [Films](#films) > Набор дынных Фильма
* [FreeTime_Teacher](#freeTimeteacher) > Набор дынных Свободный график учителя
* [Layout](#layout) > Набор дынных Пользоватедя
* [PopularCard](#popularcard) > Набор дынных Карточки
* [Practicants](#practicants) > Набор дынных Ученики
* [Quetions](#quetions) > Набор дынных Вопросы
* [requestforTeacher](#requestforteacher) > Набор дынных Заявки учителю
* [Schedule](#schedule) > Набор дынных Расписание
* [Teacher](#teacher) > Набор дынных Учитель
* [Tests](#tests)    > Набор дынных Тесты

<a name="articles"><h2>articles</h2></a>
 ```
    InfoArticl
    ├── id:number // id
    ├── name:string // Название Статьи
    ├── NameTeacher:string // Имя учителя который написал статью
    ├── text:string // текст статьи
    └── data:string // дата написания статьи
```
<a name="classRooms"><h2>classRooms</h2></a>
 ```
    IClassRoom
    ├── id:number // id
    ├── name:string // Название Класса
    ├── StudentName:stydents[] // Студенты в этом классе
    └── TeacherName:string // Преподователь
```
<a name="films"><h2>films</h2></a>
 ```
    MyVocabulary // словарь
    ├──Words:words[] // слова
    ├──Repost:number // репосты
    └──Views:number // просмотры

    TypeInfoFilm // карточки фильмов на главной
    ├── id:number; // id
    ├── name: string; // имя фильма
    ├── logo: string; // logo
    ├── level:string; // уровень языка
    ├── description:string; // описание
    ├── data:string; // дата
    ├── teg:string; // тег
    ├── genre:string; // жанр
    └── MyVocabulary: MyVocabulary; // словарь пользователя
```
<a name="freeTimeteacher"><h2>freeTimeteacher</h2></a>
 ```
    InFreeData // свободное время (Надо объеденть с рассписанием) 
    ├── id:number; //id
    ├── year:string; // год
    ├── Month:string; // месяц
    ├── Week:string; // неделя
    ├── Day:string;  // день  
    └── FreeTime:string[]; // время
```
<a name="layout"><h2>layout</h2></a>
 ```
    TypeInfoUser // пользователь
    ├──id:number; // id
    ├──register: boolean; // регистрация
    ├──name: string; // имя
    ├──logo: string; // аватарка
    ├──subscription:string; // подписка
    ├──dataReg:string; // дата регистрации
    ├──FullName:string; // фио
    ├──Email:string; // Email
    ├──PhoneNumber:number; // номер телефона
    ├──Password:string; // пароль
    ├──confirmPassword:string; // пароль
    └──access:string; // статус
```
<a name="popularcard"><h2>popularcard</h2></a>
 ```
   TypeInfoCard // карточка популярные словари
    ├──id:number; // id 
    ├──name:string; // имя
    ├──nameStudent:string; // имя студента
    ├──Words:number; // колличество слов
    ├──Language:string; // язык
    ├──Level:string; // уровень
    ├──Repost:number; // колличество репостов
    └──Views:number; // колличество просмотров
```
<a name="quetions"><h2>quetions</h2></a>
 ```
    InQuetions // вопрос
    ├──id:number; // id
    ├──name:string; // название
    ├──TestName:string; // название теста
    ├──type:string; // тип вопроса
    ├──ChoosingAnswer:string[]; // варианты выбора
    └──CorrectAnswer:string; // правильный ответ
```
<a name="practicants"><h2>practicants</h2></a>
```
    InPracticant // о практикантах
    ├──id:number; // id
    ├──name:string; // имя
    ├──logo:string; // аватарка
    ├──nameClass:nameClass[]; // классы в которых есть практикант
    ├──nameTests:nameTests[]; // тесты в которых есть практикант
    ├──DeadLine:string; // деадлайн
    ├──Progress:number; // прогресс прохождения тестов
    └──NameTeachers:NameTeachers[]; // имена учительй у которых учиться практикант
```

<a name="requestforteacher"><h2>requestforteacher</h2></a>
 ```
    InRequest // заявки учителю
    ├──id:number; //id 
    ├──nameStudents:string; // имя студента
    ├──nameTeacher:string; // имя учителя
    ├──status:string; // статус заявки
    └──logo:string; // logog студента
```
<a name="schedule"><h2>schedule</h2></a>
 ```
   InLesson // урок и время 
   ├──id: number; //id 
   ├──name: string; // название предмета
   └──time: string; // время провидения занятия

    InSchedule // расписание 
    ├──id:number; // id
    ├──year:string; // год
    ├──Month:string; // месяц
    ├──Week:string; // неделя
    ├──Day:string; // день
    └──Inlesson: InLesson[];  // предметы
```
<a name="teacher"><h2>teacher</h2></a>
 ```
    ITeacher // учителя рекомендации для ученика
    ├──id:number // id
    ├──name:string // имя препода
    ├──logo:string // аватарка
    ├──languages:string[]; // языки
    └──testResult:number; // тесты
```
<a name="tests"><h2>tests</h2></a>
 ```
   ITest{
   ├──id:number //id
   ├──name:string; // имя теста
   ├──forChildren:number; // для детей
   ├──level:string; // уровень
   ├──CountQuetions:number; // колличество вопросов
   ├──nameStydents:nameStydents[]; // имя студентов 
   ├──nameClass:nameClass[]; // имя классов
   ├──staus:string; // статус
   ├──deadline:string; // деадлайн
   └──testСreator:string; // Создатель теста
```
