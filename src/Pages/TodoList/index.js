import { useState } from "react";
import "./style.css";
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
    <div className="root">
      <div className="header">
        <h1>Task List</h1>
      </div>
      <div className="backgroundCol2">
        <div className="body">
          <div className="inputContainer">
            <input
              className="inputTask"
              type="text"
              placeholder="Enter a Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="buttonAdd" onClick={addTask}>
              Add Task
            </button>
          </div>
          {list.length === 0 && (
            <div className="withoutTasks">
              <div>You Don't Have Any Tasks :)</div>
            </div>
          )}

          <ul className="tasklist">
            {list.map((listIten, index) => {
              return (
                <li
                  className="listItens"
                  style={{
                    background: listIten.check ? "rgb(199, 253, 199)" : "",
                  }}
                >
                  <div className="itemText">{listIten.name}</div>{" "}
                  <button
                    className="itemButton itemCheckButton"
                    onClick={() => checkTask(index)}
                  >
                    ✓
                  </button>
                  <button
                    className="itemDeleteButton itemButton"
                    onClick={() => deleteTask(index)}
                  >
                    <FaTrashAlt />
                  </button>
                </li>
              );
            })}
          </ul>
          <button className="resetButton" onClick={resetTask}>
            Reset Task List
          </button>
        </div>
      </div>
      <div className="footer">
        <strong>
          <p>Vinicius Almeida-&copy;</p>
        </strong>
      </div>
    </div>
  );
}
