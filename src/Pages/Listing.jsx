import React from "react";

import { Link, useNavigate } from "react-router-dom";
import TodoList from "../Components/TodoList";
import { auth } from "../Components/Firebase";

function Listing() {
  const naviagte = useNavigate();

  async function Logout() {
    await auth.signOut();
    naviagte("/login");
  }
  return (
    <div className="my-todo-list">
      <div className="heading">
        <h1>My Todo List Here!</h1>
        <Link to={"/verify-env"} className="add-todo">
          Add Todo
        </Link>
      </div>

      <div className="todo-list">
        <TodoList />
      </div>
      <button onClick={() => Logout()} className="logout">
        Logout
      </button>
    </div>
  );
}

export default Listing;
