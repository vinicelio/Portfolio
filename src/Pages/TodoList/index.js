import { useState } from "react";
import style from "./style.module.css";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    setList((prevTasks) => [...prevTasks, { name: task, check: false }]);
    setTask("");
  }
  function resetTask() {
    setList([]);
  }

  function deleteTask(taskIndex) {
    setList(list.filter((item, index) => index !== taskIndex));
  }

  function checkTask(taskIndex) {
    setList(
      list.map((item, index) => {
        if (index === taskIndex) {
          return {
            name: item.name,
            check: true,
          };
        }
        return item;
      })
    );
  }

  return (
    <div className={style.root}>
      <div className={style.header}>
        <h1>Task List</h1>
      </div>
      <div className={style.backgroundCol2}>
        <div className={style.body}>
          <div className={style.inputContainer}>
            <input
              className={style.inputTask}
              type="text"
              placeholder="Enter a Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className={style.buttonAdd} onClick={addTask}>
              Add Task
            </button>
          </div>
          {list.length === 0 && (
            <div className={style.withoutTasks}>
              <div>You Don't Have Any Tasks :)</div>
            </div>
          )}

          <ul className={style.tasklist}>
            {list.map((listIten, index) => {
              return (
                <li
                  className={style.listItens}
                  style={{
                    background: listIten.check ? "rgb(199, 253, 199)" : "",
                  }}
                >
                  <div className={style.itemText}>{listIten.name}</div>{" "}
                  <button onClick={() => checkTask(index)}>✓</button>
                  <button onClick={() => deleteTask(index)}>
                    <FaTrashAlt />
                  </button>
                </li>
              );
            })}
          </ul>
          <button className={style.resetButton} onClick={resetTask}>
            Reset Task List
          </button>
        </div>
      </div>
      <div className={style.footer}>
        <strong>
          <p>Vinicius Almeida-&copy;</p>
        </strong>
      </div>
    </div>
  );
}
