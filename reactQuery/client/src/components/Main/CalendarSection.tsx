import React, { useEffect, useState } from "react";
import Calendar, { TileArgs } from "react-calendar";
import { GetTodoProps } from "../../interfaces/UserInterfce";
import { CalendarCss } from "../../styles/common/Global";
import { DoneList } from "../../styles/Main/Components";
import { useDeleteTodo } from "../../hooks/todo";
import {
  useDoneTodos,
  useFocusDate,
  useTodoActins,
  useTodoList,
} from "../../stores/TodoStore";

function CalendarSection({ todos }: { todos: GetTodoProps[] }) {
  const { mutate: deleteTodo } = useDeleteTodo();

  const todoList = useTodoList();
  const doneTodos = useDoneTodos();
  const focusDate = useFocusDate();
  const { setFocusDate } = useTodoActins();

  // 완료된 todo 가져오기
  const getDates = (arr: GetTodoProps[]): string[] => {
    return arr.map((each) => {
      if (each.completed_at) {
        return new Date(each.completed_at).toDateString();
      }
    });
  };

  // due date가 있는 todo 가져오기
  const getDues = (arr: GetTodoProps[]): string[] => {
    return arr.map((each) => {
      if (!each.completed_at) {
        if (each.due_date != null) {
          return new Date(each.due_date).toDateString();
        }
      }
    });
  };

  return (
    <div>
      <CalendarCss />
      <Calendar
        // todo를 완료한 날짜에 표시
        tileClassName={({ date }) => {
          const classList = [];
          // console.log(getDues(todoList).indexOf(date.toDateString()) != -1);
          if (getDates(todoList).indexOf(date.toDateString()) != -1) {
            classList.push("hasDone");
          }
          if (getDues(todos).indexOf(date.toDateString()) != -1) {
            classList.push("hasDue");
          }
          return classList.join(" ");
        }}
        onClickDay={(e) => {
          setFocusDate(e);
        }}
      />
      <DoneList>
        {/* 완료된 todo 리스트 */}
        <div className="title">Todo List</div>
        {todos.map((each, idx) => {
          if (each.completed_at == null && each.due_date) {
            if (
              new Date(each.due_date).toDateString() == focusDate.toDateString()
            )
              return (
                <div className="item todo" key={idx}>
                  ! 마감일:: {each.content}
                </div>
              );
          }
        })}
        {doneTodos.map((each, idx) => (
          <div
            className="item"
            key={idx}
            onClick={() => {
              deleteTodo(each.id);
            }}
          >
            - {each.content}
          </div>
        ))}
      </DoneList>
    </div>
  );
}

export default CalendarSection;
