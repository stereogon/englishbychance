import Logo from "./Logo";
import "../styles/navbar.css";

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="nav-left">
                        <Logo />
                    </div>
                    <div className="nav-right"></div>
                </div>
            </nav>
        </>
    );
}
