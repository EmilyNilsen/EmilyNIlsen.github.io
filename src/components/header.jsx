import React from "react";

export default function Header() {
  return (
    <header id="header" className="header-page">
      <div>
        <span className="brackets">{"{"}</span>
        <span>DevEmily🌻</span>
        <span className="brackets">{"}"}</span>
      </div>
      <nav className="links">
        <a href="#about">Sobre mim</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Projetos</a>
      </nav>
    </header>
  );
}
