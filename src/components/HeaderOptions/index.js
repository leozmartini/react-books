import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Options = styled.ul`
display: flex; 
`

const Option = styled.li`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: 100%;
padding: 0 5px;
cursor: pointer;
font-size: 16px;
min-width: 120px;
`

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']


function HeaderOptions() {
    return (
        <Options>
          {textOptions.map((text) => (
            <Link to={`/${text.toLowerCase()}`}> <Option><p>{text}</p></Option> </Link>
          ))}
        </Options>
    )
}

export default HeaderOptions