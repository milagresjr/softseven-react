

export default function About() {

    return (

        <section id="about" className="about section">


            <div className="container section-title" data-aos="fade-up">
                <h2>Quem Somos</h2>
            </div>

            <div className="container">

                <div className="row gy-4">

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                       <img src="/assets/img/about-us.png" alt="Sobre-nos" width={400} height={400} />
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <p className="text-justify text-indent-md">
                            Softseven, Lda. é uma empresa constituída sob a forma
                            de sociedade por quotas de responsabilidade limitada,
                            devidamente registada na conservatória de registo
                            comercial de Luanda e tem como principal atividade
                            prestação de serviços em tecnologias de informação.
                        </p>
                        <p className="text-justify text-indent-md">
                            Somos uma empresa com ideias inovadoras, temos
                            atenção voltada a pequenas e médias empresas
                            trazendo soluções fiáveis e funcionais a custo baixos,
                            pré dispomo-nos a novos desafios e responsabilidades
                            dentro das nossas áreas de atuação através de suporte
                            especializado e pessoal qualificado, estamos em
                            território nacional atuando nas áreas de tecnologia de
                            informação.
                        </p>
                        <a href="#" className="read-more"><span>Saber Mais</span><i className="bi bi-arrow-right"></i></a>
                    </div>

                </div>

            </div>

        </section>
    );
}                   