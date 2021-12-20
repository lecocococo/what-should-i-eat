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
      "<button>" +
      "X" +
      "</button>" +
      "</span>")
  );
  return;
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
