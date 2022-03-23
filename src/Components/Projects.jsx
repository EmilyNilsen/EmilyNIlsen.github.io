import React from "react";
import image from "../images/computador.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export default function Projects() {
  return (
    <section id="projects" className="container-projetos">
      <div class="conteudo-projetos" data-aos="fade-up-right">
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
                <h3>Projeto Trivia React Redux</h3>
                <p>
                Projeto em grupo proposto pelo curso da Trybe em que deveria ser criado um jogo de perguntas e respostas baseado no jogo Trivia (tipo um show do milhão americano) utilizando React e Redux.
                </p>
                <h6>Repositório do projeto: https://github.com/EmilyNilsen/project-trivia-react-redux</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-list">
              <img src={image} alt="computador" className="image-computador" />
              <div className="container-text-projects">
                <h3>Projeto Store Manager </h3>
                <p>
                Projeto proposto pelo curso da Trybe, em que foi desenvolvido uma API de um CRUD (Create, Read, Update e Delete) utilizando a arquitetura MSC. Foi desenvolvido um sistema de gerenciamento de vendas, onde será possível criar, visualizar, deletar, atualizar produtos e vendas e mais de 40% de cobertura de testes unitários.
                </p>
                <h6>Repositório do projeto: https://github.com/EmilyNilsen/project-store-manager</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-list">
              <img src={image} alt="computador" className="image-computador" />
              <div className="container-text-projects">
                <h3>Projeto OriginSix</h3>
                <p>
                OriginSix é uma página institucional no formato One Page, responsiva, para usar em diversos tipos de micro, pequena e média empresas. Contém as seguintes seções: Header, Navigation, Home, Sobre, Serviços, Depoimentos, Contato e Footer. Projeto foi executado junto as aulas disponíveis na plataforma da Rocketseat.
                </p>
                <h6>Repositório do projeto: https://github.com/EmilyNilsen/nlw_origin</h6>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

