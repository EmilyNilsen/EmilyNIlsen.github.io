import React from 'react';
import Header from '../components/header';
import About from '../components/about';
import Skilss from '../components/skills';
import Footer from  '../components/footer';
import CarouselComponent from '../components/projects';
import image from '../images/emily.jpeg';
import { AiOutlineArrowUp} from 'react-icons/ai';

export default function Home() {
  return(
    <>
      <Header />
      <div id='home' className='container-home'>
        <div className='container-text'>
          <h3 className='title-home'>Olá, eu sou a Emily<i>🌻</i></h3>
          <p className='text-home'>Desenvolvedora Full Stack Jr.</p>
        </div>
        <div className='circle'>
          <img alt='imagem' src={image} className="image-home"/>
        </div>
      </div>
      <About />
      <Skilss />
      <CarouselComponent />
      <Footer />
      <a href="#header" class="back-to-top"><i><AiOutlineArrowUp /></i></a>
    </>
  )
};
