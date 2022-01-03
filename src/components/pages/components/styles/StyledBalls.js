import styled from "styled-components";

export const StyledBalls = styled.div`
  .floating-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 15vw;
    height: 15vw;
    background-color: blue;
    border-radius: 50%;
    animation: animateBalls 5s linear;
  }


  @keyframes animateBalls {
   
    100% {
      transform: translateX(-100%);
    }
  }

`