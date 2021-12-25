import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { deleteCount } from "./reducer/category_state";

const ban_list = [];

function Button({ id }) {
  //
  const dispatch = useDispatch();
  const c_data = useSelector((state) => state.category.category_data);

  const onBanned = (e) => {
    const ban = document.querySelector(".ban");
    dispatch(deleteCount(ban_list));
    console.log(c_data);
    console.log(e.target.id);
    console.log(ban_list);
    // 금지된 list에 값이 들어가 있지 않을때
    if (ban_list.includes(e.target.id) === false) {
      ban.innerHTML +=
        '<span class="del_box">' +
        e.target.id +
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
        });
      }
      ban_list.push(e.target.id);
      // dispatch();
    } else {
      alert("이미 먹고싶지 않은 항목입니다.");
    }
  };

  // setBanList(list);

  return (
    <button id={id} onClick={onBanned}>
      {id}
    </button>
  );
}
function ButtonList({ category }) {
  // const [banList, setBanList] = useState([]);
  return (
    <div>
      {category.map((data, index) => (
        <Button id={data} key={index}></Button>
      ))}
    </div>
  );
}
export default ButtonList;
