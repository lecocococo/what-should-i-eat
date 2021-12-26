import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({ ban_list: state.category.category_data });

class Dbdb extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  onCall = () => {
    // 금지된 항목 props에 잘 들어옴
    console.log(this.props.ban_list);
    fetch("http://127.0.0.1:3001/api", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ban_list: this.props.ban_list,
      }),
    }).then(async (res, error) => {
      console.log(res);
      console.log(error);
      const d = await res.json();
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
export default connect(mapStateToProps)(Dbdb);
