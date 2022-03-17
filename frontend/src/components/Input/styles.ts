import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 13px;
  background-color: white;
  border: 2px solid black;

  input {
    flex: 1 1 auto;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;