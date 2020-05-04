import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Option({ id, text, onClick }) {
  return (
    <div id={id}
      className="w-full border-double border-4 border-black p-2 m-1 inline-flex items-center z-20 relative"
    >
      <p className="w-11/12 break-all">{text}</p>
      <Button
       type="button"
       name="remove-option"
       onClick={onClick}
       className="absolute right-0"
      >
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/></svg>
      </Button>
    </div>
  );
}

Option.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
