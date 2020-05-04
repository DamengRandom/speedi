import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react';
import PropTypes from "prop-types";

export const StoreContext = createContext(null);

export default function StoreProvider({ children }) {
  const currentStore = useLocalStore(() => ({
    isRolling: false,
    isListEmpty: true,
    answer: '',
    optionTexts: [],
    addOption: optionText => {
      if(!currentStore.optionTexts.includes(optionText)) {
        currentStore.optionTexts.push(optionText);
      }
    },
    removeOption: optionText => {
      currentStore.optionTexts = currentStore.optionTexts.filter(data => data !== optionText);
    },
    setAnswer: fate => {
      currentStore.answer = fate;
    },
    setRollingStatus: status => {
      currentStore.isRolling = status;
    }
  }));

  return (
    <StoreContext.Provider value={currentStore}>
      {children}
    </StoreContext.Provider>
  )
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired
};
