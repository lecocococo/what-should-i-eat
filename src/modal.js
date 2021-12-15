import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import $ from "jquery";
import { useEffect } from "react";
import { category } from "./randomSelect";
import Dbdb from "./dbdb";

function Modal(props) {
  const { message } = props;
  let category_data = [];
  let call = () =>
    fetch("http://localhost:3001/category_list", {
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
        category_data[i] = list_data[i].category_name;
      }
      console.log(category_data);
    });
  useEffect(() => {
    call();
    setTimeout(function () {
      var $listTbody = $(".category_list tbody");
      console.log(category_data);
      console.log(Object.keys(category_data).length);
      $listTbody.append("<tr>");
      for (let num = 0; num < category_data.length; num++) {
        if (num / 8 === 1) {
          $listTbody.append("</tr>");
          $listTbody.append("<tr>");
        }
        $listTbody.append(
          "<td><button>" + category_data[num] + "</button></td>"
        );
      }
    }, 50);
  }, []);
  return createPortal(
    <div className={styles.parent}>
      <div className={styles.child}>
        <h2>먹고 싶지 않은 카테고리 선택</h2>
        <table className="category_list">
          <tbody></tbody>
        </table>
        <Dbdb></Dbdb>
        {/* <p>{props.message}</p> */}
      </div>
    </div>,
    document.querySelector("#modal")
    // document.getElementById("modal")
  );
}
export default Modal;
