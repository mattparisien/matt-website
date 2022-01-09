import styled from "styled-components";

export const StyledWrapper = styled.div`
  overflow: hidden;
  
  position: relative;
  z-index: 999;

  .scene-wrapper {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`