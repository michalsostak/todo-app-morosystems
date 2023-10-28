import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { type Todo, TodoSchema } from "../types/todo";
import { TodoContext } from "../Providers";
import { useContext } from "react";

type EditTodoProps = {
    todo: Todo;
    onEdit: () => void;
};

export const EditTodo = (props: EditTodoProps) => {
    const { todo, onEdit } = props;
    const [allTodos, setAllTodos] = useContext(TodoContext);

    const {
        register,
        handleSubmit,
        clearErrors,
        reset,
        formState: { errors },
    } = useForm<Todo>({ resolver: zodResolver(TodoSchema) });

    const onSubmit = (data: Omit<Todo, "id" | "done">) => {
        const updatedTodo: Todo = { ...todo, content: data.content };
        setAllTodos(allTodos.map((t) => (t.id === todo.id ? updatedTodo : t)));
        reset();
        clearErrors();
        onEdit();
    };

    const onCancel = () => {
        clearErrors();
        onEdit();
    };

    const onClear = () => {
        clearErrors();
    };

    return (
        <div className="w-full mb-14 shadow-md">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="hidden" htmlFor={`"content-${todo.id}`}>Edit an existing todo form</label>
                <div className="flex join">
                    <input
                        className="input input-bordered w-full join-item"
                        id={`"content-${todo.id}`}
                        type="text"
                        placeholder={todo.content}
                        autoComplete="off"
                        {...register("content")}
                    />
                    <button
                        className="btn btn-accent join-item"
                        type="submit"
                    >
                        Edit todo
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary join-item"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                </div>
                {errors.content?.message && (
                    <div className="flex items-baseline justify-center my-4">
                        <div className="text-error mr-8">
                            {errors.content?.message}
                        </div>
                        <button
                            className="btn btn-outline btn-error"
                            onClick={onClear}
                        >
                            clear
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};
