import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
function Teams() {
  return (
    <>
      <Header />
      <section className="conteiner-teams">
        <div className="imgFundoTeams">
          <img
            src="/img_teams.png"
            alt="imagem-Apresentação"
            className="imgApresentacao"
          />
        </div>
      </section>
      
      <section className="Grupo-Representantes">
        <div className="primeira-fileira">
          <div>

            <img
              src="/img_Ale.png"
              alt="Imagem Alessandra"
              className="foto-representando"
            />
            <h2>Alessandra Mendes</h2>
            <p>Sistemas Para Internet</p>
            <p className="universidade">UNICAP</p>
            <div>
              <Link to="https://www.linkedin.com/in/alessandra-mendes02">
                <img
                  src="/icon-linkedin.png"
                  alt="Linkedin_Alessandra"
                  className="icon"
                />{" "}
              </Link>
              <Link to="https://github.com/AlessandraMendes02">
                <img
                  src="/icon-github.png"
                  alt="Github_Alessandra"
                  className="icon"
                />{" "}
              </Link>
            </div>
          </div>
          <div>

            <img
              src="/img_Sal.png"
              alt="Imagem Giovana"
              className="foto-representando"
            />
            <h2>Giovana Salgado</h2>
            <p>Sistemas Para Internet</p>
            <p className="universidade">UNICAP</p>
            <div>
              <Link to="https://www.linkedin.com/in/giovanasalgado/">
                <img
                  src="/icon-linkedin.png"
                  alt="Linkedin_Giovana"
                  className="icon"
                />{" "}
              </Link>
              <Link to="https://github.com/GiovanaSalgado53">
                <img
                  src="/icon-github.png"
                  alt="Github_Giovana"
                  className="icon"
                />{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="segunda-fileira">
          <div>

            <img
              src="/img_Hannah.png"
              alt="Imagem Hannah"
              className="foto-representando"
            />
            <h2>Hannah Sales</h2>
            <p>Sistemas Para Internet</p>
            <p className="universidade">UNICAP</p>

            <div>
              <Link to="https://www.linkedin.com/in/hannahsales">
                <img
                  src="/icon-linkedin.png"
                  alt="Linkedin_Hannah"
                  className="icon"
                />{" "}
              </Link>
              <Link to="https://github.com/HannahSales04">
                <img
                  src="/icon-github.png"
                  alt="Github_Hannah"
                  className="icon"
                />{" "}
              </Link>
            </div>
          </div>


          <div>
            <img
              src="/img_Kat.png"
              alt="Imagem Kathulyn"
              className="foto-representando"
            />
            <h2>Kathulyn Neves</h2>
            <p>Sistemas Para Internet</p>
            <p className="universidade">UNICAP</p>
            <div>
              <Link to="https://www.linkedin.com/in/kathulyn-neves-3b1017272">
                <img
                  src="/icon-linkedin.png"
                  alt="Linkedin_Kathulyn"
                  className="icon"
                />{" "}
              </Link>
              <Link to="https://github.com/KathulynNeves">
                <img
                  src="/icon-github.png"
                  alt="GitHub_Kathulyn"
                  className="icon"
                />{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="terceira-fileira">
        <div>
          <img
            src="/img_Sol.png"
            alt="Imagem Sol"
            className="foto-representando"
          />
          <h2>Sol de Lótus</h2>
          <p>Sistemas Para Internet</p>
          <p className="universidade">UNICAP</p>
          <div>
            <Link to="https://www.linkedin.com/in/soldelotus">
              <img
                src="/icon-linkedin.png"
                alt="Linkedin_Sol"
                className="icon"
              />{" "}
            </Link>
            <Link to="https://github.com/soldelotus">
              <img src="/icon-github.png" alt="GitHub_Sol" className="icon" />{" "}
            </Link>
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Teams;
