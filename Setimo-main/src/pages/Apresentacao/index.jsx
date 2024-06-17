import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Button } from "@mui/material";
import {Link} from 'react-router-dom';
import Titulo from '../../Components/TamanhoFonte/Titulo.jsx'
import Conteudo from '../../Components/TamanhoFonte/Conteudo.jsx'
import TamanhoFonte from '../../Components/Fonte'

function Apresentacao(){
    return(
        <>
        <Header/>
        <section className="container-Apresentacao">
            <div className="imgFundoApre">
                <img src="/Fundo-Apresentacao.jpg" alt="imagem-Apresentação" className="imgApresentacao"/>
                <section className="container-convite">
                    <div className="textoConvite">
                        <Titulo><h1>Vem assistir com a gente!</h1></Titulo>
                    </div>
                    <div className="btnConvite"> 
                        <Link to="/login"><Button className="btnPreenchido"  variant="contained" size="medium"> Login </Button></Link>
                        <Link to="/cadastro"><Button className="btnVazado" variant="outlined" size="medium"> Cadastro </Button></Link>
                    </div>
                </section>
            </div>
        </section>
        <section className="tamanho-fonte">
            <TamanhoFonte/>
        </section>
        
        <section className="cotainer-info">
            <section className="textoInfo">
                <div className="sobreSetimo"> 
                    <Titulo><h2> O que é o Sétimo? </h2></Titulo>
                    <Conteudo><p>Sétimo é um serviço de streaming dedicado à valorização do 
                    cinema nacional. Buscamos promover o rico patrimônio 
                    cinematográfico do Brasil, desde filmes antigos até 
                     produções mais recentes, além de destacar as criações dos 
                     talentosos cineastas brasileiros independentes. Nossos 
                     clientes podem optar por alugar filmes específicos ou obter 
                     o plano e ter acesso a toda plataforma.</p></Conteudo>
                </div>
                <div className="imgCorpoInfo"> 
                    <img src="/setimo.jpg" alt="imagem-sétimo" className="imgSetimo"/>
                </div>

            </section>
            <section className="textoInfo">
                <div className="revitalizacao"> 
                    <Titulo><h2> Revitalização </h2></Titulo>
                    <Conteudo><p>Uma parte essencial do nosso trabalho é preservar o 
                    patrimônio cinematográfico nacional, com parte do nosso 
                    valor sendo destinado à revitalização dessas obras. Nosso 
                    comprometimento não é em apenas disponibilizar filmes 
                    para apreciação do público, mas também em garantir que 
                    essas criações de grande impacto cultural sejam 
                    restauradas e mantidas, contribuindo ativamente para sua 
                    preservação e crescimento. </p> </Conteudo>
                </div>
                <div className="imgCorpoInfo"> 
                    <img src="/revitalizacao1.jpg" alt="imagem-revitalização" className="imgRevitalizacao"/>
                </div>
            </section>

            <section className="textoInfo">
                <div className="portifolio"> 
                    <Titulo><h2> Portfólio </h2></Titulo>
                    <Conteudo><p> Além de preservar e promover o cinema nacional, o Sétimo  
                    também serve como um excelente portfólio para produtores 
                    independentes. Para cineastas e criadores de conteúdo 
                    audiovisual, oferecemos uma plataforma completa onde 
                    podem compartilhar suas obras com o mundo. Temos o 
                    comprometimento de fornecer uma plataforma inclusiva e 
                    acessível onde novos talentos têm a oportunidade de serem
                    descobertos de uma maneira fácil e eficaz. Dê play com a 
                    gente, aqui cada filme encontra seu lugar para brilhar! </p> </Conteudo>
                </div>
                <div className="imgCorpoInfo"> 
                    <img src="/portfolio.jpg" alt="imagem-portfólio" className="imgPortfolio"/>
                </div>
            </section>
        </section>

        

        <Footer/>
        
        </>
    )
}
export default Apresentacao
