import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Perfil(){
    const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleImageClick = () => {
    navigate('/assistirFilme');
  };    
    return(
        <>
        <Header/>
        <section className="perfil">
            <section className="ft-user">
                <div className="ftPerfil"> 
                    <img src='/Madu.png' alt='ft_duda' className='ftDuda'></img>
                </div>
            </section>
            <section className="texto-perfil">
                <h1 className="userName">Maria Silva</h1>
                <h6>35 anos</h6>
                <h6>Estudante de Cinema</h6>
                <h6>Produtor(a)</h6>
            </section>
            

        </section>
        <section className="container-userPlano">
            <div className="userPlano">
                <div className="textoPlano">
                    <h1>Plano</h1>
                    <h5>Free</h5>
                </div>
                <Link to="/plano" state={{ from: "expectador" }}>
                    <img src="./seta.svg" alt="" className="setUser" />
                </Link>
            </div>
        </section>

        <section className="container-userPortfolio">
            <div className="userPortfolio">
               <div className="conteudoPort">
                          
                    <section className="Portfilmes">
                    <h1>Portfólio</h1>
                    <br />
                        <Slider {...settings} className="sliderFav">
                          <div className="carousel-item" >
                           <Link to= "/portfolio"><img src="/Corpos_de_Lewi.png" alt="Corpos de Lewi" className="Portfilme" style={{ cursor: 'pointer' }} /></Link> 
                          </div>
                          <div className="carousel-item" >
                            <Link to= "/portfolio"><img src="/Garcom.png" alt="Garçom" className="Portfilme" style={{ cursor: 'pointer' }} /></Link>
                          </div>                        
                        </Slider>
                    </section>
                    <Link to= "/portfolio">< img src="./seta.svg" alt="" className="setPortUSer" /></Link>
               </div>       
            </div>
        </section>
        <Footer/>
        </>
    )
}
export default Perfil