export interface InLesson {
  id: number;
  name: string;
  time: string;
}
export interface InSchedule {
  id: number;
  year: string;
  Month: string;
  Week: string;
  Day: string;
  Inlesson: InLesson[];
}

export const InfoSchedule: InSchedule[] = [
  {
    id: 0,
    year: "2023",
    Month: "November",
    Week: "1-7",
    Day: "2",
    Inlesson: [
      {
        id: 0,
        name: "Math",
        time: "10:00",
      },
      {
        id: 1,
        name: "Russian",
        time: "11:00",
      },
      {
        id: 2,
        name: "Phisika",
        time: "12:00",
      },
    ],
  },
  {
    id: 1,
    year: "2023",
    Month: "November",
    Week: "8-14",
    Day: "13",
    Inlesson: [
      {
        id: 0,
        name: "Math",
        time: "10:00",
      },
      {
        id: 1,
        name: "Russian",
        time: "11:00",
      },
      {
        id: 2,
        name: "Phisika",
        time: "12:00",
      },
    ],
  },
  {
    id: 2,
    year: "2023",
    Month: "November",
    Week: "15-21",
    Day: "17",
    Inlesson: [
      {
        id: 0,
        name: "Geographi",
        time: "10:00",
      },
      {
        id: 1,
        name: "Russian",
        time: "11:00",
      },
      {
        id: 2,
        name: "Phisika",
        time: "12:00",
      },
    ],
  },
  {
    id: 3,
    year: "2023",
    Month: "November",
    Week: "15-21",
    Day: "18 ",
    Inlesson: [
      {
        id: 0,
        name: "Math",
        time: "10:00",
      },
      {
        id: 1,
        name: "Russian",
        time: "11:00",
      },
      {
        id: 2,
        name: "Phisika",
        time: "12:00",
      },
    ],
  },
];
