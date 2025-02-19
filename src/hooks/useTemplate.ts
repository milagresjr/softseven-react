import { useEffect } from 'react';
import AOS from 'aos';
import GLightbox from 'glightbox';
// import Isotope from 'isotope-layout';
// import Waypoint from 'waypoints';

export default function useTemplate() {
  useEffect(() => {
    // 1. Scroll handler
    const toggleScrolled = () => {
      const selectHeader = document.querySelector('#header');
      if (!selectHeader) return;
      
      const shouldAdd = window.scrollY > 100;
      document.body.classList.toggle('scrolled', shouldAdd);
    };

    // 2. Mobile Nav
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    const mobileNavToogle = () => {
      document.body.classList.toggle('mobile-nav-active');
      mobileNavToggleBtn?.classList.toggle('bi-list');
      mobileNavToggleBtn?.classList.toggle('bi-x');
    };

    // 3. Inicialização de bibliotecas
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    const glightbox = GLightbox({ selector: '.glightbox' });
    
    // 4. Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => preloader.remove(), 1000); // Ajuste o tempo conforme necessário
    }

    // Adicione event listeners
    window.addEventListener('scroll', toggleScrolled);
    mobileNavToggleBtn?.addEventListener('click', mobileNavToogle);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', toggleScrolled);
      mobileNavToggleBtn?.removeEventListener('click', mobileNavToogle);
      glightbox.destroy();
    };
  }, []);
}