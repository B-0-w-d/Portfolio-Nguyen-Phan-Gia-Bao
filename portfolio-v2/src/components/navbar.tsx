function Navbar() {
  return (
    <header className="header">
      <nav className="nav container">
            <a href="#" className="nav__logo">Bao</a>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li>
                        <a href="#home" className="nav__link active-link">Home</a>
                    </li>

                    <li>
                        <a href="about.html" className="nav__link">About</a>
                    </li>

                    <li>
                        <a href="projects.html" className="nav__link">Projects</a>
                    </li>

                    <li>
                        <a href="resume.html" className="nav__link">Resume</a>
                    </li>

                    <li>
                        <a href="contact.html" className="nav__link">Contact</a>
                    </li>
                </ul>
            {/* Close button */}
             <div className="nav__close" id="nav-close">
                <i className="ri-close-large-line"></i>
             </div>
            </div>

            {/* Toggle button */}
             <div className="nav__toggle" id="nav-toggle">
                <i className="ri-menu-line"></i>
             </div>
         </nav>
    </header>
  );
}

export default Navbar;