import { MdDelete } from "react-icons/md";

function ToDoItem({ id, todo, completed, toggleTodo, editTodo, deleteTask }) {
  return (
    <div className="border-2 mt-2 rounded-md flex justify-between items-center p-2">
      <input
        className="scale-125"
        type="checkbox"
        onChange={() => toggleTodo(id)}
        name={todo.id}
        value={todo.completed}
      />
      <div
        className={completed ? "line-through text-gray-400" : ""}
        onClick={() => editTodo(id)}
      >
        {todo}
      </div>
      <button
        className="bg-red-600 px-5 py-2 hover:bg-red-700 text-white rounded"
        onClick={() => deleteTask(id)}
      >
        <MdDelete />
      </button>
    </div>
  );
}
export default ToDoItem;
