// data практикантов для учителя
type nameClass = string[];
type nameTests = string[];
type NameTeachers = string[];

export interface InPracticant {
  id: number;
  name: string;
  logo: string;
  nameClass: nameClass[];
  nameTests: nameTests[];
  DeadLine: string;
  Progress: number;
  NameTeachers: NameTeachers[];
}

export const InfoPracticants: InPracticant[] = [
  {
    id: 0,
    name: "Dima Yakovlev",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg_nrQRIM9IOzKmJb2XxBxMUQIHoh6sIdCA&usqp=CAU",
    nameClass: [["English"], ["name"]],
    nameTests: [["Present Continuous test"]],
    DeadLine: "01.02.2023",
    Progress: 30,
    NameTeachers: [["Dima Yakovlev"], ["Nina Petrovna"]],
  },
  {
    id: 1,
    name: "Dima Yakovlev",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg_nrQRIM9IOzKmJb2XxBxMUQIHoh6sIdCA&usqp=CAU",
    nameClass: [["English"], ["name"]],
    nameTests: [["Pt"]],
    DeadLine: "01.02.2023",
    Progress: 30,
    NameTeachers: [["Dima Yakovlev"], ["Nina Petrovna"]],
  },
  {
    id: 2,
    name: "Dima Yakovlev",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg_nrQRIM9IOzKmJb2XxBxMUQIHoh6sIdCA&usqp=CAU",
    nameClass: [["English"], ["name"]],
    nameTests: [["Present Continuous test"]],
    DeadLine: "01.02.2023",
    Progress: 30,
    NameTeachers: [["Dima Yakovlev"], ["Nina Petrovna"]],
  },
  {
    id: 3,
    name: "Oleg Navin",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg_nrQRIM9IOzKmJb2XxBxMUQIHoh6sIdCA&usqp=CAU",
    nameClass: [["name"]],
    nameTests: [["Present Continuous test"]],
    DeadLine: "01.02.2023",
    Progress: 30,
    NameTeachers: [["Dima Yakovlev"], ["Nina Petrovna"]],
  },
  {
    id: 4,
    name: "Dima Yakovlev",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg_nrQRIM9IOzKmJb2XxBxMUQIHoh6sIdCA&usqp=CAU",
    nameClass: [["English"], ["name"]],
    nameTests: [["Present Continuous test"]],
    DeadLine: "01.02.2023",
    Progress: 30,
    NameTeachers: [["Dima Yakovlev"], ["Nina Petrovna"]],
  },
  {
    id: 5,
    name: "Dima Yakovlev",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg_nrQRIM9IOzKmJb2XxBxMUQIHoh6sIdCA&usqp=CAU",
    nameClass: [["English"], ["name"]],
    nameTests: [["Present Continuous test"]],
    DeadLine: "01.02.2023",
    Progress: 30,
    NameTeachers: [["Dima Yakovlev"], ["Nina Petrovna"]],
  },
  {
    id: 6,
    name: "Dima Yakovlev",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg_nrQRIM9IOzKmJb2XxBxMUQIHoh6sIdCA&usqp=CAU",
    nameClass: [["English"], ["name"]],
    nameTests: [["Present Continuous test"]],
    DeadLine: "01.02.2023",
    Progress: 30,
    NameTeachers: [["Dima Yakovlev"], ["Nina Petrovna"]],
  },
  {
    id: 7,
    name: "Dima Yakovlev",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg_nrQRIM9IOzKmJb2XxBxMUQIHoh6sIdCA&usqp=CAU",
    nameClass: [["English"], ["name"]],
    nameTests: [["present perdect"]],
    DeadLine: "01.02.2023",
    Progress: 30,
    NameTeachers: [["Dima Yakovlev"], ["Nina Petrovna"]],
  },
];
