import { ReportQuestionUser } from './question';

export type ButtonSocialProps = {
  onPress: () => void;
};

export type AlternativeProp = {
  data: string[];
  correct: string;
  userOption: string;
  setUserOption: (value: string) => void;
};

export type HistoricoProps = {
  item: ReportQuestionUser;
};

export type ItemQuestionProps = {
  title: string;
  option: boolean;
  onPress: () => void;
};

export type StartProps = {
  onPress: () => void;
};

export type ChoiceProps = {
  close: () => void;
  show: boolean;
};
