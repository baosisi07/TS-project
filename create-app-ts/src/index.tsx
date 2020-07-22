import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/funDemo';
import ClassHello from './components/classDemo';
import HOCHello from './components/helloHOC';
import HookHello from './components/helloHook';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <Hello name='typescript' /> */}
    {/* <ClassHello name='typescript'></ClassHello> */}
    {/* <HOCHello name='typescript' loading = {false}></HOCHello> */}
    <HookHello name='typescript'></HookHello>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
