// import React, { useContext, useState } from 'react';
import React, { useState } from 'react';
import styled, { css, keyframes } from "styled-components";
import Answer from '../molecules/Answer';

// import { StoreContext } from "../../states/StoreProvider";

const rotate = keyframes`
  0% {
    transform: rotate(90deg);
  }
  10% {
    opacity: 0;
  }
  35% {
    transform: rotate(0deg);
    opacity: 1;
  }
  65% {
    transform: rotate(0deg);
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    transform: rotate(-90deg);
  }
`;

const animation = () => css`
  ${rotate} 3s infinite;
`;

const Choices = styled.div`
  width: 320px;
  height: 160px;
  text-align: center;
  transformOrigin: bottom center;
  animation: ${animation};
  opacity: 0;
`;

const Percentage = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  bottom: 0;
  position: absolute;
`;

export default function RollResult() {
  const [isResultView, setResultView] = useState(false);
  let counter = 0;
  // const store = useContext(StoreContext);

  setInterval(function() {
    if(counter === 2) { 
      counter = 0; 
    }

    changeOptions(counter);
    counter++;
  }, 3000);

  if(!isResultView) {
    loading();
  };

  function changeOptions(counter) {
    let hints = [
      '🎲🎲🎲',
      'Rolling and rolling',
      'Showing soon',
    ];

    // if(store && store.optionTexts) {
    //   hints = store.optionTexts.toJS(store.optionTexts).slice(0, 2);
    //   console.log('yyyy: ', hints);
    // }
  
    if(!isResultView && document.querySelector('.loader .choices')) {
      document.querySelector('.loader .choices').innerHTML = hints[counter];
    }
  }

  function loading(){
    for(let index = 0; index <= 100; index++) {
      setTimeout(
        () => {
          if (!isResultView && document.querySelector('.percentage')) {
            document.querySelector('.percentage').innerHTML = `${index}%`;
          }
          if (index === 100) {
            setResultView(true);
          }
          index++;
        },
        index * 80
      );
    };
  }

  return (
    !isResultView ? (
      <>
        <Choices className="choices">
          <p className="break-all">Start rolling ..</p>
        </Choices>
        <Percentage className="percentage" />
      </>
    ) : (
      <Answer />
    )
  );
}
