import React, {useState} from 'react';
import TypeOne from './Type/TypeOne';
import TypeTwo from './Type/TypeTwo';
import TypeThree from './Type/TypeThree';
import Func from './Funct/Func';
import Overload from './Funct/Overload';
import Polym from './Funct/Polym';
import Conclus from './Funct/Conclus';
import Classes from './ClassInterface/Classes';
import Interface from './ClassInterface/Interface';
import InterfaceT from './ClassInterface/InterfaceT';


function App() {

  return (
    <div>
      <TypeOne />
      <TypeTwo />
      <TypeThree />
      <Func />
      <Overload />
      <Polym />
      <Conclus />
      <Classes />
      <Interface />
      <InterfaceT />
    </div>
  );
}

export default App;
