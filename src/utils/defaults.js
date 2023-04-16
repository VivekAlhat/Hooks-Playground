import { v4 as uuidv4 } from "uuid";

export const defaultTodo = [
  { id: uuidv4(), title: "Write a new blog", isComplete: false },
  { id: uuidv4(), title: "Read two pages of Rework", isComplete: true },
  { id: uuidv4(), title: "Organize playlist", isComplete: false },
];
