import { useContext } from "react";
import { TodoContext } from "../Providers";
import { Todo } from "../types/todo";

export const TodosCount = () => {
    const [allTodos, _setAllTodos] = useContext(TodoContext);

    const countNotDone = (todos: Todo[]) => {
        return todos.filter((t) => !t.done).length;
    };

    return (
        <div className="my-6 text-l flex items-center">
            Total Open todos:
            <div className="text-3xl ml-2">
                {countNotDone(allTodos)}
            </div>
        </div>
    );
};
