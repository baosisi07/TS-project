import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './components/funDemo';
// import ClassHello from './components/classDemo';
// import HOCHello from './components/helloHOC';
// import HookHello from './components/helloHook';
import Root from './routes'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './reducers/store'
ReactDOM.render(
    // <Hello name='typescript' />
    // <ClassHello name='typescript'></ClassHello>
    // <HOCHello name='typescript' loading = {false}></HOCHello>
    // <HookHello name='typescript'></HookHello>
  <Provider store = {store}><Root /></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
