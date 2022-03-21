import React from "react";
import image from "../images/computador.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export default function Projects() {
  return (
    <section id="projects" className="conteudo-projetos">
      <div class="conteudo-projetos-escrito" data-aos="fade-up-right">
        <h3 className="title-projects">Projetos</h3>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-10/12 md:w-8/12"
        >
          <SwiperSlide>
            <div className="slide-list">
              <img src={image} alt="computador" className="image-computador" />
              <div className="container-text-projects">
                <h3>Projeto 1</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum perspiciatis debitis optio numquam laborum dolorum
                  maiores iusto laudantium blanditiis voluptatem eius commodi
                  voluptas, eligendi, sapiente illo officiis molestiae fugiat
                  excepturi.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={image} alt="computador" className="image-computador" />
              <div>
                <h3>Projeto 2</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum perspiciatis debitis optio numquam laborum dolorum
                  maiores iusto laudantium blanditiis voluptatem eius commodi
                  voluptas, eligendi, sapiente illo officiis molestiae fugiat
                  excepturi.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={image} alt="computador" className="image-computador" />
              <di>
                <h3>Projeto 2</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum perspiciatis debitis optio numquam laborum dolorum
                  maiores iusto laudantium blanditiis voluptatem eius commodi
                  voluptas, eligendi, sapiente illo officiis molestiae fugiat
                  excepturi.
                </p>
              </di>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
