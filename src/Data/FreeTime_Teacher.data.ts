export interface InFreeData {
  id: number;
  year: string;
  Month: string;
  Week: string;
  Day: string;
  FreeTime: string[];
}

export const InfoFreeTime: InFreeData[] = [
  {
    id: 0,
    year: "2023",
    Month: "November",
    Week: "1-7",
    Day: "2",
    FreeTime: ["12:00", "18:00", "22:00"],
  },
  {
    id: 1,
    year: "2023",
    Month: "November",
    Week: "8-14",
    Day: "13",
    FreeTime: ["12:00", "18:00", "22:00"],
  },
  {
    id: 2,
    year: "2023",
    Month: "November",
    Week: "15-21",
    Day: "17",
    FreeTime: ["12:00", "18:00", "22:00"],
  },
  {
    id: 3,
    year: "2023",
    Month: "November",
    Week: "15-21",
    Day: "18 ",
    FreeTime: ["12:00", "18:00", "22:00"],
  },
];
