import React from 'react';
import './App.css';
import Todo from './sptodo/Todo';
import TodoErr from './sptodo/TodoErr';
import TodoR from './sptodo/TodoR';

// interface itf1 { // 처음 생성
//   a: number;
//   b: string;
// }

// interface itf2 extends itf1 { // interface 확장 선언
//   c: string;
// }

// const face: itf2 = { 
//   a: 1,
//   b: 'b',
//   c: 'c'
// }

// interface itf {
//   a: number;
// }
// interface itf { // interface 중복선언 가능 
//   b: number;
// }
// const inter: itf = {
//   a: 1,
//   b: 2
// }


// type tp1 = {
//   a: number;
//   b: string;
// }

// type tp2 = tp1 & { // type 확장 선언 
//   c: string;
// }

// const tpc: tp2 = {
//   a: 1,
//   b: 'b',
//   c: 'c'
// }

// type tp = { // type 중복 선언 X 
//   a: number;
// }

// type tp = {
//   b: number;
// }



function App() {

  return (
    <div>
      {/* <Todo /> */}
      <TodoErr />
      <TodoR />
    </div>
  );
}

export default App;
