import React from 'react';

import styled from "styled-components";
import Rolling from '../molecules/Rolling';

const Loader = styled.div`
  width: 320px;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;

export default function RollResult() {
  return (
    <Loader className="loader">
      <Rolling />
    </Loader>
  );
}
