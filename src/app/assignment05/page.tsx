"use client";
import { useState, ChangeEvent } from "react";

// Define types for Todo and filter
interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

const Home = () => {
  const [filter, setFilter] = useState<"All" | "Completed" | "Pending">("All");
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([
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
    setTodos([
      ...todos,
      { id: Date.now(), title: todo, isCompleted: false },
    ]);
    setTodo(""); // Clear the input field after adding a task
  };

  const handleDelete = (id: number) => {
    const filteredId = todos.filter((data) => data.id !== id);
    setTodos(filteredId);
  };

  const handleStatusToggle = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((data) => {
    if (filter === "All") {
      return true;
    }
    if (filter === "Completed" && data.isCompleted) {
      return true;
    }
    if (filter === "Pending" && !data.isCompleted) {
      return true;
    }
  });

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="w-3/4 my-auto flex gap-6 p-4 flex-col justify-center items-center mx-auto">
        <div className="w-3/4 flex my-auto justify-evenly gap-2">
          <input
            className="rounded-lg border border-gray-700 w-3/4 p-2"
            placeholder="Enter Task details"
            value={todo}
            onChange={handleTodoChange}
          />
          <button
            className="w-1/4 border border-gray-700"
            disabled={todo === ""}
            style={{ opacity: todo === "" ? 0.7 : 1 }}
            onClick={handleOnClick}
          >
            Add Task
          </button>
        </div>
        <div className="flex justify-evenly w-3/4">
          <button
            className="border border-gray-700"
            onClick={() => setFilter("All")}
            style={{ opacity: filter === "All" ? 0.7 : 1 }}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Completed")}
            style={{
              opacity: filter === "Completed" ? 0.7 : 1,
              backgroundColor: "lightgreen",
            }}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter("Pending")}
            style={{
              opacity: filter === "Pending" ? 0.7 : 1,
              backgroundColor: "pink",
            }}
          >
            Pending
          </button>
        </div>
        <div className="w-3/4 gap-4 flex flex-col">
          {filteredTodos.map((item) => (
            <div
              className="w-full flex justify-between items-center p-2 border border-gray-700 text-gray-950 rounded-lg"
              key={item.id}
            >
              <p>{item.title}</p>
              <div className="flex justify-between px-auto items-center w-1/4">
                <button
                  style={{
                    backgroundColor: item.isCompleted ? "lightgreen" : "pink",
                  }}
                  onClick={() => handleStatusToggle(item.id)}
                >
                  {item.isCompleted ? "completed" : "pending...."}
                </button>
                <img
                  onClick={() => handleDelete(item.id)}
                  height={20}
                  width={20}
                  src="/delete.svg"
                  alt="delete"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
