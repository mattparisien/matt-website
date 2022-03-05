import styled from "styled-components";
import { shuffleColors } from "../../../helpers/shuffleColors";
import { device, deviceSize } from "../../../styles/breakpoints";

export const StyledFooter = styled.footer`
	color: blue;
	overflow: hidden;
	z-index: -999;
	

	ul, .footer-copyright {
		font-size: 1rem;
		z-index: 2;
	}
	
	.footer-copyright {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: inherit;
		
	}

	

	.footer-cards {
		
		
		margin: 0;
    
		
		width: 100%;
		height: 100%;
		left: 0;
		
		.footer-cards__wrapper {
			
			height: 100%;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			
			
		}

	


			.footer-cards__card {
				display: inline-block;
				bottom: 0;
				height: 27vw;
				width: 20vw;
        padding: 1.5rem;
				border-radius: 10px;
        color ${({ theme }) => theme.colors.dark};

			

		

				&:not(:first-of-type) {
					margin-left: -14vw;

					@media only screen and (max-width: ${deviceSize.laptopL}px) {
						margin-left: -29vw;
					}
				}
				
				

			
				

        .card-cta {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;

					
          


					a {
						align-items: center;
						justify-content: space-between;
						display: flex;
						height: 100px;
						padding: 1.5rem;
					}

          .card-cta__text {
            font-size: 1.4vw;
						align-self: flex-end;
          }


          .arrow-svg {
            width: 3rem;
            transform: rotate(-35deg);
            transform-origin: center;
						transition:  300ms ease;
						

						&:hover {
							transform: rotate(-35deg)translateX(15px);
							
						}
            path {
              fill: ${({ theme }) => theme.colors.dark};
            }
          }
        }

        .card-greeting {
          
          font-size: 3vw;
					
          letter-spacing: -0.08rem;
          line-height: 3vw;
          height: 40%;
          text-align: center;
        }
				


				&:nth-of-type(1) {
					background-color: ${({ theme }) => theme.colors.blue};
					transform: rotate(20deg);
				}

				&:nth-of-type(2) {
          background-color: ${({ theme }) => theme.colors.yellow};
					
					z-index: 99;
					
					transform: rotate(-10deg);
				}

				&:nth-of-type(3) {
					
					z-index: 99;
					background-color: ${({ theme }) => theme.colors.grey};
					transform: rotate(4deg);
				}

				&:nth-of-type(4) {
					
					z-index: 99;
					background-color: ${({ theme }) => theme.colors.red};
					transform: rotate(-20deg);
				}

				&:nth-of-type(5) {
					
					z-index: 99;
					background-color: ${({ theme }) => theme.colors.orange};
					transform: rotate(20deg);
				}

				&:nth-of-type(6) {
	
					z-index: 99;
					background-color: ${({ theme }) => theme.colors.pink};
					transform: rotate(-3deg);
				}

				&:nth-of-type(7) {
					
					z-index: 99;
					background-color: ${({ theme }) => theme.colors.green};
					transform: rotate(-20deg);
				}

				&:nth-of-type(8) {
					
					z-index: 99;
					background-color: ${({ theme }) => theme.colors.purple};
					transform: rotate(5deg);
				}
			}
		
	}
`;
