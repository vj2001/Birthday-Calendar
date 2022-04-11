import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import crudStore from './Store/crudStore';
import './index.css';
import {createRoot} from "react-dom/client"
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById("root");
const root = createRoot(container);
 
root.render(
  <Provider store={crudStore}>
    <App/>
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
