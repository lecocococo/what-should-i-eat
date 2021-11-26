import logo from "./logo.svg";
import "./App.css";
import "./mapContainer";
import "./randomSelect";
import React, { Component } from "react";
import MapContainer from "./mapContainer";
import { category } from "./randomSelect";

// class Map extends Component{
//   render(){
//     return(
//       <div></div>
//     );
//   }
// }

class Food extends Component {
  render() {
    // 랜덤하게 하는것을 메서드화
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }

    // 랜덤을 변수로
    // let select = category[Math.floor(Math.random() * category.length)];
    return <p>{category[getRandomInt(0, category.length)]}</p>;
  }
}
function App() {
  return (
    <div className="App">
      <h1>점심뭐먹지?</h1>
      <Food></Food>
      {/* <MapContainer></MapContainer> */}
    </div>
  );
}

export default App;
