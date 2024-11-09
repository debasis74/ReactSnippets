import { useState, useEffect } from "react";
import toDodata from "../../Data/ToDo";
import { v4 as uuid } from "uuid";
import styles from "./todo.module.css";

const AddTask = ({ addData }) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddTask = () => {
    const newInput = {
      id: uuid(),
      taskName: input,
      isCompleted: false,
    };
    addData(newInput);
    setInput("");
  };

  return (
    <div style={{ display: "flex", direction: "row", gap: "4px" }}>
      <input value={input} onChange={handleInput}></input>
      <button onClick={handleAddTask}>Enter task</button>
    </div>
  );
};

const DisplayList = ({ data, updateData }) => {
  const handleCheckBoxChange = (e, id) => {
    const newData = data.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    updateData(newData);
  };

  const handleDelete = (e, id) => {
    const newData = data.filter((e)=>
        e.id !== id
    );
    updateData(newData);
  };

  return (
    <>
      {data.map((toDo) => {
        return (
          <div style={{ display: 'flex', direction: 'row', gap: '4px'}}>
          <div
            style={{
              textDecoration: toDo.isCompleted ? "line-through" : "none",
            }}
            className={styles.todoListDiv}
            id={toDo.id}
          >
            {toDo.taskName}
            <input
              type="checkbox"
              checked={toDo.isCompleted}
              onChange={(e) => handleCheckBoxChange(e, toDo.id)}
            ></input>
          </div>
          <button onClick={ (e) => handleDelete(e, toDo.id) }>Delete</button>
          </div>
        );
      })}
    </>
  );
};

const Todo = () => {
  const [data, setData] = useState(toDodata);

  const handleData = (newData) => {
    setData([...data, newData]);
  };

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <div className={styles.mainDiv}>
      <AddTask addData={handleData} />
      {data.length ? <h1>Present tasks: </h1> : <h1>No tasks present</h1>}
      <DisplayList data={data} updateData={updateData} />
    </div>
  );
};

export default Todo;
