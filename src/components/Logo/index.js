import styled from 'styled-components';
import logo from '../../images/logo.svg';

const LogoContainer = styled.div`
display: flex;
font-size: 25px;
`

const LogoImg = styled.img`
margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImg
                src={logo}
                alt='logo'
                className='logo-img'
            />
            <p><strong>React</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo;