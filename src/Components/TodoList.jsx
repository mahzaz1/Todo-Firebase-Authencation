import React, { useState } from "react";
import { FaArrowRight, FaRegCircleCheck } from "react-icons/fa6";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, editTodo, deleteTodo } from "../Store/Slices/TodoSlice";
import { IoIosCheckmarkCircle } from "react-icons/io";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  console.log("todos", todos);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(null);
  const [newName, setNewName] = useState("");


  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

 
  const handleEditClick = (id, currentName) => {
    setEditMode(id); 
    setNewName(currentName); 
  };

  
  const handleSaveEdit = (id) => {
    if (newName.trim()) {
      dispatch(editTodo({ id, newName })); 
      setEditMode(null); 
      setNewName(""); 
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id)); 
  };

  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div className="single-list" key={todo.id}>
            {editMode === todo.id ? (
              <input
                className="edit-input"
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Edit todo"
              />
            ) : (
              <p
                style={{
                  textDecoration: todo.hasDone ? "line-through" : "none",
                  color: todo.hasDone ? "gray" : "#fff",
                }}
              >
                {todo.name}
              </p>
            )}

            <div className="actions">
              <button
                className="done"
                onClick={() => handleToggleTodo(todo.id)}
              >
              
                {todo.hasDone ? (  <IoIosCheckmarkCircle />) : (  <FaRegCircleCheck />)}
              
              </button>

              {editMode === todo.id ? (
                <button
                  className="edit"
                  onClick={() => handleSaveEdit(todo.id)}
                >
                <FaArrowRight />
                </button>
              ) : (
                <button
                  className="edit"
                  onClick={() => handleEditClick(todo.id, todo.name)}
                >
                  <MdModeEdit />
                </button>
              )}

              <button
                className="delete"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
}

export default TodoList;
