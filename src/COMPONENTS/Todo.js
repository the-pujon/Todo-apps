import React from "react";

import { FaTrashAlt } from "react-icons/fa";
import style from "./Todo.module.css";

const Todo = (props) => {
  const { input, des } = props.todo;

  const { id } = props;

  const handleClick = (id) => {
    props.onRemoveTodo(id);
  };

  return (
    <article className={style.todo}>
      <div>
        <div> {input}</div>
        <div>{des}</div>
      </div>
      <div>
        <button
          className={style.btn}
          onClick={() => {
            handleClick(id);
          }}
        >
          <FaTrashAlt />
        </button>
      </div>
    </article>
  );
};

export default Todo;
