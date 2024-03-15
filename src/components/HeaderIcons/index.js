import styled from 'styled-components';
import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';

const Icons = styled.ul`
display: flex;
align-items: center;
`

const Icon = styled.li`
margin-right: 40px;
width: 25px;
`

const icons = [perfil, sacola]

function HeaderIcons() {
    return (
        <Icons>
          { icons.map( (icon) => (
            <Icon><img src={icon} alt='icon'></img></Icon>
          ) )}
        </Icons>
    )
}

export default HeaderIcons