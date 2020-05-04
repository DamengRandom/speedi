import React, { useContext } from 'react';
import { useObserver } from "mobx-react";

import { StoreContext } from "../../states/StoreProvider";
import Button from "../atoms/Button";

export default function Answer() {
  const store = useContext(StoreContext);
  return useObserver(() => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl text-center mb-2">Here is the rolling result: </h2>
      <h2 className="text-4xl text-center m-4 sm:mx-auto break-all">{store.answer}</h2>
      <Button type="button"
        className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 inline-flex items-center"
        onClick={() => {
          store.setRollingStatus(false); // back to app
          store.optionTexts = []; // reset options list
        }}
      >
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM7 6l8 4-8 4V6z"/></svg>
        <span>Reset</span>
      </Button>
    </div>
  ));
};
