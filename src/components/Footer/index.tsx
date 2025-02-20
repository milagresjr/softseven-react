
export default function Footer() {

    return (

        <>

            <footer id="footer" className="footer">

                <div className="footer-newsletter hidden">

                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-6">
                                <h4>Join Our Newsletter</h4>
                                <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                                <form action="" method="post" className="php-email-form">
                                    <div className="newsletter-form">
                                        <input type="email" name="email" />
                                        <input type="submit" value="Subscribe" />
                                    </div>
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your subscription request has been sent. Thank you!</div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <a href="index.html" className="d-flex align-items-center">
                                <span className="sitename">SoftSeven</span>
                            </a>
                            <div className="footer-contact pt-3">
                                <p>Rua dos Jornalistas, Casa nº 36</p>
                                <p>Condomínio dos Jornalistas Camama , Talatona - Luanda</p>
                                <p className="mt-3"><strong>Telefone:</strong> <span>+244 922 347 330</span></p>
                                <p><strong>Email:</strong> <span>geral@softseven.ao</span></p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Links úteis</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Quem somos</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Serviços</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Clientes</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Nossos Serviços</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Suporte a Sistemas</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Desenvolvimento Web</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Hardware</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Equipamentos & Consumíveis</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <h4>siga-nos</h4>
                            <p>Siga-nos nas rede-socias.</p>
                            <div className="social-links d-flex">
                                <a href=""><i className="bi bi-twitter-x"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container copyright text-center mt-4">
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">Softseven</strong> <span>Todos Direito Reservado</span></p>
                </div>
            </footer>

            {/* <!-- Scroll Top --> */}
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>


        </>

    )
}