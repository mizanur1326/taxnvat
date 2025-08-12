import Image from "next/image";
export const metadata = {
  title: "About Us - Sterling & Associates",
};

export default function AboutPage() {
  return (
    // About Section
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2>About Sterling & Associates</h2>
              <p>Excellence in legal representation since 1998</p>
            </div>
            <p>Founded on the principles of integrity, excellence, and client advocacy, Sterling & Associates has grown to become one of the regions most respected law firms. Our team combines decades of experience with innovative legal strategies to achieve the best possible outcomes for our clients.</p>
            <div className="about-features">
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Personalized attention to every case</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Transparent communication throughout</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Proven track record of success</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Competitive and fair pricing</span>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary">
              Get Started Today
            </a>
          </div>
          <div className="about-image">
            <Image
              src="/assets/image/mizanur_rahman.jpg"
              width={500}
              height={600}
              alt="Professional law office"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
