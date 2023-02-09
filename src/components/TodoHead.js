import React, { useState } from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
  h1 {
    margin: 0;
    font-size: 30px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 18px;
  }
  padding-top: 35px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  flex-direction: column;
`;

const TasksLeft = styled.div`
  color: #20c997;
  font-size: 16px;
  margin-top: 40px;
  font-weight: bold;
`;

const Folding = styled.button`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
  border: none;
  outline: none;
  background: #ffefd5;
  cursor: pointer;
`;

function TodoHead({ onFolding, folding }) {
  const today = new Date();

  const dateString = today.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleString("ko-KR", { weekday: "long" });
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <TasksLeft>할 일 {undoneTasks.length}개 남음</TasksLeft>
      <Folding onClick={onFolding}>{folding ? "펼치기" : "접기"}</Folding>
    </TodoHeadBlock>
  );
}

export default TodoHead;
