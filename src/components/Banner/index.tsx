import ParticlesComponent from '../ParticlesBackground';
import './styles.css';

export default function Banner() {
    return (
        <section id="hero" className="hero section dark-background">
            <ParticlesComponent id="tsparticles" />

            <div className="container position-relative">
                <div className="row gy-4">
                    <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
                        <h1>Melhores soluções para o seu negócio</h1>
                        <p>Somos uma equipe criativa e experiente, desenvolvendo soluções digitais modernas e sob medida para sua empresa.</p>
                        <div className="d-flex">
                            <a href="#about" className="btn-get-started">Começa Aqui</a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src="/assets/img/hero-img.png" className="img-fluid animated" alt="" width={700} height={400} />
                    </div>
                </div>
            </div>
        </section>
    );
}
         