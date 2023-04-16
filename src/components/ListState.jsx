import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ListState = () => {
  const defaultTodo = [
    { id: uuidv4(), title: "Write a new blog", isComplete: false },
    { id: uuidv4(), title: "Read two pages of Rework", isComplete: true },
    { id: uuidv4(), title: "Organize playlist", isComplete: false },
  ];

  const [todo, setTodo] = useState(defaultTodo);
  const [item, setItem] = useState("");

  // Marks a given todo as complete or incomplete
  const handleTodoChange = (id) => {
    const updatedTodos = todo.map((item) => {
      if (item.id === id) {
        return { ...item, isComplete: !item.isComplete };
      }
      return item;
    });
    setTodo(updatedTodos);
  };

  // Adds a new todo item to the list
  const handleAddItem = (e) => {
    e.preventDefault();
    const updatedTodos = [
      ...todo,
      { id: uuidv4(), title: item, isComplete: false },
    ];
    setTodo(updatedTodos);
    setItem("");
  };

  // Removes todo item from the list based on given ID
  const handleDeleteItem = (id) => {
    const updatedTodos = todo.filter((item) => item.id !== id);
    setTodo(updatedTodos);
  };

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

export default ListState;
