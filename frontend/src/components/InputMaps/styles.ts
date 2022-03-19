import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 13px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.2);

  input {
    flex: 1 1 auto;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;