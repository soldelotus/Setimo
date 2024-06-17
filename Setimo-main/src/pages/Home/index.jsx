import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import videosData from '../../Video.json';

function Home() {
  
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  const handleImageClick = (id) => {
    navigate(`/assistirFilme/${id}`);
  };

  const categories = ["Continuar assistindo", "Comédia", "Drama", "Ação", "Produções Independentes"];

  const getCategoryVideos = (category) => {
    return videosData.filter(video => video.categories.includes(category));
  };

  return (
    <>
      <Header />
      <section className="container-home">
        <div className="filmeInicioHome">
          <img
            src="/inicio_capa_img.png"
            alt="imagem-Apresentação"
            className="imgFilmeHome"
          />
        </div>
      </section>

      {categories.map((category, index) => (
        <section className="container-filme" key={index}>
          <div className="filmesHome">
            <div className="conteudoFilmes">
              <h2>{category}</h2>
              <Slider {...settings} className="slider">
                {getCategoryVideos(category).map(video => (
                  <div className="carousel-item" onClick={() => handleImageClick(video.id)} key={video.id}>
                    <div style={{ cursor: 'pointer' }}>
                      <img src={video.thumbnail} alt={video.title} className="Portfilme" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      ))}
 
      <Footer />
    </>
  );
}

export default Home;
