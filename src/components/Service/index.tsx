import ItemService from "../ItemService"


export default function Service() {
    return (

        <section id="services" className="services section light-background">


            <div className="container section-title" data-aos="fade-up">
                <h2>Nossos serviços</h2>
            </div>

            <div className="container">

                <div className="row gy-4">


                    <ItemService
                        icon={<i className="bi bi-tools icon"></i>}
                        title="Suporte a Sistemas"
                        description="Temos uma abrangência em suporte a sistemas na área de tecnologia de informação diversificada e com experiência de mercado em suporte a pequenas, médias e grandes empresas."
                    />

                    <ItemService
                        icon={<i className="bi bi-cpu icon"></i>}
                        title="Hardware"
                        description="Oferecemos uma vasta gama de soluções em manutenção de hardware, otimizamos o desempenho dos equipamentos através de metodologias e aconselhamento de melhor uso."
                    />

                    <ItemService
                        icon={<i className="bi bi-diagram-3 icon"></i>}
                        title="Comunicação & Infraestrutura"
                        description="A Softseven oferece uma gama completa de serviços para construir e gerenciar sua infraestrutura de TI, adequando-se às necessidades da sua organização."
                    />

                    <ItemService
                        icon={<i className="bi bi-globe icon"></i>}
                        title="Registro de Domínio e E-mail Corporativo"
                        description="Mail Hosting é a solução que oferecemos para empresas. Hospedamos seu domínio de e-mail com alta disponibilidade e segurança, incluindo serviços como Microsoft Exchange, IMAP e POP Mail."
                    />

                    <ItemService
                        icon={<i className="bi bi-code-slash icon"></i>}
                        title="Desenvolvimento Web"
                        description="Soluções para desenvolvimento de sistemas web personalizados, utilizando tecnologias modernas, seguras e eficientes para garantir alta produtividade e alinhamento com os interesses do cliente."
                    />

                    <ItemService
                        icon={<i className="bi bi-pc-display icon"></i>}
                        title="Material Informático"
                        description="Fornecemos soluções de tecnologia de ponta para atender às necessidades do seu negócio, garantindo qualidade e inovação."
                    />

                    <ItemService
                        icon={<i className="bi bi-box-seam icon"></i>}
                        title="Equipamentos & Consumíveis"
                        description="Fornecemos equipamentos e consumíveis de informática de alta qualidade, garantindo melhor desempenho e durabilidade para seus sistemas."
                    />


                </div>

            </div>

        </section>
    )

}