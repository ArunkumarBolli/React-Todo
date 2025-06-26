import React from 'react';
import './App.css';

const Todolist = ({ todoList, deleteHandler }) => {
  return (
    <div className="todo-list">
      {todoList.map((todo, index) => (
        <div key={index} className="todo-item">
          <div className="todo-left">
            <input type="checkbox" />
            <span>{todo}</span>
          </div>
          <button onClick={() => deleteHandler(index)}>🗑</button>
        </div>
      ))}
    </div>
  );
};

export default Todolist;
