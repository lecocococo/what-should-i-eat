import logo from "./logo.svg";
import "./App.css";
import "./mapContainer";
import "./randomSelect";
import React, { useState, useEffect, Component } from "react";
import MapContainer from "./mapContainer";
// import { category } from "./randomSelect";
import LoadingSpinner from "./loadingSpinner";
import "./dbdb";
import Dbdb from "./dbdb";
import Modal from "./modal";
import modalCss from "./modal.module.css";
// import LifeCount from "./life_count";

// class Food extends Component {
//   render() {
//     // 랜덤하게 하는것을 메서드화
//     function getRandomInt(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
//     }

//     // 랜덤을 변수로
//     // let select = category[Math.floor(Math.random() * category.length)];
//     return <p>{category[getRandomInt(0, category.length)]}</p>;
//   }
// }

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  // const [loading, setLoading] = useState(true);

  const [modalOn, setModalOn] = useState(false);
  function onCall() {
    setModalOn(!modalOn);
  }
  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="App">
      <h1>점심뭐먹지?</h1>
      {/* <h2> {username ? `hello ${username}` : "hello world"}</h2> */}
      {/* <Food></Food> */}
      <Dbdb></Dbdb>
      <button onClick={onCall}>START</button>
      {modalOn ? <Modal message="Message"></Modal> : ""}
      {/* <MapContainer></MapContainer> */}
    </div>
  );
}

export default App;
