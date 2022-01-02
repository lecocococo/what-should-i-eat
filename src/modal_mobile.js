import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import Dbdb from "./dbdb";
import styles from "./modal_mobile.module.css";
import "./modal_btn.css";
import ButtonList from "./categoryList";
import { useDispatch, useSelector } from "react-redux";
import { changeModalState } from "./reducer/modal_state";
import { deleteCount } from "./reducer/category_state";
import { CSSTransition } from "react-transition-group";

function Modalmobile({ category_data }) {
  const dispatch = useDispatch();
  const modal_state = useSelector((state) => state.modal.modal);
  let ban_list = useSelector((state) => state.category.category_data);

  const [modalOn, setModalOn] = useState(modal_state);

  const handleModal = (e) => {
    dispatch(changeModalState(modal_state));
    setModalOn(false);
    setTimeout(() => {
      document.querySelector("#root").style.height = "100%";
      document.querySelector("#modal").style.height = "0%";
    }, 304);
  };
  useEffect(() => {
    document.querySelector("#root").style.height = "0%";
    document.querySelector("#modal").style.height = "100%";

    const ban = document.querySelector(".ban");
    // store내의 금지된 항목의 상태를 가져와서 모달창을 다시 열었을때도 금지된 항목을 볼수 있도록함
    for (let i = 0; i < ban_list.length; i++) {
      ban.innerHTML +=
        '<span class="del_box">' +
        ban_list[i] +
        '<button class="del" >' +
        "X" +
        "</button>" +
        "</span>";
      const a = document.querySelectorAll(".del_box");
      for (let i = 0; i < a.length; i++) {
        const item = a.item(i);
        item.addEventListener("click", function (e) {
          console.log(e.path[1].childNodes[0].data);
          item.remove();
          ban_list.splice(ban_list.indexOf(e.path[1].childNodes[0].data), 1);
          dispatch(deleteCount(ban_list));
        });
      }
    }
  }, []);
  return createPortal(
    <CSSTransition
      in={modalOn}
      timeout={300}
      classNames={styles.categoryModal}
      unmountOnExit
    >
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
        </div>
      </div>
    </CSSTransition>,
    document.querySelector("#modal")
  );
}
export default Modalmobile;
