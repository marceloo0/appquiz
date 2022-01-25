import React, { createContext, ReactNode, useState, useMemo } from 'react';
import { api } from '../services/api';

import { ToastAndroid } from 'react-native';
import { Result } from '@constants/types/question';
import { useAuth } from '@hooks/useAuth';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

type QuestionContextData = {
  correct: number;
  loading: boolean;
  inCorrect: number;
  question: Result[];
  cleanReportQuest: () => void;
  sendReportQuestionsUser: () => void;
  reportQuest: (question: Result) => void;
  getQuestions(quantity: string): Promise<void>;
};

type QuestionProviderProps = {
  children: ReactNode;
};

export const QuestionContext = createContext({} as QuestionContextData);

export const QuestionContextProvider = ({
  children,
}: QuestionProviderProps) => {
  const { data } = useAuth();
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<Result[]>([]);
  const [reportQuestions, setReportQuestions] = useState<Result[]>([]);

  const getQuestions = async (quantity: string) => {
    try {
      setLoading(true);
      const response = await api.get('api.php', {
        params: { amount: quantity },
      });
      setQuestion(response.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const reportQuest = (question: Result) => {
    setReportQuestions((oldState) => [...oldState, question]);
  };

  const cleanReportQuest = () => {
    setReportQuestions([]);
  };

  const sendReportQuestionsUser = () => {
    addDoc(collection(db, 'reports'), {
      user_id: data.id,
      quantity_questions: question.length,
      questions: reportQuestions,
      data: new Date(),
    }).catch(() => {
      ToastAndroid.show('Seu relatório não pode ser salvo.', ToastAndroid.LONG);
    });
  };

  const correct = reportQuestions.reduce((acc, cur) => {
    return Number(cur.number_correct_answer) + acc;
  }, 0);

  const inCorrect = reportQuestions.reduce((acc, cur) => {
    return Number(cur.number_incorrect_answers) + acc;
  }, 0);

  const values = useMemo(
    () => ({
      loading,
      correct,
      inCorrect,
      question,
      reportQuest,
      getQuestions,
      cleanReportQuest,
      sendReportQuestionsUser,
    }),
    [question, correct, inCorrect]
  );

  return (
    <QuestionContext.Provider value={values}>
      {children}
    </QuestionContext.Provider>
  );
};
