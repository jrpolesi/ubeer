import styled from "styled-components";

export const DivModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MapContainer = styled.div`
  min-height: calc(100vh - 55px);
  display: flex;
  flex-direction: column;

  > div:nth-of-type(2) {
    flex: 1 1 auto;
  }

  > div:nth-of-type(3) {
    background-color: #ffffff;
  }

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

  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 65px);

    > div:nth-of-type(3) {
      position: absolute;
      margin-left: 20px;
      max-width: 480px;
      box-shadow: 5px -4px 15px rgba(0, 0, 0, 0.2);
    }
  }
`;
