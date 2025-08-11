export const metadata = {
  title: 'Contact Us - Sterling & Associates',
};

export default function ContactPage() {
  return (
    // Contact Section
    <section id="contact" className="contact">
        <div className="container">
            <div className="section-header">
                <h2>Contact Us</h2>
                <p>Ready to discuss your legal needs? Get in touch today.</p>
            </div>
            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="contact-details">
                            <h3>Office Location</h3>
                            <p>1250 Financial Plaza<br />Suite 3000<br />Downtown District, NY 10001</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="contact-details">
                            <h3>Phone</h3>
                            <p><a href="tel:+1-555-123-4567">(555) 123-4567</a></p>
                            <p className="small">24/7 Emergency Line Available</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contact-details">
                            <h3>Email</h3>
                            <p><a href="mailto:info@sterlinglaw.com">info@sterlinglaw.com</a></p>
                            <p className="small">Response within 2 hours</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-clock"></i>
                        </div>
                        <div className="contact-details">
                            <h3>Office Hours</h3>
                            <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM<br />Sunday: By Appointment</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form id="contactForm">
                        <div className="form-group">
                            {/* <input type="text" id="name" name="name" placeholder="Full Name" required> */}
                        </div>
                        <div className="form-group">
                            {/* <input type="email" id="email" name="email" placeholder="Email Address" required> */}
                        </div>
                        <div className="form-group">
                            {/* <input type="tel" id="phone" name="phone" placeholder="Phone Number"> */}
                        </div>
                        <div className="form-group">
                            <select id="service" name="service" required>
                                <option value="">Select Practice Area</option>
                                <option value="corporate">Corporate Law</option>
                                <option value="litigation">Civil Litigation</option>
                                <option value="family">Family Law</option>
                                <option value="estate">Estate Planning</option>
                                <option value="criminal">Criminal Defense</option>
                                <option value="employment">Employment Law</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea id="message" name="message" placeholder="Brief Description of Your Legal Matter" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-full">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}
