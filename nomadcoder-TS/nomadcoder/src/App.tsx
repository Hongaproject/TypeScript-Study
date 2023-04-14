import React, {useState} from 'react';
import TypeOne from './Type/TypeOne';
import TypeTwo from './Type/TypeTwo';
import TypeThree from './Type/TypeThree';
import Func from './Funct/Func';
import Overload from './Funct/Overload';
import Polym from './Funct/Polym';
import Conclus from './Funct/Conclus';
import Classes from './ClassInterface/Classes';


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
    </div>
  );
}

export default App;
