import React, { useState } from "react";
import style from "./Newtodo.module.css";

const Newtodo = (props) => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    setInput({ ...input, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onTodo(input);
    // console.log(input);
  };

  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
          <label htmlFor="input">Input Todo: </label>
          <input
            type="text"
            id="input"
            name="input"
            placeholder="Input Todo"
            onChange={handleInput}
            className={style.input}
          />
        </div>
        <div className={style["form-field"]}>
          <label htmlFor="des">Input Todo: </label>
          <textarea
            type="text"
            id="des"
            name="des"
            placeholder="Input des"
            onChange={handleInput}
            className={style.textarea}
          />
        </div>
        <div>
          <button type="submit">Add Todo</button>
        </div>
      </form>
    </div>
  );
};

export default Newtodo;
