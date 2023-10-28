import { TodoItem } from "./TodoItem";
import { useContext } from "react";
import { FilterContext, TodoContext } from "../Providers";

export const ListTodos = () => {
    const [allTodos, _setAllTodos] = useContext(TodoContext);
    const [filterTodo, _setFilter] = useContext(FilterContext);

    let allTodosFilter = allTodos;
    if (filterTodo !== null) {
        allTodosFilter = allTodos.filter((t) => t.done === filterTodo);
    }

    if (!allTodosFilter.length) {
        return <h2 className="my-8 text-xl">No todos found</h2>;
    }

    return (
        allTodosFilter.map((t) => (
            <TodoItem
                todo={t}
                key={t.id}
            />
        ))
    );
};
