import React from "react";

export default function Header() {
  return(
    <header id='header' className='header-page'>
      <h3> Portfólio </h3>
      <nav className='links'>
      <a href='#about'>Sobre mim</a>
      <a href='#skills'>Habilidades</a>
      <a href='#projects'>Projetos</a>
      </nav>
    </header>
    )
}