import React, { useState } from "react";
import { useCreateTodo } from "../../hooks/todo";
import { AddTodoForm } from "../../styles/Main/UI";

function TodoForm() {
  const [content, setContent] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState(2);
  const [isRepeated, setIsRepeated] = useState(false);
  const { mutate: addTodo } = useCreateTodo();

  // todo 작성 함수
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content == "") return;
    addTodo({
      content,
      due_date: dueDate == "" ? null : dueDate,
      priority,
      is_repeated: isRepeated,
    });
    setContent("");
    setDueDate("");
    setPriority(2);
  };

  return (
    <AddTodoForm onSubmit={handleSubmit}>
      <div className="title">add Todo</div>
      <input
        type="text"
        id="content"
        value={content}
        placeholder="할 일 추가"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />

      <label htmlFor="dueDate">기한</label>
      <div className="options">
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => {
            setDueDate(e.target.value);
          }}
        />
        <div className="priority">
          <div className="label">우선도</div>
          <div className="flex">
            <div
              className={
                priority == 3 ? "priorityButton selected" : "priorityButton"
              }
              onClick={() => {
                setPriority(3);
              }}
            >
              상
            </div>
            <div
              className={
                priority == 2 ? "priorityButton selected" : "priorityButton"
              }
              onClick={() => {
                setPriority(2);
              }}
            >
              중
            </div>
            <div
              className={
                priority == 1 ? "priorityButton selected" : "priorityButton"
              }
              onClick={() => {
                setPriority(1);
              }}
            >
              하
            </div>
          </div>
        </div>
        <div className="flex">
          <div
            className={isRepeated ? "repeat active" : "repeat"}
            onClick={() => {
              setIsRepeated(!isRepeated);
            }}
          >
            반복
          </div>
          <button className="submit">추가하기</button>
        </div>
      </div>
    </AddTodoForm>
  );
}

export default TodoForm;
