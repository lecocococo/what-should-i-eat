import { createPortal } from "react-dom";
import $ from "jquery";
import { useState, useEffect } from "react";
import { category } from "./randomSelect";
import Dbdb from "./dbdb";
import styles from "./modal.module.css";
import "./modal_btn.css";
import ButtonList from "./categoryList";

function Modal({ data }) {
  let category_data = [];

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
        category_data[i] = list_data[i].category_name;
      }
      console.log(category_data);
    });
  call();
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
  return createPortal(
    <div className={styles.parent}>
      <div className={styles.child}>
        <h2>먹고 싶지 않은 카테고리 선택</h2>
        <div className={"categorys"}>
          <ButtonList category={data}></ButtonList>
        </div>
        <div className={"ban"}>
          <p>제외된 항목: </p>
        </div>
        <Dbdb></Dbdb>
        {/* <p>{props.message}</p> */}
      </div>
    </div>,
    document.querySelector("#modal")
    // document.getElementById("modal")
  );
}
export default Modal;
