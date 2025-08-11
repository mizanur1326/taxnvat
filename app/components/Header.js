import Link from "next/link";
import CustomLink from "./CustomLink";

export default function Header() {
  return (
    // Header
    <header className="header">
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <h2>Sterling & Associates</h2>
                </div>
                <ul className="nav-menu">
                    <li><CustomLink path="/" className="nav-link">Home</CustomLink></li>                    
                    <li><CustomLink path="/about" className="nav-link">About</CustomLink></li>
                    <li><CustomLink path="" className="nav-link">Contact</CustomLink></li>
                    <li><CustomLink path="" className="nav-link">Consultation</CustomLink></li>
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    </header>
  );
}
