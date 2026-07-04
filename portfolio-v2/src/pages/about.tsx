import avatar from "../assets/images/avatar-port-no-bg.png";
export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">

        <div className="about__content">

          <div className="about__data">
            <h2 className="section__title">About Me</h2>

            <p className="about__description">
              I am Nguyen Phan Gia Bao, a dedicated web developer...
            </p>

            <a href="#contact" className="button button__ghost">
              Contact Me
            </a>
          </div>

          <div className="about__skills">
            <h3 className="about__subtitle">
              <i className="ri-bookmark-3-fill"></i>
              <span>Skills</span>
            </h3>

            <ul className="about__items">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "ReactJS",
                "Python",
                "Wordpress",
                "Express",
                "GitHub",
                "Bootstrap",
              ].map((skill) => (
                <li key={skill} className="about__item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="about__image">
          <img
            src={avatar} alt="Gia Bao" className="about__img"
          />
        </div>

      </div>
    </section>
  );
}