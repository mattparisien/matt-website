import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const StyledParagraph = styled.p`
  font-family: 'Kobe';
  
  font-size: 5vw;
  line-height: 6vw;
  
  .line-wrapper {
    overflow: hidden;
    justify-content: flex-start;
  }

  .char {
    transform: translateY(100%);
    opacity: 0;
  }
  
  @media ${device.laptop} {
    font-size: 6rem;
    line-height: 6rem;
  }
  
`