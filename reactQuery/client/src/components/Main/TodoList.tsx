import React from "react";
import { useCreateTodo, useDeleteTodo, useUpdateTodo } from "../../hooks/todo";
import { TodoListWrapper, TodoWrapper } from "../../styles/Main/Components";
import { GetTodoProps } from "../../interfaces/UserInterfce";

function TodoList({ todos }: { todos: GetTodoProps[] }) {
  const { mutate: addTodo } = useCreateTodo();
  const { mutate: deleteTodo } = useDeleteTodo();
  const { mutate: updateTodo } = useUpdateTodo();

  const reformDate = (date: Date) => {
    return date
      .toLocaleDateString()
      .replace(/ /g, "")
      .split(".")
      .slice(0, 3)
      .map((num) => num.padStart(2, "0"))
      .join("-");
  };

  return (
    <TodoWrapper>
      <TodoListWrapper>
        <div className="title">할 일 목록</div>
        {todos &&
          todos.map((each) => {
            if (each.completed_at) return;
            return (
              <div key={each.id} className="todo">
                <button
                  className="delete"
                  onClick={() => {
                    deleteTodo(each.id);
                  }}
                ></button>
                <button
                  className="done"
                  onClick={() => {
                    updateTodo({
                      completedAt: reformDate(new Date()),
                      todoId: each.id,
                    });
                    if (each.is_repeated) {
                      addTodo(each);
                    }
                  }}
                ></button>
                <div className="content">
                  <div className="duedate">due to: {each.due_date}</div>
                  <div className="todoitem">{each.content}</div>
                </div>
              </div>
            );
          })}
      </TodoListWrapper>
    </TodoWrapper>
  );
}

export default TodoList;
