import styled from "styled-components";

interface Props {
  variant?: "filled";
}

export const Container = styled.header<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 20%;
  width: 100%;
  background-color: ${({ variant }) =>
    variant === "filled" ? "#f8d50e" : "#F7F8F9"};
  padding: 5px 5%;
  color: ${({ variant }) => (variant === "filled" ? "#FFFFFF" : "#000000")};

  button {
    position: static;
  }

  h1 {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    font-family: "Inter", sans-serif;
  }

  .Avatar{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    background-color: #05a1fb;
    color: #FFF;
    border-radius: 90px;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;
