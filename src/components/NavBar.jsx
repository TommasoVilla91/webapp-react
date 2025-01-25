import { NavLink } from "react-router-dom";

function NavBar() {

    const navLinks = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/movies",
            title: "Film"
        }
    ];

    return (
        <>
            <nav className="container">
                <div className="row">
                    <div className="col-20">
                        <div>
                            <img className="logo" src="../public/logo.png" alt="logo" />
                        </div>
                    </div>
                    <div className="col-20">
                        <ul className="navlink-list">
                            {navLinks.map((curLink, index) => (
                                <li className="nav-item" key={index}>
                                    <NavLink to={curLink.path}>{curLink.title}</NavLink>
                                </li>
                            ))}                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar