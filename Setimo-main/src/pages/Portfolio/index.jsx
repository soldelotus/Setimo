import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import {Link} from 'react-router-dom';

function Portfolio(){
    return(
        <>
        <Header/>
        <section className="portfolio">
            <section className="containerPortfolio">
                <div className="titleVoltar">
                    <Link to="/produtor">
                        <img src="/voltar.png" alt="" />
                    </Link>
                    <h1>Portfólio</h1>
                </div>
                <div className="portfolioLine1">
                    <div className="addFilme">
                        <Link to="/criarFilmes">
                            <img src="/iconAddFilme.svg" alt="" />
                        </Link>
                    </div>
                    <div className="line1Port">
                        <img src="/Corpos_de_Lewi.png" alt="" />
                        <img src="/Garcom.png" alt="" />
                    </div>
                </div>
            {/*
                <div className="portfolioLine2">
                    <img src="/ftFilme.png" alt="" />
                    <img src="/ftFilme.png" alt="" />
                    <img src="/ftFilme.png" alt="" />
                    <img src="/ftFilme.png" alt="" />     
                </div>
                
                 <div className="portfolioLine2">
                    <img src="/ftFilme.png" alt="" />
                    <img src="/ftFilme.png" alt="" />
                    <img src="/ftFilme.png" alt="" />
                    <img src="/ftFilme.png" alt="" />     
                </div>
                <div className="portfolioLine2">
                    <img src="/ftFilme.png" alt="" />
                    <img src="/ftFilme.png" alt="" />
                    <img src="/ftFilme.png" alt="" />
                    <img src="/ftFilme.png" alt="" />     
                </div> */}
            </section>
        </section>
        <Footer/>
        </>
    )
}
export default Portfolio