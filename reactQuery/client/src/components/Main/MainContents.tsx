import React from "react";
import { ContentWrapper } from "../../styles/Main/Components";
import { useGetTodos } from "../../hooks/todo";

import TodoList from "./TodoList";
import CalendarSection from "./CalendarSection";

function MainContents() {
  const { isLoading, data, isError, error } = useGetTodos();

  if (isLoading || data == undefined) return <div>로딩중...</div>;

  return (
    <ContentWrapper>
      <TodoList todos={data} />
      <CalendarSection todos={data} />
    </ContentWrapper>
  );
}

export default MainContents;
