import styled from "styled-components";

interface Props {
  variant?: string;
  bg?: string;
}

export const Container = styled.button<Props>`
  height: 48px;
  color: ${({ variant, bg }) => (variant || bg !== undefined ? "#FFFFFF": "#000000")};
  background-color: ${({ bg }) => (bg === "dark" ? "#000000" : "#f8d50e")};
  border: ${({ variant }) =>
    variant === "rounded" ? "none" : "2px solid black"};
  border-radius: ${({ variant }) =>
    variant === "rounded" ? "25px" : "5px"};
  font-family: ${({ variant }) => (variant === "rounded" ? "Inter" : "Roboto")};
  font-weight: 800;
  font-size: 14px
`;
