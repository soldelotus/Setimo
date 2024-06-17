import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 
 
function Perfil(){
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
   
    axios.get('http://localhost:8080/api/usuarios/1/')
      .then(response => {
        console.log('Resposta da API:', response.data);  
        setUsuario(response.data);
        setLoading(false);  
      })
      .catch(error => {
        console.error('Erro ao buscar dados do usuário:', error);
        setLoading(false);  
      });
  }, []);
 
  const handleImageClick = () => {
    navigate('/assistirFilme');
  };
 
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
 
 
  if (loading) {
    return <div>Carregando...</div>;  
  }
 
  if (!usuario) {
    return <div>Erro ao carregar dados do usuário</div>;  
  }
 
    return(
        <>
        <Header/>
        <section className="perfil">
            <section className="ft-user">
                <div className="ftPerfil">
                <img src='/Salgado.png' alt='ft_sal' className='ftSalgado'></img>
                </div>
            </section>
            <section className="texto-perfil">
                <h1 className="userName">{usuario.nome}</h1>
          <h6>60 anos</h6>
          <h6>professor </h6>
                <h6>Expectador(a)</h6>
            </section>
           
 
        </section>
        <section className="container-userPlano">
            <div className="userPlano">
                <div className="textoPlano">
                    <h1>Plano</h1>
                    <h5>Free</h5>
                </div>
                <Link to="/plano" >
                    <img src="./seta.svg" alt="" className="setUser" />
                </Link>
            </div>
        </section>
 
 
        <section className="container-userFavorito">
            <div className="userFavorito">
               <div className="conteudoFav">
                         
                    <section className="Favfilmes">
                    <h1>Favoritos</h1>
                    <br />
                        <Slider {...settings} className="sliderFav">
                          <div className="carousel-item" onClick={handleImageClick}>
                            <img src="/Minha_Mae_e_Uma_Peca.png" alt="Minha Mãe é Uma Peça" className="Portfilme" style={{ cursor: 'pointer' }} />
                          </div>
                          <div className="carousel-item" onClick={handleImageClick}>
                            <img src="/Os_Farofeiros.png" alt="Os Farofeiros" className="Portfilme" style={{ cursor: 'pointer' }} />
                          </div>
                          <div className="carousel-item" onClick={handleImageClick}>
                            <img src="/Que_Horas_Ela_Volta.png" alt="Que Horas Ela Volta?" className="Portfilme" style={{ cursor: 'pointer' }} />
                          </div>
                          <div className="carousel-item" onClick={handleImageClick}>
                            <img src="/Tropa_de_Elite.png" alt="Tropa de elite" className="Portfilme" style={{ cursor: 'pointer' }} />
                          </div>
                          <div className="carousel-item" onClick={handleImageClick}>
                            <img src="/Os_Suburbanos.png" alt="Os Suburbanos" className="Portfilme" style={{ cursor: 'pointer' }} />
                          </div>
                           
                        </Slider>
                    </section>
               </div>
                <img src="./seta.svg" alt="" className="setUser" />
            </div>
        </section>
        <Footer/>
        </>
    )
}
export default Perfil