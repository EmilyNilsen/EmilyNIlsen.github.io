import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export default function About() {
  return (
    <section  id="about" className="container-about">
      <h1>Sobre mim</h1>
      <p>
        Sou formada em Processos Gerenciais pela Uniasselvi (Blumenau-SC), sou
        apaixonada por tecnologia e negócios. No momento estou em transição de
        carreira, estudando Desenvolvimento Web na Trybe, uma escola que prepara
        profissionais para o mercado de TI.
      </p>
      <section className="container-contact ">
        <di className="container-icons">
          <i>
            <BsEmojiSmile size="1.5rem" />
          </i>
          <i>
            <AiOutlineLinkedin size="1.5rem" />
          </i>
          <i>
            <AiFillGithub size="1.5rem" />
          </i>
        </di>
        <div className="container-infos">
          <p>Emily Nilsen Carvalho</p>
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
