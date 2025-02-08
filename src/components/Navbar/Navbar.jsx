import {useState} from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    // const togged = JSON.parse(localStorage.getItem('isToggled'));

    // const [isToggled, setIsToggled] = useState(togged)

    // const toggleTheme = () => {
    //     setIsToggled((toggled) => !toggled)
    //     localStorage.setItem('isToggled', JSON.stringify(!isToggled));
    // }

    return (
        <nav>
            <a className='nav-title' href='https://leeding.dev'>LEEDING.dev</a>

            <Link className="nav-title secondary" to="/">LEETCODE</Link>
        </nav>
    )
}

export default Navbar