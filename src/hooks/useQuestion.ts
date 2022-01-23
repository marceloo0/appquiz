import { useContext } from 'react';
import { QuestionContext } from '../context/QuestionContext';

export function useQuestion() {
  const value = useContext(QuestionContext);

  return value;
}
