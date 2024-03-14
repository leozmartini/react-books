import styled from 'styled-components';
import Logo from '../Logo';
import HeaderOptions from '../HeaderOptions';
import HeaderIcons from '../HeaderIcons';

const HeaderConainter = styled.header`
  background-color: white;
  display: flex;
  justify-content: center;
`

function Header() {
    return (
        <HeaderConainter>
        <Logo></Logo>
        <HeaderOptions></HeaderOptions>
        <HeaderIcons></HeaderIcons>
      </HeaderConainter>
    )
}

export default Header