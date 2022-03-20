import styled from "styled-components";

export const Container = styled.button`
  position: absolute;
  left: 5%;
  top: 14px;
  width: 45px;
  height: 45px;
  background: #ffffff;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 9.39404px 35.2277px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    filter: brightness(0.98);
  }

  svg {
    transform: translate(-5%, 4%);
  }

  @media screen and (min-width: 768px) {
    width: 55px;
    height: 55px;
  }
`;
