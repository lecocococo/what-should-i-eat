import React, { Component } from "react";
import axios from "axios";
// import LifeCount from "./life_count";

class Dbdb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testbody: "",
      data: "",
      life: 3,
    };
  }

  // db삽입
  submitId = () => {
    const post = {
      test: this.state.testbody,
    };

    fetch("http://localhost:3001/api", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.text);
        this.setState({
          testbody: json.text,
        });
      });
  };

  // decrease = () => {
  //   this.setState({ life: this.state.life - 1 });
  // };
  onCall = () => {
    fetch("http://localhost:3001/api", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    }).then(async (res, error) => {
      console.log(res);
      console.log(error);
      const d = await res.json();
      // console.log(res.json());
      console.log(d);
      this?.setState({
        data: d.category_name,
      });
      this.setState({ life: this.state.life - 1 });
      if (this.state.life === 0) {
        alert("고민하지마세요!!!");
        this.setState({ life: 3 });
      }
    });
    // .then(async (json, d) => {
    //   console.log("1");
    //   console.log(d);
    //   console.log(json);
    //   this?.setState({
    //     data: json.title,
    //   });
    //   console.log(this.data);
    // })
    // .catch((error, d) => {
    //   console.log(d);
    //   console.log(error);
    // });
  };

  render() {
    return (
      <div>
        <h2>{this.state?.data}</h2>
        <button onClick={this.onCall}>bring</button>
        <div>
          <p>아직까지 고민하시나요?</p>
          <p>계속돌려도 선택장애는 없어지지 않습니다!!!</p>
          <p>{this.state.life}번 안에 나온걸로 먹으로 가세요!!</p>
        </div>
      </div>
    );
  }
}

// function onDataHandler() {
//   const axiosSet = axios.create({
//     baseURL: "http://localhost:3001", //node server의 url
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//     responseType: "json",
//     responseEncoding: "json",
//   });
//   const res = axiosSet.get("/api");
//   console.log(res.data);
// }

export default Dbdb;
