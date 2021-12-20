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
import { category } from "./randomSelect";
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

  const [category_data, setCategory_data] = useState([]);
  let list = [];
  const call = () =>
    fetch(
      "http://127.0.0.1:3001/category_list" &&
        "http://192.168.55.219:3001/category_list",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      }
    ).then(async (result, error) => {
      console.log(result);
      console.log(error);
      let list_data = await result.json();
      console.log(list_data);
      for (let i = 0; i < list_data.length; i++) {
        list[i] = list_data[i].category_name;
      }
      console.log(list);
      setCategory_data(list);
      console.log(category_data);
    });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [modalOn, setModalOn] = useState(false);

  function onCall() {
    call();
    setModalOn(!modalOn);
  }
  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="App">
      <h1>점심뭐먹지?</h1>
      {/* <Dbdb></Dbdb> */}
      <button onClick={onCall}>START</button>
      {modalOn ? <Modal category_data={category_data}></Modal> : ""}
    </div>
  );
}

export default App;
