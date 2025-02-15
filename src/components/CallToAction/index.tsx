
export default function CallToAction() {
    return(
       
        <section id="call-to-action" className="call-to-action section dark-background">
    
          <img src="/assets/img/cta-bg.jpg" alt="" width={200} height={200} />
    
          <div className="container">
    
            <div className="row" data-aos="zoom-in" data-aos-delay="100">
              <div className="col-xl-9 text-center text-xl-start">
                <h3>Redes Sociais</h3>
                <p>
                Acompanhe nossas soluções e novidades nas redes sociais.
                Siga-nos no LinkedIn, Instagram e Facebook!
                </p>
              </div>
              <div className="col-xl-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="#">Call To Action</a>
              </div>
            </div>
    
          </div>
    
        </section>
    
    );
}
