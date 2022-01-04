import styled from "styled-components";
import { shuffleColors } from "../../../helpers/shuffleColors";

export const StyledFooter = styled.footer`
	color: blue;

	.footer-cards {
		width: 65%;
		height: 35%;
		position: absolute;
    font-family: 'Kobe Bold';
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);

		.footer-cards__inner {
			height: 100%;
			width: 100%;
			position: relative;

			.footer-cards__card {
				display: block;
				position: absolute;
				left: 0;
				bottom: 0;
				height: 400px;
				width: 300px;
        padding: 3rem;
        color ${({theme}) => theme.colors.dark};

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
						padding: 0 2rem;
					}

          .card-cta__text {
            font-size: 1.4rem;
          }


          .arrow-svg {
            width: 3rem;
            transform: rotate(-35deg);
            transform-origin: center;
            path {
              fill: ${({theme}) => theme.colors.dark};
            }
          }
        }

        .card-greeting {
          
          font-size: 3rem;
          letter-spacing: -0.1rem;
          line-height: 2.4rem;
          height: 40%;
          text-align: center;
          

      

        }
				

        &:hover {
          cursor: pointer;
        }

				&:nth-of-type(1) {
					background-color: ${({theme}) => theme.colors.blue};
					transform: rotate(20deg);
				}

				&:nth-of-type(2) {
          background-color: ${({theme}) => theme.colors.yellow};
					left: 10%;
					z-index: 99;
					
					transform: rotate(-10deg);
				}

				&:nth-of-type(3) {
					left: 20%;
					z-index: 99;
					background-color: ${({theme}) => theme.colors.grey};
					transform: rotate(4deg);
				}

				&:nth-of-type(4) {
					left: 30%;
					z-index: 99;
					background-color: ${({theme}) => theme.colors.red};
					transform: rotate(-20deg);
				}

				&:nth-of-type(5) {
					left: 40%;
					z-index: 99;
					background-color: ${({theme}) => theme.colors.orange};
					transform: rotate(20deg);
				}

				&:nth-of-type(6) {
					left: 50%;
					z-index: 99;
					background-color: ${({theme}) => theme.colors.pink};
					transform: rotate(-3deg);
				}

				&:nth-of-type(7) {
					left: 60%;
					z-index: 99;
					background-color: ${({theme}) => theme.colors.green};
					transform: rotate(-20deg);
				}

				&:nth-of-type(8) {
					left: 60%;
					z-index: 99;
					background-color: ${({theme}) => theme.colors.purple};
					transform: rotate(5deg);
				}
			}
		}
	}
`;
