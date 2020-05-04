import React, { useContext } from 'react';
import { useObserver } from "mobx-react";
import styled from "styled-components";

import { StoreContext } from "../../states/StoreProvider";
import DiceForm from "../organisms/DiceForm";
import RollResult from "../organisms/RollResult";
import Navbar from '../atoms/Navbar';

const Heading = styled.span`
  font-family: 'Courgette', cursive;
`;

export default function Speedi() {
  const store = useContext(StoreContext);
  return useObserver(() => (
    <div className="pb-12">
      <Navbar className="flex items-center justify-between flex-wrap bg-teal-500 p-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Heading className="font-semibold text-xl tracking-tight">
            Aloha!! Welcome to Speedi
          </Heading>
        </div>
        <div>
          <a href="https://github.com/DamengRandom/speedi"
            className="inline-block text-2xl leading-none text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white rounded-full lg:mt-0 p-1">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </Navbar>
      {
        store.isRolling ? (
          <RollResult />
        ) : (
          <div className="flex flex-col sm:w-3/4 mx-auto my-12">
            <DiceForm />
          </div>
        )
      }
    </div>
  ));
};
