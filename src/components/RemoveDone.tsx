import { TodoContext } from "../Providers";
import { useContext } from "react";

export const RemoveDone = () => {
    const [allTodos, setAllTodos] = useContext(TodoContext);

    const handleRemoveAllDone = () => {
        const openTodos = allTodos.filter((t) => !t.done);
        setAllTodos(openTodos);
    };

    return (
        <button
            className="btn btn-secondary"
            onClick={handleRemoveAllDone}
        >
            Remove Done Todos
        </button>
    );
};
