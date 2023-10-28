import { z } from "zod";

export const TodoSchema = z.object({
    content: z
        .string()
        .min(1, { message: "Content must not be empty" })
        .max(100, {
            message: "Content must not exceed 100 characters",
        })
});

export type Todo = {
    id: string;
    content: string;
    done: boolean;
};
