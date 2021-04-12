import styled from 'styled-components';
import "../sass/mixin.scss"


export const StyledGameContent= styled.div`
    height:100%;
    width:100%;
    margin-top: 50px;
    box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.2);
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-200%)'};
    padding:30px;
    
    p {
        margin-bottom:20px;
        
        @include mobile {
        font-size: 1rem;
        }
    } 
`;

