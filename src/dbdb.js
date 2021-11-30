import React, { Component } from "react";
import axios from "axios";

class Dbdb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testbody: "",
      data: "",
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
      // res.json();
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
