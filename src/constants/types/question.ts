export type Result = {
  id?: number;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  totalQuestion?: number;
  selected?: string;
  number_correct_answer?: number;
  number_incorrect_answers?: number;
};

export type DataTime = {
  nanoseconds: number;
  seconds: number;
};

export type ReportQuestionUser = {
  id_user: string;
  quantity_questions: number;
  questions: Result[];
  data: DataTime;
  id: string;
};

export type ReportProps = {
  quantity_questions: number;
  questions: Result[];
  data: DataTime;
};

export type RootObject = {
  response_code: number;
  results: Result[];
};
