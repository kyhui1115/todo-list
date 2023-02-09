import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #E8F5FF
  }
`;
function App() {
  const [folding, setFolding] = useState(false);

  function onFolding() {
    setFolding(!folding);
  }

  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate folding={folding}>
        <TodoHead onFolding={onFolding} folding={folding} />
        {folding ? null : <TodoList />}
        {folding ? null : <TodoCreate />}
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
