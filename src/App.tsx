import './App.css';
import logo from './assets/logo.png';
import Robot from './assets/robot.png';
import logoCesupa from './assets/logoCesupa.png';
import logoArgo from './assets/logoArgo.png';
import { EnvelopeFill } from 'react-bootstrap-icons';
import Integrante from './components/Integrante';

import Isaac from './assets/Isaac.jpeg';
import Poly from './assets/Poly.jpeg';
import Eduardo from './assets/Eduardo.jpeg';
import Lucas from './assets/Lucas.jpeg';
import Vitor from './assets/Vitor.jpeg';
import Alexander from './assets/Alexander.jpeg';
import Rafael from './assets/Rafael.jpeg';
import Rodrigo from './assets/Rodrigo.jpeg';
import Gabriel from './assets/Gabriel.jpeg';
import Jose from './assets/Jose.jpeg';
import Leticia from './assets/Leticia.jpeg';
import Ernesto from './assets/Ernesto.jpeg';

export default function App() {
  return (  
    <>
      <div className="header">
            <div className="header-content">
                <div className="logo">
                    <h1>HAL</h1>
                </div>
                <div className="links">
                    <a href="#focus">O QUE FAZEMOS ?</a>
                    <a href="#members">INTEGRANTES</a>
                    <a href="#contact">CONTATOS</a>
                </div>
            </div>
      </div>

      <div className='main'>
        <img src={logo} alt="Logo" />
        <h1>HAL</h1>
        <h3>GRUPO DE ESTUDOS TEMÁTICOS EM INTELIGÊNCIA ARTIFICIAL.</h3>
      </div>

      <section id='focus' className='focus'>
        <h1>O QUE FAZEMOS ?</h1>
        <div className='txt'>
          <p>O principal objetivo do HAL é articular competências no estudo e desenvolvimento de Sistemas Inteligentes, utilizando coleta, tratamento e análise de dados para construir estratégias inteligentes de solução de problemas como parte da formação dos profissionais de Computação do CESUPA. O público alvo são os alunos e egressos de Ciência da Computação e Engenharia de Computação da IES, mas com dedicação e compromisso, alunos de outros cursos da Instituição também são bem vindos.</p>
          <img src={Robot} alt="robozinho" />
        </div>
      </section>

      <section id='members' className='members'>
        <h1>INTEGRANTES</h1>
        <div className='member'>
          <h2>Coordenadores</h2>
          <div className='container row-wrap'>
            <Integrante img={Poly} nome="Polyana Nascimento"/>
            <Integrante img={Isaac} nome="Isaac Elgrably" link="http://lattes.cnpq.br/7590598824563858"/>
          </div>
        </div>
        <div className='member'>
          <h2>Membros</h2>
          <div className='container row-wrap'>
            <Integrante img={Eduardo} nome="Eduardo Maeda" link="https://www.linkedin.com/in/eduardo-ara%C3%BAjo-788a041a3"/>
            <Integrante img={Lucas} nome="Lucas Barros" link="https://www.linkedin.com/in/lucas-barros-661a31130"/>
            <Integrante img={Vitor} nome="Vitor Flores" link="https://www.linkedin.com/in/vitor-flores-6946491b1"/>
            <Integrante img={Alexander} nome="Alexander Cardoso" link="https://www.linkedin.com/in/alexander-cardoso-98202020b"/>
            <Integrante img={Rafael} nome="Rafael Gouveia" link="https://www.linkedin.com/in/rafael-santos-gouveia"/>
            <Integrante img={Rodrigo} nome="Rodrigo Cardoso" link="https://www.linkedin.com/in/rodrigo-cardoso-franco-23a6001bb"/>
            <Integrante img={Gabriel} nome="Gabriel Antonio"/>
            <Integrante img={Jose} nome="José Nonato" link="https://www.linkedin.com/in/jose-nonato-junior/"/>
            <Integrante img={Leticia} nome="Letícia Malato" link="http://www.linkedin.com/in/let%C3%ADcia-malato-888158237"/>
            <Integrante img={Ernesto} nome="Ernesto Costa" link="https://www.linkedin.com/in/ernesto-bertoldo-brito-costa-6b4a60235/"/>
          </div>
        </div>
      </section>

      <section id='contact' className='contact'>
        <h1>ENTRE EM CONTATO</h1>
        <p>Sinta-se a vontade de enviar um e-mail para tirar dúvidas de projetos e parcerias.</p>
        <EnvelopeFill className='emoji' />
        <div className='email'>
          <p>polyana.nascimento@prof.cesupa.br</p>
          <p>isaac.elgrably@prof.cesupa.br</p>
        </div>
      </section>

      <footer>
        <img src={logoCesupa} alt="Logo Cesupa" />
        <img src={logoArgo} alt="Logo Argo" />
      </footer>
    </>
  );
}
