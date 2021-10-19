import { LachFooter } from 'client/components/footer/footer';
import { ReturnButton } from 'client/components/return-button/return-button';
import { SessionDetails } from 'client/components/session-details/session-details';
import React from 'react';
import { Board } from '../components/board/board';

export const GamePage: React.FC = () => {
  return (
    <>
      <SessionDetails />
      <Board />
      <ReturnButton />
      <LachFooter />
    </>
  );
};