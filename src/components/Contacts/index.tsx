import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'
import { ContactType } from '../../types';
import { sendMail } from '../../service/contact';
import Swal from 'sweetalert2';
import { useState } from 'react';


export default function Contacts() {

    const [loading,setLoading] = useState(false);

    const schema = z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        email: z.string().email("Email inválido"),
        subject: z.string().min(1, "Assunto é obrigatório"),
        message: z.string().min(1, "Mensagem é obrigatória"),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data: ContactType) => {
        setLoading(true);
        try {
            await sendMail(data);
            Swal.fire({
                title: "",
                text: "Mensagem enviada com sucesso!",
                icon: "success"
              });
              reset();
        } catch (error) {
            console.log("Erro ao enviar o email",error);
        } finally {
            setLoading(false);
            reset();
        }
    };

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
                        <form onSubmit={handleSubmit(onSubmit)} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                            <div className="row gy-4">

                                <div className="col-md-6">
                                    <label htmlFor="name-field" className="pb-2">Seu Nome</label>
                                    <input type="text" id="name-field" className="form-control" {...register("name")} />
                                    {errors.name && <p className="error-message">{errors.name.message}</p>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="email-field" className="pb-2">Seu Email</label>
                                    <input type="email" className="form-control" id="email-field" {...register("email")} />
                                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="subject-field" className="pb-2">Assunto</label>
                                    <input type="text" className="form-control" id="subject-field" {...register("subject")} />
                                    {errors.subject && <p className="error-message">{errors.subject.message}</p>}
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="message-field" className="pb-2">Mensagem</label>
                                    <textarea className="form-control" rows={10} id="message-field" {...register("message")}></textarea>
                                    {errors.message && <p className="error-message">{errors.message.message}</p>}
                                </div>

                                <div className="col-md-12 text-center">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>

                                    <button type="submit">{`${loading ? 'Carregando...' : 'Enviar Mensagem'}`}</button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </section>

    );
}
