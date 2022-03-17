import styled from "styled-components";
import Button from ".";
interface Props {
  variant?: string;
}
export const Container = styled.button<Props>`
  width: 100%;
  height: 48px;
  color: ${({ variant }) => (variant == "primary" ? "#ffffff" : "#000000")};
  background-color: #f8d50e;
  border: ${({ variant }) =>
    variant == "primary" ? "none" : "2px solid black"};
  font-family: ${({ variant }) => (variant == "primary" ? "Inter" : "Roboto")};
  font-weight: ${({ variant }) =>
    variant == "primary" ? "700" : "900, Black"};
  font-size: ${({ variant }) => (variant == "primary" ? "18px" : "13.5px")};
  line-height: ${({ variant }) => (variant == "primary" ? "28px" : "15px")};
`;
