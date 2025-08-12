import Image from "next/image";

export const metadata = {
  title: 'Our Team - Sterling & Associates',
};

export default function Team() {
  return (
    // Team Section
    <section id="team" className="team">
        <div className="container">
            <div className="section-header">
                <h2>Our Legal Team</h2>
                <p>Experienced attorneys dedicated to your success</p>
            </div>
            <div className="team-grid">
                <div className="team-member">
                    <div className="member-image">
                        <Image src="/assets/image/mizanur_rahman.jpg" width={500} height={600} alt="Sarah Sterling" />
                    </div>
                    <div className="member-info">
                        <h3>Sarah Sterling</h3>
                        <p className="member-title">Managing Partner</p>
                        <p className="member-specialties">Corporate Law, M&A</p>
                        <p>Harvard Law School graduate with 15+ years specializing in corporate transactions and business law.</p>
                        <div className="member-contact">
                            <a href="mailto:s.sterling@sterlinglaw.com"><i className="fas fa-envelope"></i></a>
                            <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="member-image">
                        <Image src="/assets/image/female-avatar.png" width={500} height={600} alt="Michael Chen" />
                    </div>
                    <div className="member-info">
                        <h3>Michael Chen</h3>
                        <p className="member-title">Senior Partner</p>
                        <p className="member-specialties">Litigation, Criminal Defense</p>
                        <p>Former prosecutor with 12+ years of trial experience in both civil and criminal matters.</p>
                        <div className="member-contact">
                            <a href="mailto:m.chen@sterlinglaw.com"><i className="fas fa-envelope"></i></a>
                            <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
