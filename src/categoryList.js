import React from "react";

const onBanned = (e) => {
  const ban = document.querySelector(".ban");

  //   console.log(ban);
  //   ban.innerHTML(<span>sdfsdf</span>);
  console.log(e.target.id);
  console.log(
    (ban.innerHTML +=
      '<span class="del_box">' +
      e.target.id +
      '<button class="del" >' +
      "X" +
      "</button>" +
      "</span>")
  );
  const a = document.querySelectorAll(".del_box");
  for (let i = 0; i < a.length; i++) {
    const item = a.item(i);
    item.addEventListener("click", function (e) {
      // console.log(e.path[1].childNodes[0].data);
      item.remove();
    });
  }
};
const deleteBanned = (e) => {
  console.log("sdfsdf");
};
function Button({ id }) {
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
