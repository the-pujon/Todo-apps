import React from "react";
import Todo from "./Todo";
import style from "./Todos.module.css";

const Todos = (props) => {
  // console.log(props.todos);
  const todo = props.todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      todo={todo.todo}
      onRemoveTodo={props.onRemoveTodo}
    />
  ));
  return <div className={style.todos}>{todo}</div>;
};

export default Todos;
