import logo from "./logo.svg";
import "./App.css";
import "./mapContainer";
import "./randomSelect";
import React, { Component } from "react";
import MapContainer from "./mapContainer";
import { category } from "./randomSelect";
import "./dbdb";
import Dbdb from "./dbdb";

// class Map extends Component{
//   render(){
//     return(
//       <div></div>
//     );
//   }
// }

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }

  // submitId = () => {
  //   const post = {
  //     test: this.state.testbody,
  //   };

  //   fetch("http://localhost:3001/api", {
  //     method: "post", // 통신방법
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(post),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       this.setState({
  //         testbody: json.text,
  //       });
  //     });
  // };
  // componentDidMount() {
  //   fetch("http://localhost:3001/aa")
  //     .then((res) => res.json())
  //     .then((data) => this.setState({ username: data.username }));
  // }
  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <h1>점심뭐먹지?</h1>
        {/* <h2> {username ? `hello ${username}` : "hello world"}</h2> */}
        {/* <Food></Food> */}
        <Dbdb></Dbdb>

        {/* <MapContainer></MapContainer> */}
      </div>
    );
  }
}

export default App;
