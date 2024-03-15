import styled from 'styled-components';

export const Title = styled.h2`
    color: ${props => props.color || 'black'};
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    font-size: ${props => props.fontSize || '18px'};
    text-align: ${props => props.textAlign || 'center'};
    margin: 0;
`