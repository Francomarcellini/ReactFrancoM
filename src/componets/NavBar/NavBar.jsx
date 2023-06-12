import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>GEEK N RESIN </h1>

        <nav>
            <ul>
                <li>PRODUCTOS</li>
                <li>GALERIA</li>
                <li>SOBRE NOSOTROS</li>
            </ul>
        </nav>
        <CardWidget/>
    </header>
  )
}

export default NavBar