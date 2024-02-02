// интерфейс классных комнат
type stydents = string[];

export interface IClassRoom {
  id: number;
  name: string;
  StudentName: stydents[];
  TeacherName: string;
}

export const InfoClassRoom: IClassRoom[] = [
  {
    id: 0,
    name: "name",
    StudentName: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    TeacherName: "Dima Yakovlev",
  },
  {
    id: 1,
    name: "It",
    StudentName: [["Anna Yakovleva"], ["Oleg-Mingalev"]],
    TeacherName: "Dima Yakovlev",
  },
  {
    id: 2,
    name: "English",
    StudentName: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    TeacherName: "Dima Yakovlev",
  },
  {
    id: 3,
    name: "Geographi",
    StudentName: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    TeacherName: "Nina Petrovna",
  },
  {
    id: 4,
    name: "History",
    StudentName: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    TeacherName: "Nina Petrovna",
  },
  {
    id: 5,
    name: "Metacha",
    StudentName: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    TeacherName: "Nina Petrovna",
  },
  {
    id: 6,
    name: "Russian",
    StudentName: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    TeacherName: "Nina Petrovna",
  },
  {
    id: 7,
    name: "Phisika",
    StudentName: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    TeacherName: "Nina Petrovna",
  },
  {
    id: 8,
    name: "Explorers",
    StudentName: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    TeacherName: "Nina Petrovna",
  },
  {
    id: 9,
    name: "Innovators",
    StudentName: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    TeacherName: "Nina Petrovna",
  },
  {
    id: 10,
    name: "Dreamchasers",
    StudentName: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    TeacherName: "Nina Petrovna",
  },
  {
    id: 11,
    name: "Dreamchasers",
    StudentName: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    TeacherName: "Nina Petrovna",
  },
  {
    id: 12,
    name: "Visionaries",
    StudentName: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    TeacherName: "Nina Petrovna",
  },
];
