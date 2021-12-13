import { createPortal } from "react-dom";
import styles from "./modal.module.css";

function Modal(props) {
  const { message } = props;
  return createPortal(
    <div className={styles.parent}>
      <div className={styles.child}>
        <h2>먹고 싶지 않은 카테고리 선택</h2>

        <p>{props.message}</p>
      </div>
    </div>,
    document.querySelector("#modal")
    // document.getElementById("modal")
  );
}
export default Modal;
