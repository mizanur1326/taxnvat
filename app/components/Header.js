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
                    <li><CustomLink path="/practice" className="nav-link">Practice Areas</CustomLink></li>
                    <li><CustomLink path="/about" className="nav-link">About</CustomLink></li>
                    <li><CustomLink path="/team" className="nav-link">Our Team</CustomLink></li>
                    <li><CustomLink path="/contact" className="nav-link">Contact</CustomLink></li>
                    <li><Link href="/consultation" className="nav-link consultation-btn">Free Consultation</Link></li>
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
