import { type Todo } from "../types/todo";
import { EditTodo } from "./EditTodo";
import { useContext, useState } from "react";
import { TodoContext } from "../Providers";

export const TodoItem = ({ todo }: { todo: Todo }) => {
    const [allTodos, setAllTodos] = useContext(TodoContext);
    const [edit, setEdit] = useState<boolean>(false);

    const onDelete = () => {
        setAllTodos(allTodos.filter((t) => t.id !== todo.id));
    };

    const onCheck = () => {
        const updatedTodo: Todo = { ...todo, done: !todo.done };
        setAllTodos(allTodos.map((t) => (t.id === todo.id ? updatedTodo : t)));
    };

    const onEdit = () => {
        setEdit((edit) => !edit);
    };

    if (edit) {
        return (
            <EditTodo
                todo={todo}
                onEdit={onEdit}
            />
        );
    }

    return (
        <div className="flex justify-between w-full items-center p-2 my-2 shadow-xl rounded bg-base-200">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.done}
                    className="checkbox checkbox-primary ml-4"
                    onChange={onCheck}
                />
                <div className={`mx-14 text-xl ${todo.done ? "line-through" : ""}`}>
                    {todo.content}
                </div>
            </div>
            <div className="flex">
                <button
                    className="btn btn-square btn-accent"
                    onClick={onEdit}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                        />
                    </svg>
                </button>
                <button
                    className="btn btn-square bg-error ml-1"
                    onClick={onDelete}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};
