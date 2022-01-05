import styled from "styled-components";

export const StyledUnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-directon: ${(props) => props.flexColumn && 'flex-column'};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  font-family: 'Kobe';
  font-size: 1.3rem;

  .list-item {
    color: ${({theme}) => theme.colors.grey};
    transition: 300ms ease;

    &:nth-of-type(${(props) => props.activeLink}) {
      color: ${({theme}) => theme.colors.dark};
    }

    &:hover {
      color: ${({theme}) => theme.colors.dark};
    }

    &:not(:last-of-type) {
      margin-right: 5rem;
    }
  }

  

`