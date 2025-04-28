
import { useEffect, useState } from "react";

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuItemClick = () => {
    const body = document.querySelector('body');
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  
    if (body?.classList.contains('mobile-nav-active')) {
      body.classList.remove('mobile-nav-active');
      mobileNavToggleBtn?.classList.add('bi-list');
      mobileNavToggleBtn?.classList.remove('bi-x');
    }
  };
  


  return (
    <header
      id="header"
      className="header d-flex align-items-center fixed-top"
      style={{
        backgroundColor: isScrolled ? '' : 'transparent',
        zIndex: 1000,
      }}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">

        <a href="#hero" className="d-flex align-items-center me-auto">
          <img
            src="/assets/img/logo2.png"
            width={180}
            alt="Logo"
          />
          <h1 className="hidden sitename">SoftSeven</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" onClick={handleMenuItemClick}>Home</a></li>
            <li><a href="#about" onClick={handleMenuItemClick}>quem somos</a></li>
            <li><a href="#services" onClick={handleMenuItemClick}>Serviços</a></li>
            <li><a href="#clients" onClick={handleMenuItemClick}>Clientes</a></li>
            <li className="hidden dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li>
            <li><a href="#contact" onClick={handleMenuItemClick}>Contacto</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        {/* <a className="btn-getstarted" href="#about">Saber Mais</a> */}

      </div>
    </header>
  );
}