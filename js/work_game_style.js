import styled from "styled-components";

export const StyledGame = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  

  &:focus {
    outline: none;
  }

  div {
    flex: 1 1 0px;
    transition: background-color 0.5s ease-out;
    background: ${({ open }) => open ? "#3e563e" : "rgba(0,0,0, 0.4)"};
    border-radius: 4px;
    box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.2);
    padding: 20px 80px 20px 80px;
    
    // &:hover {
    // background: rgba(63, 93, 64, 0.9);
    // }
    
    img {
    filter: invert(100%);
    }
  }
`;

