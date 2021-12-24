import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// redux 사용을 위한 create store 와 루트 리듀서 불러오기
import { createStore } from "redux";
import store from "./reducer";
import { Provider } from "react-redux";

//react-redux 라이브러리 안에 들어있는 Provider 를 사용하여 리액트 프로젝트에 스토어 연동
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// 원래 render
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
