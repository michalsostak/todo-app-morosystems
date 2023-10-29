import { TodoContext } from "../Providers";
import { useCallback, useContext } from "react";

export const RemoveDone = () => {
    const [allTodos, setAllTodos] = useContext(TodoContext);

    const handleRemoveAllDone = useCallback(() => {
        const openTodos = allTodos.filter((t) => !t.done);
        setAllTodos(openTodos);
    }, [allTodos, setAllTodos]);

    return (
        <button
            className="btn btn-secondary"
            onClick={handleRemoveAllDone}
        >
            Remove Done Todos
        </button>
    );
};
