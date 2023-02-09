import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: ${(props) => props.fold};
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.5s;
`;

function TodoTemplate({ children, folding }) {
  return (
    <TodoTemplateBlock fold={folding ? "250px" : "600px"}>
      {children}
    </TodoTemplateBlock>
  );
}

export default TodoTemplate;
