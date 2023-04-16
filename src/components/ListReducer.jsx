import { useState, useReducer } from "react";
import { ListReducerFn } from "../utils/functions";
import { defaultTodo } from "../utils/defaults";

const ListReducer = () => {
  const [todo, dispatch] = useReducer(ListReducerFn, defaultTodo);
  const [item, setItem] = useState("");

  // Marks a given todo as complete or incomplete
  const handleTodoChange = (id) =>
    dispatch({ type: "UPDATE", payload: { id } });

  // Adds a new todo item to the list
  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: { item } });
    setItem("");
  };

  // Removes todo item from the list based on given ID
  const handleDeleteItem = (id) =>
    dispatch({ type: "DELETE", payload: { id } });

  return (
    <div className="container">
      <div className="new-todo">
        <input
          placeholder="Add New Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="todo-input"
        />
        <button onClick={handleAddItem} className="add-todo">
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todo.length > 0 ? (
          todo.map((item) => (
            <li key={item.id} className="list-item">
              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => handleTodoChange(item.id)}
              />
              <p>{item.title}</p>
              <button
                onClick={() => handleDeleteItem(item.id)}
                className="delete-todo"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>List is empty</p>
        )}
      </ul>
    </div>
  );
};

export default ListReducer;
