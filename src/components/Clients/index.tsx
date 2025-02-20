
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
          modules={[Navigation, Autoplay]}
          navigation={false}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {[
            "client-1.png",
            "client-22.jpg",
            "client-n3.jpg",
            "client-n5.jpg",
            "client-n6.jpg",
            "client-n7.jpg",
            "client-n1.jpg",
          ].map((src, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <img
                  src={`/assets/img/clients/${src}`}
                  className="img-fluid w-[150px] md:w-[200px]"
                  alt={`Cliente ${index + 1}`}
                  width={200}
                  height={200}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


    </section>
  );
}