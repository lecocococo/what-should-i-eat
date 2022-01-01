import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { deleteCount } from "./reducer/category_state";
import Swal from "sweetalert2";

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
      Swal.fire({
        title: "이미 먹고싶지 않은 항목입니다!",
        // text: "",
        width: 600,
        padding: "3em",
        color: "#716add",
        background:
          "url(https://cdn.pixabay.com/photo/2020/02/20/17/57/flower-4865379_960_720.png) #fff ",
        footer: "",
        backdrop: `
          rgba(0,0,123,0.4)
          
          no-repeat
          `,
      });
    }
  };

  return (
    <button id={id} onClick={onBanned}>
      {id}
    </button>
  );
}
function ButtonList({ category }) {
  return (
    <div>
      {category.map((data, index) => (
        <Button id={data} key={index}></Button>
      ))}
    </div>
  );
}
export default ButtonList;
