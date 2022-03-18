import styled from "styled-components";

export const Container = styled.div`
    height: 20%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    
    display: flex;
    align-items: center;
    
    button{
      position: absolute;
      top: 5%;
      left: 5%;  
      width: 84px;
      height: 84px;
      border: none;
      border-radius: 50%;
      margin-left: 10px;
      cursor: pointer;
    }
    button:hover{
        filter: brightness(0.9);
    }
`;