import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import { Button } from "@mui/material";
import {Link} from 'react-router-dom';

function AlugarFilme(){
    return(
        <>
        <Header/>
        <div className="imgSetaBtnAlugar">
        <h1 className="tituloAlugar"> <img src="./fe_arrow-up.png" alt="" />Alugar</h1>
        </div>

        <section className="filmeAlugar">
            <section className="ft-user">
                <div className="imgFilmeAlugar">
                </div>
            </section>
            
            <section className="texto-filme-alugar">
                <h1 className="nomeDoFilmeAlugado">Nome do Filme</h1>
                <p>30 minutos</p>
                <div className="imgSetaBtnTrailer">
                <Button className="btnVazadoTrailerAlugar" variant="outlined" size="medium"> <img src="./seta.svg" alt="" className="setaTrailerAlugar" /> 
                <div className="tituloTrailerAlugar">
                Trailer
                </div> 
                </Button>
                </div>
                <br />
                <p className="sinopseAlugar">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam quia magni necessitatibus assumenda, totam consequuntur quos laudantium ipsam nemo illum officia, similique fugit molestiae adipisci id nobis debitis labore?</p>
                <Button className="btnPreenchidoAlugar" variant="contained" size="medium"> Alugar R$15 </Button>
                <Button className="btnVazadoComprarPlano" variant="outlined" size="medium"> Ou compre o plano </Button>
            </section>
 
        </section>
        <Footer/>
        </>
    )
}
export default AlugarFilme