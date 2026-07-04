import Navbar from "../components/navbar";
import avatar from "../assets/images/avatar-port-no-bg.png";
function Home() {
  return (
    <>
      <Navbar />

      <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content">
                    <div className="home__image">
                        <img src={avatar} alt="Gia Bao" className="home__img" />
                    </div>

                    <div className="home__social">
                        <a href="#" target="_blank" className="home__link">
                            <i className="ri-facebook-box-fill"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/bao-nguyen707010/" target="_blank" className="home__link">
                            <i className="ri-linkedin-box-fill"></i>
                        </a>

                        <a href="#" target="_blank" className="home__link">
                            <i className="ri-github-fill"></i>
                        </a>
                    </div>
                </div>

                <div className="home__data grid">
                    <p className="home__subtitle">
                        {/* <!-- type js  --> */}
                        Hello, I'm a <span id="home-typed"></span>
                    </p>

                    <h1 className="home__title">Nguyen Phan Gia Bao</h1>

                    <p className="home__description">
                        I aim to grow in a creative environment where I can contribute to the entire product design process. My goal is to strengthen my skills in UI visuals, design systems, prototyping, and UX research to become a well-rounded UX/UI Designer who delivers meaningful value to users and businesses.
                    </p>
                    <div className="home__buttons">
                        <a href="assets/img/Nguyen-Phan-Gia-Bao-CV.pdf" target="_blank" className="button">Download Cv</a>
                        <a href="#projects" className="button button__ghost">Projects</a>
                    </div>
                </div>
            </div>
         </section>
    </>
  );
}

export default Home;