import React, { useState } from 'react';
import './Tela.css';

import { Link } from 'react-router-dom';
function App() {
    // Controle de visibilidade dos formulários e overlays
    function clicouEntrar(){
        console.log("saiu");
        <Link to="/InicioAluno"></Link>
    }
    const [isLoginVisible, setIsLoginVisible] = useState(true);

    const handleSwitchToCadastro = () => {
        console.log("Botão 'Ir para Cadastro' clicado");
        setIsLoginVisible(false);
    };

    const handleSwitchToLogin = () => {
        console.log("Botão 'Ir para Login' clicado");
        setIsLoginVisible(true);
    };

    return (
        <div className={`container ${isLoginVisible ? 'show-login' : 'show-cadastro'}`} id="container">
            {/* Formulário de Login */}
            <div className={`form-container login-container`}>
                <form id="loginForm">
                    <h2>Login</h2>
                    <input type="text" placeholder="Usuário" required />
                    <input type="password" placeholder="Senha" required />
                    <button onClick={clicouEntrar()} type="submit">Entrar</button>
                </form>
            </div>

            {/* Formulário de Cadastro */}
            <div className={`form-container cadastro-container`}>
                <form id="cadastroForm">
                    <h2>Cadastrar</h2>
                    <input type="text" placeholder="Nome" required />
                    <input type="text" placeholder="Sobrenome" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Senha" required />
                    <input type="text" placeholder="CPF" required />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>

            {/* Sobreposições */}
            <div className="overlay-container">
                <div className="overlay">
                    <div className={`overlay-login ${isLoginVisible ? '' : 'hidden'}`}>
                        <h2>Bem-vindo de volta!</h2>
                        <p>Para manter-se conectado conosco, faça seu login com suas informações pessoais.</p>
                        <button id="goToCadastro" onClick={handleSwitchToCadastro} className="switch-btn">Ir para Cadastro</button>
                    </div>
                    <div className={`overlay-cadastrar ${!isLoginVisible ? '' : 'hidden'}`}>
                        <h2>Olá, amigo!</h2>
                        <p>Preencha seus dados pessoais e comece a jornada conosco.</p>
                        <button id="goToLogin" onClick={handleSwitchToLogin} className="switch-btn">Ir para Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
