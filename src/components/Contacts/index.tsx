// 'use client';

export default function Contacts() {
    return (

        <section id="contact" className="contact section light-background">


            <div className="container section-title" data-aos="fade-up">
                <h2>Contacto</h2>
             </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4">

                    <div className="col-lg-5">

                        <div className="info-wrap">
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                <i className="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <h3>Endereço</h3>
                                    <p>
                                    Rua dos Jornalistas, Casa nº 36, Condomínio 
                                    dos Jornalistas Camama , Talatona - Luanda
                                    </p>
                                </div>
                            </div>

                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                <i className="bi bi-telephone flex-shrink-0"></i>
                                <div>
                                    <h3>Telefone</h3>
                                    <p>+244 922 347 330</p>
                                </div>
                            </div>

                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                <i className="bi bi-envelope flex-shrink-0"></i>
                                <div>
                                    <h3>Email</h3>
                                    <p>geral@softseven.ao</p>
                                </div>
                            </div>
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31530.550191779414!2d13.222877278315691!3d-8.94274456973201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f5fe863e573d%3A0x659076c860d93bd5!2zU2hvcHBpbmcgUG9wdWxhciDmtbflsbHllYbotLjln44!5e0!3m2!1spt-PT!2sao!4v1739631775321!5m2!1spt-PT!2sao" 
                            style={{ border: 'none', width: '100%', height: '270px' }} 
                            allowFullScreen
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                            <div className="row gy-4">

                                <div className="col-md-6">
                                    <label htmlFor="name-field" className="pb-2">Seu Nome</label>
                                    <input type="text" name="name" id="name-field" className="form-control" required />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="email-field" className="pb-2">Seu Email</label>
                                    <input type="email" className="form-control" name="email" id="email-field" required />
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="subject-field" className="pb-2">Assunto</label>
                                    <input type="text" className="form-control" name="subject" id="subject-field" required />
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="message-field" className="pb-2">Mensagem</label>
                                    <textarea className="form-control" name="message" rows={10} id="message-field" required></textarea>
                                </div>

                                <div className="col-md-12 text-center">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>

                                    <button type="submit">Enviar Mensagem</button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </section>

    );
}
