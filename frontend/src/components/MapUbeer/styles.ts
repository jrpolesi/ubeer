import styled from "styled-components";

export const DivModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MapContainer = styled.div`
  .marker {
    position: absolute;
    left: 0;
    transform: translateX(-50%);
    text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
    top: 20%;
    text-transform: uppercase;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 23px;
      transform: translateX(-50%);
      border-radius: 50%;
      width: 10px;
      height: 10px;
      background-color: white;
    }
  }
`;
