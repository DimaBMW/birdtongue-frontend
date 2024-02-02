// data тестовые вопросы для учеников
export interface InQuetions {
  id: number;
  name: string;
  TestName: string;
  type: string;
  ChoosingAnswer: string[];
  CorrectAnswer: string;
}

export const InfoQuetions: InQuetions[] = [
  {
    id: 0,
    name: "Where is Ann? She .... in the kitchen.",
    TestName: "Present Continuous test",
    type: "Input field",
    ChoosingAnswer: ["am cooking", "is cooking", "cooks"],
    CorrectAnswer: "is cooking",
  },
  {
    id: 1,
    name: "Where is Ann? She .... in the kitchen.",
    TestName: "Present Continuous test",
    type: "Movie",
    ChoosingAnswer: ["king", "cook", "coos"],
    CorrectAnswer: "cook",
  },
  {
    id: 2,
    name: "Where is Ann? She .... in the kitchen.",
    TestName: "Present Continuous test",
    type: "Input field",
    ChoosingAnswer: ["am cooking", "is cooking", "cooks"],
    CorrectAnswer: "is cooking",
  },
  {
    id: 3,
    name: "Where is Ann? She .... in the kitchen.",
    TestName: "Present Continuous test",
    type: "Input field",
    ChoosingAnswer: ["am cooking", "is cooking", "cooks"],
    CorrectAnswer: "is cooking",
  },
  {
    id: 4,
    name: "Where is Ann? She .... in the kitchen.",
    TestName: "Present Continuous test",
    type: "Choosing an answer",
    ChoosingAnswer: ["am cooking", "is cooking", "cooks"],
    CorrectAnswer: "is cooking",
  },
  {
    id: 5,
    name: "Where is Ann? She .... in the kitchen.",
    TestName: "Present Continuous test",
    type: "Choosing an answer",
    ChoosingAnswer: ["king", "cook", "coos"],
    CorrectAnswer: "cook",
  },
];
