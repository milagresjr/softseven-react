import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css';
import AOS from 'aos';
// import GLightbox from 'glightbox';
// import Swiper from 'swiper/bundle';
import './assets/css/main.css'
import App from './App.tsx'

// Inicialize as bibliotecas
AOS.init();
//GLightbox();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
