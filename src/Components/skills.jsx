import React from "react";
import { DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiJest } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiGit } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { SiMocha } from "react-icons/si";

export default function Skilss() {
  return (
    <>
      <section id="skills" className="container-skills">
        <div>
          <h1>HardSkills</h1>
          <h3>Ferramentas e Linguagens</h3>
        </div>
        <div className="skills-content">
          <div class="skills-grid">
            <div>
              <div class="skills-list">
                <i>
                  <IoLogoJavascript size="30px" />
                </i>
                <p>JavaScript</p>
              </div>
              <div class="skills-list">
                <i>
                  <DiReact size="30px" />
                </i>
                <p>React</p>
              </div>
              <div class="skills-list">
                <i>
                  <SiJest size="30px" />
                </i>
                <p>Jest</p>
              </div>
              <div class="skills-list">
                <i>
                  <DiGit size="30px" />
                </i>
                <p>Git</p>
              </div>
            </div>
            <div>
              <div class="skills-list">
                <i>
                  <GrMysql size="30px" />
                </i>
                <p>MySql</p>
              </div>
              <div class="skills-list">
                <i>
                  <DiNodejsSmall size="30px" />
                </i>
                <p>NodeJs</p>
              </div>
              <div class="skills-list">
                <i>
                  <SiMocha size="30px" />
                </i>
                <p>Mocha</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
