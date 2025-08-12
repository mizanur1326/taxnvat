export const metadata = {
  title: 'Practice Area - Sterling & Associates',
};

export default function Practice() {
  return (
    // Practice Section
    <section id="services" className="services">
        <div className="container">
            <div className="section-header">
                <h2>Practice Areas</h2>
                <p>Comprehensive legal services tailored to your unique needs</p>
            </div>
            <div className="services-grid">
                <div className="service-card">
                    <div className="service-icon">
                        <i className="fas fa-building"></i>
                    </div>
                    <h3>Corporate Law</h3>
                    <p>Business formation, mergers & acquisitions, compliance, and corporate governance for companies of all sizes.</p>
                    <a href="#contact" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <i className="fas fa-gavel"></i>
                    </div>
                    <h3>Civil Litigation</h3>
                    <p>Aggressive representation in commercial disputes, personal injury cases, and complex civil matters.</p>
                    <a href="#contact" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <i className="fas fa-home"></i>
                    </div>
                    <h3>Family Law</h3>
                    <p>Divorce, child custody, adoption, and other family matters handled with care and discretion.</p>
                    <a href="#contact" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <i className="fas fa-file-contract"></i>
                    </div>
                    <h3>Estate Planning</h3>
                    <p>Wills, trusts, probate administration, and comprehensive estate planning strategies.</p>
                    <a href="#contact" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <i className="fas fa-shield-alt"></i>
                    </div>
                    <h3>Criminal Defense</h3>
                    <p>Experienced defense for white-collar crimes, DUI, and other criminal charges.</p>
                    <a href="#contact" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <i className="fas fa-handshake"></i>
                    </div>
                    <h3>Employment Law</h3>
                    <p>Workplace disputes, discrimination claims, and employment contract negotiations.</p>
                    <a href="#contact" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>
  );
}