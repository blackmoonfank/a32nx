// Copyright (c) 2021-2023 FlyByWire Simulations
//
// SPDX-License-Identifier: GPL-3.0

import React from 'react';
import { Button } from './Button';

type RecallButtonsProps = {
  recallMessage: () => void;
};

export const RecallButtons: React.FC<RecallButtonsProps> = ({ recallMessage }) => {
  const clicked = (_index: string): void => {
    recallMessage();
  };

  return (
    <>
      <Button messageId={-1} index="R2" content="RECALL" active onClick={clicked} />
    </>
  );
};
