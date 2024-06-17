import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de que o 'Link' é importado
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Button } from "@mui/material";
import RadioButtons from "../../Components/RadioButtons"
 
function Pagamento() {
    const [nomeTitular, setNomeTitular] = useState('');
    const [cpf, setCpf] = useState('');
    const [celular, setCelular] = useState('');
    const [senha, setSenha] = useState('');
    const [numeroDoCartao, setNumeroDoCartao] = useState('');
    const [validadeDoCartao, setValidadeDoCartao] = useState('');
    const [cvv, setCvv] = useState('');
 
    const handleFocus = (setter, value) => {
        setter(value);
    };
 
    return (
        <>
        <Header />
            <section className="containerPagamento">
            <section className="pagamento">
                <div className="campos-pagamento">
                    <h1 className="tituloPagamento">Dados de Pagamento</h1>
                    <img src="/bandeiraCartao.png" alt="bandeiras do cartão" className="bandeiraCartao"/>
                        <input
                            name="Nome do Titular"
                            value={nomeTitular} 
                            onChange={(e) => setNomeTitular(e.target.value)}
                            onFocus={() => handleFocus(setNomeTitular, nomeTitular)}
                            type="text"
                            placeholder="Nome do Titular"
                        />
                        <input
                            name="CPF"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            onFocus={() => handleFocus(setCpf, cpf)}
                            type="text"
                            placeholder="CPF"
                        />
                        <input
                            name="NumeroDoCartao"
                            value={numeroDoCartao}
                            onChange={(e) => setNumeroDoCartao(e.target.value)}
                            onFocus={() => handleFocus(setNumeroDoCartao, numeroDoCartao)}
                            type="text"
                            placeholder="Número do Cartão"
                        />
                        <input
                            name="ValidadeDoCartao"
                            value={validadeDoCartao}
                            onChange={(e) => setValidadeDoCartao(e.target.value)}
                            onFocus={() => handleFocus(setValidadeDoCartao, validadeDoCartao)}
                            type="text"
                            placeholder="Validade Validade do cartão (MM/AA)"
                        />
                        <input
                            name="Cvv"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            onFocus={() => handleFocus(setCvv, cvv)}
                            type="text"
                            placeholder="Código de segurança"
                        />

                    <RadioButtons/>

                </div>  
                <div className="btnPagamento">
                    <Link to="/cadastro">
                    <Button className="btnPreenchido" variant="contained" size="medium">Pagar</Button>
                    </Link>
                </div>
            </section>
            </section>
        <Footer />
        </>
    );
}
 
export default Pagamento;