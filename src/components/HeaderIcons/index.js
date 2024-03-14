import './style.css'
import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'

const icons = [perfil, sacola]

function HeaderIcons() {
    return (
        <ul className='icons'>
          { icons.map( (icon) => (
            <li className='icon'><img src={icon} alt='icon'></img></li>
          ) )}
        </ul>
    )
}

export default HeaderIcons