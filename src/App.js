import logo from "./logo.svg";
import "./App.css";
import "./mapContainer";
import "./randomSelect";
import React, { useState, useEffect, Component } from "react";
import MapContainer from "./mapContainer";
import LoadingSpinner from "./loadingSpinner";
import "./dbdb";
import Modal from "./modal";
import styles from "./styles.module.css";

// redux사용
import { useDispatch, useSelector } from "react-redux";
import { changeModalState } from "./reducer/modal_state";

//react-spring 사용
import { useSprings, animated, useSpring, config } from "react-spring";
import useMeasure from "react-use-measure";

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
  // react-spring
  const style = useSpring({
    loop: { reverse: true },
    config: config.wobbly /*{ friction: 5 }*/,
    from: { rotateZ: -20 },
    to: { rotateZ: 20 },
    // from: { x: -100 },
    // to: { x: 100 },
    // reset: false,
  });

  const [open, toggle] = useState(false);
  const [ref, { width }] = useMeasure();
  const prop = useSpring({
    width: open ? width : 0,
    backgroundColor: open ? "turquoise" : "lightblue",
    config: { duration: 1000 },
  });

  //

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
      setCategory_data(list);
    });

  //모달창이 떳을경우 배경을 흐리고 어둡게 만들어 주는 함수
  const handleBackground = () => {
    let background = document.querySelector("#root");
    background.style.background = "rgba(0, 0, 0, 0.2)";
    background.style.opacity = "0.5";
  };

  useEffect(() => {
    setTimeout(() => {
      call();
      setLoading(false);
    }, 1000);
  }, []);
  //redux를 이용하여 state저장
  const dispatch = useDispatch();
  const modal_state = useSelector((state) => state.modal.modal);

  function onCall(e) {
    toggle(!open);
    setTimeout(() => {
      toggle(open);
      //모달창 상태를 저장
      dispatch(changeModalState(modal_state));
      handleBackground();
    }, 1100);
  }
  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="App">
      <animated.div className={styles.title} style={style}>
        <h1>점심뭐먹지?</h1>
      </animated.div>
      <button onClick={onCall}>START</button>
      <div ref={ref} className={styles.main} onClick={() => toggle(!open)}>
        <animated.div className={styles.fill} style={prop} />
        <animated.div className={styles.content}>
          {prop.width.to((x) => Math.floor((x * 100) / width) + "%")}
        </animated.div>
        {modal_state ? <Modal category_data={category_data}></Modal> : ""}
      </div>
    </div>
  );
}

export default App;
