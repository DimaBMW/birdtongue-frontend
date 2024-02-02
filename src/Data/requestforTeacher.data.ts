export interface InRequest {
  id: number;
  nameStudents: string;
  nameTeacher: string;
  status: string;
  logo: string;
}

export const InfoRequestTeachers: InRequest[] = [
  {
    id: 0,
    nameStudents: "Alexsand Stepanuc",
    nameTeacher: "Dima Yakovlev",
    status: "expectation",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/800px-BMW_logo_%28gray%29.svg.png",
  },
  {
    id: 1,
    nameStudents: "Nina Pavlova",
    nameTeacher: "Dima Yakovlev",
    status: "expectation",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/800px-BMW_logo_%28gray%29.svg.png",
  },
  {
    id: 2,
    nameStudents: "Alexsand Stepanuc",
    nameTeacher: "Oleg Pavlov",
    status: "expectation",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/800px-BMW_logo_%28gray%29.svg.png",
  },
];
