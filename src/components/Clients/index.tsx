
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default function Clients() {
  return (

    <section id="clients" className="clients section">

      <div className="bg-white pt-5">

        <div className="container section-title" data-aos="fade-up">
          <h2>Clientes</h2>
        </div>

      </div>

      <div className="container" data-aos="zoom-in">
        <Swiper
          modules={[Navigation, Autoplay]} // Adiciona navegação e autoplay
          navigation={false} // Desativa navegação
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Ativa autoplay
          loop={true} // Loop infinito
          spaceBetween={30} // Espaço entre os slides
          slidesPerView={4} // Quantidade de imagens visíveis ao mesmo tempo
          breakpoints={{
            320: { slidesPerView: 1 }, // Em telas pequenas, mostra 1 slide
            480: { slidesPerView: 2 }, // Em telas médias, mostra 2 slides
            768: { slidesPerView: 3 }, // Em tablets, mostra 3 slides
            1024: { slidesPerView: 4 }, // Em telas grandes, mostra 4 slides
          }}
        >
          <SwiperSlide><img src="/assets/img/clients/client-1.png" className="img-fluid w-[200px]" alt="Cliente 1" width={200} height={200} /></SwiperSlide>
          <SwiperSlide><img src="/assets/img/clients/client-22.jpg" className="img-fluid w-[200px]" alt="Cliente 2" width={200} height={200} /></SwiperSlide>
          <SwiperSlide><img src="/assets/img/clients/client-n3.jpg" className="img-fluid w-[200px]" alt="Cliente 3" width={200} height={200} /></SwiperSlide>
          <SwiperSlide><img src="/assets/img/clients/client-n5.jpg" className="img-fluid w-[200px]" alt="Cliente 4" width={200} height={200} /></SwiperSlide>
          <SwiperSlide><img src="/assets/img/clients/client-n6.jpg" className="img-fluid w-[200px]" alt="Cliente 5" width={200} height={200} /></SwiperSlide>
          <SwiperSlide><img src="/assets/img/clients/client-n7.jpg" className="img-fluid w-[200px]" alt="Cliente 6" width={200} height={200} /></SwiperSlide>
          <SwiperSlide><img src="/assets/img/clients/client-n1.jpg" className="img-fluid w-[200px]" alt="Cliente 7" width={200} height={200} /></SwiperSlide>
          {/* <SwiperSlide><img src="/assets/img/clients/client-n4.jpg" className="img-fluid w-[200px]" alt="Cliente 7" width={200} height={200} /></SwiperSlide> */}
        </Swiper>
      </div>

    </section>
  );
}