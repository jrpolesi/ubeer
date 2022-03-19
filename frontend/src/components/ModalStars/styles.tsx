import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  max-width: 376px;
  max-height: 487px;
  background-color: #ffffff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;

    section {
      margin: 0 auto;
    }
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-left: 12px;
  }

  h3 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 18px;
    color: #3e4958;
    margin-left: 14px;
    margin-bottom: 12px;
  }

  textarea {
    width: 90%;
    max-width: 333px;
    height: 73px;
    border-radius: 15px;
    border: 0.5px solid #d5dde0;
    background: #f7f8f9;
    margin: 10px;
    &::placeholder {
      font-family: "Inter";
      font-weight: 400;
      font-size: 15px;
      color: #97adb6;
    }
  }

  button {
    margin: 8px;
  }

  p {
    margin: 4px;
    font-family: "Inter";
    font-weight: 400;
    font-size: 15px;
    text-align: center;
  }
`;

export const Content = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;

       

        
`;
