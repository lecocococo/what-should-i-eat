import { createPortal } from "react-dom";
import $ from "jquery";
import { useState, useEffect } from "react";
import Dbdb from "./dbdb";
import styles from "./modal.module.css";
import "./modal_btn.css";
import ButtonList from "./categoryList";
import { useDispatch, useSelector } from "react-redux";
import { changeModalState } from "./reducer/modal_state";

function Modal({ category_data }) {
  // Jquery사용한 버전
  // useEffect(() => {
  //   call();
  //   setTimeout(function () {
  //     // var $listTbody = $(".categorys ");
  //     console.log(category_data);
  //     console.log(Object.keys(category_data).length);
  //     for (let num = 0; num < category_data.length; num++) {
  //       let d = category_data[num];

  //       $(".categorys").append(
  //         "<button id=" + d + ">" + category_data[num] + "</button>"
  //       );

  //       console.log(d);
  //     }

  //     $(".categorys button").on("click", function () {
  //       console.log($(this).attr("id"));
  //       let del_box = "del_box";
  //       $(".ban").append(
  //         '<span class="del_box">' +
  //           $(this).attr("id") +
  //           "<button>" +
  //           "X" +
  //           "</button>" +
  //           "</span>"
  //       );
  //       // $("#ban span").css("border", "2px solid white");
  //       $(".ban button").on("click", function () {
  //         console.log("delet ban");
  //         alert("delete");
  //       });
  //     });

  //     // $(".del_box").attr("class", "ban_box");
  //   }, 100);
  // }, []);
  const dispatch = useDispatch();
  const modal_state = useSelector((state) => state.modal.modal);
  const [modalOn, setModalOn] = useState(modal_state);

  const handleModal = (e) => {
    dispatch(changeModalState(modal_state));
    setModalOn(false);
  };
  return createPortal(
    modalOn ? (
      <div className={styles.parent} onClick={handleModal}>
        {/* event.stopPropagation()이벤트가 캡처링/버블링 단계에서 더 이상 전파되지 않도록 방지 */}
        <div className={styles.child} onClick={(e) => e.stopPropagation()}>
          <div className={styles.exit}>
            <button onClick={handleModal}>X</button>
          </div>
          <h2>먹고 싶지 않은 카테고리 선택</h2>
          <div className={"categorys"}>
            <ButtonList category={category_data}></ButtonList>
          </div>
          <div className={"ban"}>
            <p>제외된 항목: </p>
          </div>
          <Dbdb></Dbdb>
          {/* <p>{props.message}</p> */}
        </div>
      </div>
    ) : (
      ""
    ),
    document.querySelector("#modal")
    // document.getElementById("modal")
  );
}
export default Modal;
