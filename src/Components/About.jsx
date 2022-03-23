import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export default function About() {
  return (
    <section  id="about" className="container-about">
      <h1>Sobre mim</h1>
      <p>
        Sou formada em Processos Gerenciais pela Uniasselvi (Blumenau-SC), apaixonada por tecnologia e negócios. A curiosidade me move e se eu não sei algo, vou me esforçar para aprender.
        No momento estou em transição de
        carreira, estudando Desenvolvimento Web na Trybe, uma escola que prepara
        profissionais para o mercado de TI. Passei pelo módulo de frontend no curso da Trybe e estou finalizando o módulo de backend e isso é só o começo!🚀💚
      </p>
      <section className="container-contact ">
        <div className="container-icons">
          <i>
            <AiOutlineLinkedin size="1.5rem" />
          </i>
          <i>
            <AiFillGithub size="1.5rem" />
          </i>
        </div>
        <div className="container-infos">
            <a
              href="https://www.linkedin.com/in/emily-nilsen-carvalho/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/EmilyNilsen"
              target="_blank"
              rel="noreferrer"
            >
              Repositório Github
            </a>
        </div>
      </section>
    </section>
  );
}
