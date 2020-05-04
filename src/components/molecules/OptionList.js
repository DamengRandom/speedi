import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useObserver } from "mobx-react";

import { StoreContext } from "../../states/StoreProvider";
import Option from "../atoms/Option";

export default function OptionList() {
  const store = useContext(StoreContext);

  const handleClick = (content, id) => {
    store.removeOption(content);
    let currentOptionNode = document.getElementById(id);
    currentOptionNode.style.display = 'none';
  }

  return useObserver(() => (
    <div id="options-list" className="flex flex-col w-3/4 mx-auto my-2 pb-10">
      {
        store.optionTexts.map((content, index) => (
          <Option 
            id={`${index}-${content}`}
            key={`${index}-${content}`}
            text={content}
            onClick={() => handleClick(content, `${index}-${content}`)}
          />
        ))
      }
    </div>
  ));
};

OptionList.prototypes = {
  store: PropTypes.object
};
