import { useState } from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import { MdAdd } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  function handleAdd() {
    if (!input.trim()) return;
    const newTodo = { id: uuidv4(), task: input.trim(), isCompleted: false };
    setTodo([...todo, newTodo]);
    setInput("");
  }

  function handleDelete(id) {
    setTodo(todo.filter((item) => item.id != id));
  }
  function handleToggle(id) {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }
  function handleEdit(id) {
    let taskEdit = todo.filter((item) => item.id === id);
    setInput(taskEdit[0].task);
    setTodo(todo.filter((item) => item.id != id));
  }

  return (
    <div className=" bg-slate-200 text-gray-700 w-full h-screen flex justify-center items-center">
      <div className="w-80 max-h-80 bg-white rounded p-2 flex flex-col shadow-xl">
        <div className="text-center text-2xl font-semibold">
          <Header></Header>
        </div>
        <div className="w-full h-auto border-b-2 border-gray-700  py-3 px-2 flex justify-evenly gap-2">
          <input
            className="w-full p-2 border-2 rounded"
            type="text"
            id="inputData"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
          />
          <button
            className="px-5 py-2 bg-gray-700 text-xl  hover:bg-gray-800 text-white rounded"
            onClick={handleAdd}
          >
            <MdAdd />
          </button>
        </div>
        <div className="flex flex-col mt-1 p-2 overflow-y-auto">
          <ToDoList
            todo={todo}
            deleteTask={handleDelete}
            editTask={handleEdit}
            toggleTodo={handleToggle}
          ></ToDoList>
        </div>
      </div>
    </div>
  );
}

export default App;
