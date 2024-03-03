import React, { useState } from "react";
import Calendar from "react-calendar";
import { GetTodoProps } from "../../interfaces/UserInterfce";
import { CalendarCss } from "../../styles/common/Global";
import { DoneList } from "../../styles/Main/Components";
import { useDeleteTodo } from "../../hooks/todo";

function CalendarSection({ todos }: { todos: GetTodoProps[] }) {
  const { mutate: deleteTodo } = useDeleteTodo();

  const getEvents = (date: Date) => {
    return todos.filter((each) => {
      return each.completed_at != null;
    });
  };

  const [todoList, setTodoList] = useState(getEvents(new Date()));

  const getDates = (arr: GetTodoProps[]): Date[] => {
    return arr.map((each) => {
      if (each.completed_at) {
        const date = each.completed_at.split("-");
        if (
          new Date(Number(date[0]), Number(date[1]) - 1, Number(date[2])) !=
          undefined
        ) {
          return new Date(
            Number(date[0]),
            Number(date[1]) - 1,
            Number(date[2])
          );
        }
      }
    });
  };

  const handleDelete = (id: number) => {
    deleteTodo(id);
    setTodoList((prev) => prev.filter((each) => each.id != id));
  };

  return (
    <div>
      <CalendarCss />
      <Calendar value={getDates(todoList)} />
      <DoneList>
        <div className="title">완료목록</div>
        {todoList.map((each, idx) => (
          <div className="item" onClick={() => handleDelete(each.id)}>
            {each.content}
          </div>
        ))}
      </DoneList>
    </div>
  );
}

export default CalendarSection;
