import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <div className="nav-center">
                <span className="logo">MixMaxter</span>
                <div className="nav-links">
                    <NavLink
                        className="nav-link"
                        to="/">
                        Home
                    </NavLink >
                    <NavLink
                        className="nav-link"
                        to="/about">
                        About
                    </NavLink >
                    <NavLink
                        className="newsletter"
                        to="/">
                        Newsletter
                    </NavLink >
                </div>
            </div>
        </nav>
    )
}

export default Navbar