"use client";
import { useState } from "react";
import TodoArray from "./components/TodoArray";
import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";
import FilterButtons from "./components/FilterButtons";

const Home = () => {
  const [filter, setFilter] = useState("All");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Complete React project",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Grocery shopping",
      isCompleted: true,
    },
  ]);

  const handleOnClick = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), title: todo, isCompleted: false }]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const filteredId = todos.filter((data) => data.id !== id);
    setTodos(filteredId);
  };

  const handleStatusToggle = (id) => {
    const updatedTodos = todos.map((data) =>
      data.id === id ? { ...data, isCompleted: !data.isCompleted } : data
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((data) => {
    if (filter === "All") return true;
    if (filter === "Completed") return data.isCompleted;
    if (filter === "Pending") return !data.isCompleted;
    return false;
  });

  return (
    <div className="w-screen h-screen flex">
      <div className="w-3/4 my-auto flex gap-6 p-4 flex-col justify-center items-center mx-auto">
        <TodoInput
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onClick={handleOnClick}
        />
        <FilterButtons filter={filter} setFilter={setFilter} />
        <div className="w-3/4 gap-4 flex flex-col">
          {filteredTodos.map((item) => (
            <TodoCard
              item={item}
              handleStatusToggle={handleStatusToggle}
              handleDelete={handleDelete}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
