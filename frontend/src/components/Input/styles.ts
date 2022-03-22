import styled from "styled-components";

export const Container = styled.div`
  .inputContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 13px;
    background-color: white;
    border: 2px solid black;

    input {
      overflow: hidden;
      flex: 1 1 auto;
      background-color: transparent;
      border: none;
      outline: none;
      font-family: "Roboto", sans-serif;
    }
  }

  label {
    display: block;
    color: red;
    margin-top: 4px;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
  }
`;
