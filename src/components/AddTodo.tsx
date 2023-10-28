import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {v4 as uuidv4} from "uuid";

import { type Todo, TodoSchema } from "../types/todo";
import { TodoContext } from "../Providers";
import { useContext } from "react";

export const AddTodo = () => {
    const [allTodos, setAllTodos] = useContext(TodoContext);

    const {
        register,
        handleSubmit,
        reset,
        clearErrors,
        formState: { errors },
    } = useForm<Todo>({ resolver: zodResolver(TodoSchema) });

    const onSubmit = (data: Omit<Todo, "id" | "done">) => {
        const newTodo: Todo = { id: uuidv4(), done: false, ...data };
        setAllTodos([...allTodos, newTodo]);
        reset();
    };

    const onClear = () => {
        clearErrors();
    };

    return (
        <div className="w-full mb-14 shadow-md">
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <label className="hidden" htmlFor="add-content">Add new todo form</label>
                <div className="flex join">
                    <input
                        className="input input-bordered input-lg w-full join-item"
                        id="add-content"
                        type="text"
                        placeholder="Enter a todo..."
                        autoComplete="off"
                        {...register("content")}
                    />
                    <button
                        className="btn btn-accent btn-lg join-item"
                        type="submit"
                    >
                            Add todo
                    </button>
                    
                </div>
                {errors.content?.message && (
                    <div className="flex items-baseline justify-center my-4">
                        <div className="text-error mr-8">
                            {errors.content?.message}
                        </div>
                        <button className="btn btn-outline btn-error" onClick={onClear}>clear</button>
                    </div>
                )}
            </form>
        </div>
    );
};
