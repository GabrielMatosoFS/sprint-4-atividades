import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/testmonials">Testmonials</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}