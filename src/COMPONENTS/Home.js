import React, { useState } from "react";

import Newtodo from "./Newtodo";
import Todos from "./Todos";
import { v4 as uuidv4 } from "uuid";
import style from "./Home.module.css";

const Home = () => {
  const [todoAdd, setTodoAdd] = useState([]);

  const handleAddTodo = (todo) => {
    setTodoAdd((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    setTodoAdd(() => {
      const filteredTodos = todoAdd.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };

  return (
    <div>
      <section className={style.sec}>
        <h1 className={style.heading}>Todo App</h1>
        <Newtodo onTodo={handleAddTodo} />
        <Todos todos={todoAdd} onRemoveTodo={handleRemoveTodo} />
      </section>

      <footer className={style.footer}>@Design by Pujon Das Auvi</footer>
    </div>
  );
};

export default Home;
