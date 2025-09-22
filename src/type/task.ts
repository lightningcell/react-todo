import type { Tag } from "./tag";

interface Task {
    title: string;
    priority: 'Low' | 'Medium' | 'High';
    dueDate: Date | null;
    tag: Tag;
    completed: boolean;
    order: number;
}

export type { Task };
