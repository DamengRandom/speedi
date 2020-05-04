import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { useObserver } from "mobx-react";

import { StoreContext } from "../../states/StoreProvider";
import Button from "../atoms/Button";

export default function DecisionButton() {
  const store = useContext(StoreContext);
  return useObserver(() => (
    (store.optionTexts && store.optionTexts.length > 1) && (
      <Button
        type="button"
        name="throw-dice"
        className="w-full sm:w-auto m-1 bg-white hover:bg-gray-100 text-teal-600 font-semibold py-2 px-4 border border-teal-500 shadow inline-flex items-center"
        onClick={() => {
          let fate = store.optionTexts[Math.floor(Math.random() * store.optionTexts.length)];
          store.setAnswer(fate);
          store.setRollingStatus(true);
        }}
      >
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-18a8 8 0 1 0 0 16 4 4 0 1 1 0-8 4 4 0 1 0 0-8zm0 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
        <span>Makeup mind</span>
      </Button>
    )
  ));
}
