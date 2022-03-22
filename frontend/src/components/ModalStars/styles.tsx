import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 16px;

  section {
    gap: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .subtract {
      width: 60px;
      height: 5px;
      border-radius: 10px;
      background-color: gray;
      margin: 0 auto;
    }

    .driver-avatar {
      width: fit-content;
      margin: auto;

      img {
        width: 75px;
        height: 75px;
        border-radius: 50%;
      }

      h3 {
        margin-top: 5px;
        text-align: center;
        font-family: "Inter";
        font-weight: 700;
        font-size: 18px;
        color: #3e4958;
      }
    }

    textarea {
      width: 90%;
      max-width: 333px;
      height: 73px;
      border-radius: 15px;
      border: 0.5px solid #d5dde0;
      background: #f7f8f9;
      margin: 0 auto;
      padding: 10px;
      resize: none;

      &::placeholder {
        font-family: "Inter";
        font-weight: 400;
        font-size: 15px;
        color: #97adb6;
      }
    }

    button {
      margin: 8px auto;
      width: 90%;
      max-width: 333px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 4px;
    font-family: "inter";
    text-align: center;
    color: #3e4958;
    font-size: 18px;
  }
`;
