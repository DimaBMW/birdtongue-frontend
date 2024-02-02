// интерфейм тестов для учеников
type nameStydents = string[];
type nameClass = string[];

export interface ITest {
  id: number;
  name: string;
  forChildren: number;
  level: string;
  CountQuetions: number;
  nameStydents: nameStydents[];
  nameClass: nameClass[];
  staus: string;
  deadline: string;
  testСreator: string;
}

export const InfoTests: ITest[] = [
  {
    id: 0,
    name: "Ptwawd",
    forChildren: 0,
    level: "B2",
    CountQuetions: 15,
    nameStydents: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    nameClass: [["English"], ["It"]],
    staus: "complete",
    deadline: "01.12.2023",
    testСreator: "Dima Yakovlev",
  },
  {
    id: 1,
    name: "Present Continuous test",
    forChildren: 1,
    level: "B2",
    CountQuetions: 15,
    nameStydents: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    nameClass: [["Geographi"], ["English"], ["name"]],
    staus: "complete",
    deadline: "01.12.2023",
    testСreator: "Oleg Yakovlev",
  },
  {
    id: 2,
    name: "present perdect",
    forChildren: 0,
    level: "B2",
    CountQuetions: 15,
    nameStydents: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    nameClass: [["English"], ["It"]],
    staus: "fale",
    deadline: "01.12.2023",
    testСreator: "Nuna Petrovna",
  },
  {
    id: 3,
    name: "present perdect",
    forChildren: 0,
    level: "B2",
    CountQuetions: 15,
    nameStydents: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    nameClass: [["English"], ["It"]],
    staus: "fale",
    deadline: "01.12.2023",
    testСreator: "Dima Yakovlev",
  },
  {
    id: 4,
    name: "present perdect",
    forChildren: 1,
    level: "B2",
    CountQuetions: 15,
    nameStydents: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    nameClass: [["English"], ["It"]],
    staus: "fale",
    deadline: "01.12.2023",
    testСreator: "Dima Yakovlev",
  },
  {
    id: 5,
    name: "present perdect",
    forChildren: 0,
    level: "B2",
    CountQuetions: 15,
    nameStydents: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    nameClass: [["English"], ["It"]],
    staus: "fale",
    deadline: "01.12.2023",
    testСreator: "Dima Yakovlev",
  },
  {
    id: 6,
    name: "present perdect",
    forChildren: 0,
    level: "B2",
    CountQuetions: 15,
    nameStydents: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    nameClass: [["English"], ["It"]],
    staus: "fale",
    deadline: "01.12.2023",
    testСreator: "Nastya Linnik",
  },
  {
    id: 7,
    name: "present perdect",
    forChildren: 1,
    level: "B2",
    CountQuetions: 15,
    nameStydents: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    nameClass: [["English"], ["It"]],
    staus: "fale",
    deadline: "01.12.2023",
    testСreator: "Dima Yakovlev",
  },
  {
    id: 8,
    name: "Dima",
    forChildren: 0,
    level: "B8",
    CountQuetions: 15,
    nameStydents: [["Dima Yakovlev"], ["Oleg-Mingalev"]],
    nameClass: [["English"]],
    staus: "complete",
    deadline: "01.12.2023",
    testСreator: "Dima Yakovlev",
  },
];
