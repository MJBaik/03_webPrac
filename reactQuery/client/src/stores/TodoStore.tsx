import { create } from "zustand";
import { GetTodoProps } from "../interfaces/UserInterfce";

interface TodoStoreInterface {
  todoList: GetTodoProps[];
  doneTodos: GetTodoProps[];
  focusDate: Date;
  actions: {
    setTodoList: (arr: GetTodoProps[]) => void;
    setDoneTodos: (arr: GetTodoProps[]) => void;
    setFocusDate: (date: Date) => void;
  };
}

const useTodoStore = create<TodoStoreInterface>((set) => ({
  todoList: [],
  doneTodos: [],
  focusDate: new Date(),
  actions: {
    setTodoList: (arr) =>
      set(() => ({
        todoList: arr,
      })),
    setDoneTodos: (arr) =>
      set(() => ({
        doneTodos: arr,
      })),
    setFocusDate: (date) =>
      set(() => ({
        focusDate: date,
      })),
  },
}));

export const useTodoList = () => useTodoStore((state) => state.todoList);
export const useDoneTodos = () => useTodoStore((state) => state.doneTodos);
export const useFocusDate = () => useTodoStore((state) => state.focusDate);
export const useTodoActins = () => useTodoStore((state) => state.actions);
