import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);

  svg {
    width: 20px;
  }

  input {
    overflow: hidden;
    flex: 1 1 auto;
    background-color: transparent;
    border: none;
    outline: none;
    font-family: "Inter";
    font-weight: 500;
    font-size: 16px;
  }
`;
