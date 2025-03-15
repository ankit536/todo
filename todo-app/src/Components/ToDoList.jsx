import ToDoItem from "./ToDoItem.jsx";
import { GiPartyPopper } from "react-icons/gi";

function ToDoList({ todo, deleteTask, editTask, toggleTodo }) {
  return (
    <>
      {todo.length === 0 && (
        <div className="flex justify-center items-center text-lg gap-2">
          <GiPartyPopper className="text-red-600 text-2xl" /> No Task Pending
          <GiPartyPopper className="text-red-600 text-2xl" />
        </div>
      )}
      {todo.map((todo) => (
        <ToDoItem
          key={todo.id}
          id={todo.id}
          todo={todo.task}
          completed={todo.isCompleted}
          deleteTask={deleteTask}
          editTodo={editTask}
          toggleTodo={toggleTodo}
        ></ToDoItem>
      ))}
    </>
  );
}
export default ToDoList;
