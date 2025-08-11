export default function Footer() {
  return (
//  Footer
    <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Sterling & Associates</h3>
                    <p>Providing exceptional legal representation with integrity, dedication, and results since 1998.</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Practice Areas</h4>
                    <ul>
                        <li><a href="#services">Corporate Law</a></li>
                        <li><a href="#services">Civil Litigation</a></li>
                        <li><a href="#services">Family Law</a></li>
                        <li><a href="#services">Estate Planning</a></li>
                        <li><a href="#services">Criminal Defense</a></li>
                        <li><a href="#services">Employment Law</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#team">Our Team</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#">Client Portal</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <div className="footer-contact">
                        <p><i className="fas fa-map-marker-alt"></i> 1250 Financial Plaza, Suite 3000<br />Downtown District, NY 10001</p>
                        <p><i className="fas fa-phone"></i> <a href="tel:+1-555-123-4567">(555) 123-4567</a></p>
                        <p><i className="fas fa-envelope"></i> <a href="mailto:info@sterlinglaw.com">info@sterlinglaw.com</a></p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-legal">
                    <p>&copy; 2024 Sterling & Associates. All rights reserved.</p>
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Disclaimer</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}
