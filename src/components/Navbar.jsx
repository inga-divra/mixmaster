import { NavLink } from "react-router-dom"
import StyleWrapper from '../assets/styleWrappers/Navbar';

const Navbar = () => {
    return (
        <StyleWrapper>
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
                        className="nav-link"
                        to="/newsletter">
                        Newsletter
                    </NavLink >
                </div>
            </div>
        </StyleWrapper>
    )
}

export default Navbar