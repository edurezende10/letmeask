import React from 'react';
import ilustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';
import googleIconImg from '../../assets/google-icon.svg';
import '../../styles/auth.scss';

const Home = () => {
  return (
    <div id="page-auth">
      <aside>
        <img
          src={ilustrationImg}
          alt="ilustracao simbolizando perguntas e respostas"
        />
        <strong>crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="imagem de logo" />
          <button className="create-room">
            <img src={googleIconImg} alt="logo do google" />
            cria sua sala com o google
          </button>

          <div>
            <span className="separator">ou entre em uma sala</span>
          </div>
          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
            <button type="submit"> Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
