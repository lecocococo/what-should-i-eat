import React from "react";

function Button({ id }) {
  return <button id={id}>{id}</button>;
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
