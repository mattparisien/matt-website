import styled from "styled-components";

export const StyledCursor = styled.div`
  background-color: black;
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  height: 100px;
  width: 100px;
  background-color:yellow;
  pointer-events: none;
  
  .cursor-inner {
    height: 100%;
    width: 100%;

    .cursor-ring {
      height: 100%;
      width: 100%;
      border: 1px solid black;
      border-radius: 50%;
      position: relative;
    }

    .cursor-dot {
      height: 30px;
      width: 30px;
      background-color: blue;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }
  }

`