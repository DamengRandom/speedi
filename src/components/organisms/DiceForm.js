import React, { useState, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useObserver } from "mobx-react";

import { StoreContext } from "../../states/StoreProvider";
import PropTypes from 'prop-types';

import Button from "../atoms/Button";
import OptionList from "../molecules/OptionList";
import DecisionButton from "../molecules/DecisionButton";

const diceFormValidator = Yup.object().shape({
  optionText: Yup.string()
    .max(100, 'Please enter maximum 50 characters ..')
    .required('Please enter an option ..')
});

const inputResetObject = {
  values: {
    optionText: ''
  }
};

export default function DiceForm() {
  const store = useContext(StoreContext);
  const [choice, setChoice] = useState('');
  // const [optionsList, setOptionsList] = useState([]);

  const onSubmit = (store, values, resetForm) => {
    try {
      store.addOption(values.optionText);
      setChoice(values.optionText);
      // setOptionsList(store.optionTexts.toJS(store.optionTexts));
      resetForm(inputResetObject);
      console.log('List data: ', store.optionTexts.toJS(store.optionTexts));
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  function onKeyDown(keyEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  };

  return (
    useObserver(() => (
      <>
        <Formik
          initialValues={{
            optionText: choice
          }}
          validationSchema={diceFormValidator}
          onSubmit={(values, {resetForm}) => onSubmit(store, values, resetForm)}
        >
          {({ resetForm }) => (
            <Form className="flex flex-col w-3/4 mx-auto my-2" onKeyDown={onKeyDown}>
              <Field
                name="optionText"
                className="items-center border-b border-b-2 border-teal-500 py-2 appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Please enter option here"
              />
              <ErrorMessage name="optionText" />
              <div className="md:flex md:justify-end my-2">
                <Button
                  type="submit"
                  name="add-option"
                  className="w-full sm:w-auto m-1 bg-white hover:bg-gray-100 text-teal-600 font-semibold py-2 px-4 border border-teal-500 shadow inline-flex items-center"
                >
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/></svg>
                  <span>Add Option</span>
                </Button>
                <Button
                  type="button"
                  name="cancel-option"
                  className="w-full sm:w-auto m-1 bg-white hover:bg-gray-100 text-teal-600 font-semibold py-2 px-4 border border-teal-500 shadow inline-flex items-center"
                  onClick={() => resetForm(inputResetObject)}
                >
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"/></svg>
                  <span>Cancel</span>
                </Button>
                <DecisionButton />
              </div>
            </Form>
          )}
        </Formik>
        {/* Show the choices list */}
        <OptionList />
      </>
    ))
  );
}

DiceForm.propTypes = {
  optionText: PropTypes.string,
};
