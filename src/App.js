import logo from "./logo.svg";
import "./App.css";
import "./mapContainer";
import React, { Component } from "react";
import MapContainer from "./mapContainer";

// class Map extends Component{
//   render(){
//     return(
//       <div></div>
//     );
//   }
// }
function App() {
  return (
    <div className="App">
      <h1>점심뭐먹지?</h1>
      <MapContainer></MapContainer>
    </div>
  );
}

export default App;
