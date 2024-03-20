import styled from 'styled-components';
import Logo from '../Logo';
import HeaderOptions from '../HeaderOptions';
import HeaderIcons from '../HeaderIcons';
import { Link } from 'react-router-dom';

const HeaderConainter = styled.header`
  background-color: white;
  display: flex;
  justify-content: center;
`

function Header() {
    return (
        <HeaderConainter>
        <Link to="/"> <Logo/> </Link>  
        <HeaderOptions/>
        <HeaderIcons/>
      </HeaderConainter>
    )
}

export default Header