import {
    createContext,
    type FC,
    type Dispatch,
    type PropsWithChildren,
    type SetStateAction,
    useState,
} from "react";
import { Todo } from "./types/todo";


type TodoContextType = [Todo[], Dispatch<SetStateAction<Todo[]>>];

export const TodoContext = createContext<TodoContextType>(
    undefined as never
);

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
    const todos = useState<Todo[]>([]);
    return (
        <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>
    );
};

export type FilterTodo = boolean | null;

type ContextFilterType = [FilterTodo, Dispatch<SetStateAction<FilterTodo>>];

export const FilterContext = createContext<ContextFilterType>(
    undefined as never
);

export const FilterProvider: FC<PropsWithChildren> = ({ children }) => {
    const filterState = useState<FilterTodo>(null);

    return (
        <FilterContext.Provider value={filterState}>
            {children}
        </FilterContext.Provider>
    );
};

export const Providers = ({ children }: PropsWithChildren) => (
    <TodoProvider>
        <FilterProvider>
            {children}
        </FilterProvider>
    </TodoProvider>
);
