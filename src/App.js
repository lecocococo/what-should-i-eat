import logo from "./logo.svg";
import "./App.css";
import "./mapContainer";
import "./randomSelect";
import React, { useState, useEffect, Component } from "react";
import MapContainer from "./mapContainer";
import LoadingSpinner from "./loadingSpinner";
import "./dbdb";
import Modal from "./modal";
import Modalmobile from "./modal_mobile";
import styles from "./styles.module.css";

// redux사용
import { useDispatch, useSelector } from "react-redux";
import { changeModalState } from "./reducer/modal_state";

//react-spring 사용
import { useSprings, animated, useSpring, config } from "react-spring";
import useMeasure from "react-use-measure";

//react-transition-group 사용
import { CSSTransition } from "react-transition-group";

// react responsive 사용
import { useMediaQuery } from "react-responsive";

// animate.css 사용
import "animate.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [category_data, setCategory_data] = useState([]);
  // react-spring
  const style = useSpring({
    loop: { reverse: true },
    config: config.wobbly /*{ friction: 5 }*/,
    from: { rotateZ: -20 },
    to: { rotateZ: 20 },
  });

  const [open, toggle] = useState(false);
  const [ref, { width }] = useMeasure();
  const prop = useSpring({
    width: open ? width : 0,
    backgroundColor: open ? "turquoise" : "lightblue",
    config: { duration: 1000 },
  });

  // react-responsive for mobile
  const isMobileDevice = useMediaQuery({ query: "(max-width: 900px)" });

  //DB로 부터 카테고리를 받아오는 함수
  let list = [];
  const call = () =>
    fetch("http://127.0.0.1:3001/category_list", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    }).then(async (result, error) => {
      console.log(result);
      console.log(error);
      let list_data = await result.json();
      console.log(list_data);
      for (let i = 0; i < list_data.length; i++) {
        list[i] = list_data[i].category_name;
      }
      setCategory_data(list);
    });

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
      //모달창 상태를 저장
      dispatch(changeModalState(modal_state));
      setTimeout(() => {
        toggle(open);
      }, 300);
      // handleBackground();
    }, 1100);
  }
  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="App">
      <div className={styles.title}>
        <h1 className="lunch" style={{ marginRight: "2.5%" }}>
          점심뭐먹지
        </h1>
        <animated.h1 style={style}>?</animated.h1>
      </div>

      <button onClick={onCall}>START</button>
      <div ref={ref} className={styles.main} onClick={() => toggle(!open)}>
        <animated.div className={styles.fill} style={prop} />
        <animated.div className={styles.content}>
          {prop.width.to((x) => Math.floor((x * 100) / width) + "%")}
        </animated.div>
      </div>
      <CSSTransition
        in={modal_state}
        timeout={300}
        classNames="categoryModal"
        unmountOnExit
      >
        {isMobileDevice ? (
          <Modalmobile category_data={category_data}></Modalmobile>
        ) : (
          <Modal category_data={category_data}></Modal>
        )}
      </CSSTransition>
    </div>
  );
}

export default App;
