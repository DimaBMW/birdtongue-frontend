export interface InfoArticl {
  id: number;
  name: string;
  NameTeacher: string;
  text: string;
  data: string;
}
// Массив данных о пользователе
export const InfoArticl: InfoArticl[] = [
  {
    id: 0,
    name: "Example of an article title",
    NameTeacher: "Dima Yakovlev",
    text: "Lorem ipsum dolor sit amet consectetur. Lectus nisl auctor aenean tempus. Feugiat dui turpis aliquam netus aenean arcu maecenas tellus mattis. Urna pretium egestas ornare condimentum. Cursus pharet",
    data: "October 12, 2023",
  },
  {
    id: 1,
    name: "title",
    NameTeacher: "Dima Yakovlev",
    text: "Lorem ipsum dolor sit amet consectetur. Lectus nisl auctor aenean tempus. Feugiat dui turpis aliquam netus aenean arcu maecenas tellus mattis. Urna pretium egestas ornare condimentum. Cursus pharet",
    data: "October 12, 2023",
  },
];
