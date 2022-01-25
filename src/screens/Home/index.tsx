import React, { useEffect, useState } from 'react';
import { query, collection, where, onSnapshot } from 'firebase/firestore';

import { db } from '../../config/firebase';
import { useAuth } from '@hooks/useAuth';
import { Header } from '@components/Header';
import { Start } from '@components/Cards/Start';
import { Historico } from '@components/Cards/Historico';
import { Choice } from '@components/Modal/Choice';
import { ReportQuestionUser } from '@constants/types/question';

import * as S from './styles';

export const Home = () => {
  const { signOutWithGoogle, data } = useAuth();
  const [showChoiceModal, setShowChoiceModal] = useState(false);
  const [history, setHistory] = useState<ReportQuestionUser[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, 'reports'),
      where('user_id', '==', data?.id)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reports: ReportQuestionUser[] = [];
      querySnapshot.forEach((doc) => {
        reports.push(doc.data() as ReportQuestionUser);
      });
      setHistory(reports);
    });
    return () => unsubscribe();
  }, []);

  const handleShowChoiceModal = () => {
    setShowChoiceModal(true);
  };

  const handleCloseChoiceModal = () => {
    setShowChoiceModal(false);
  };

  return (
    <S.Container>
      <S.ContentTop>
        <Header onPress={signOutWithGoogle} />
        <Start onPress={handleShowChoiceModal} />
      </S.ContentTop>
      <S.HistoryLabel>Your history</S.HistoryLabel>
      {history.length === 0 ? (
        <S.Content>
          <S.Title>At the moment no history</S.Title>
        </S.Content>
      ) : (
        <S.HistoryContainer>
          {history.map((item, index) => (
            <Historico item={item} key={index.toString()} />
          ))}
        </S.HistoryContainer>
      )}
      {showChoiceModal && (
        <Choice show={showChoiceModal} close={handleCloseChoiceModal} />
      )}
    </S.Container>
  );
};
