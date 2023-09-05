import logo from './logo.svg';
import './App.css';
import Saudacao from './components/Saudacao';
import Login from './components/Login';

function App() {
  return (
    <div className="Central">
      <div className ="Position">
        <div className="PaginaCentral">

          <div className="Conteudo">
            <div className="PositionSaudacao">
              <Saudacao/>
            </div>
          </div>

          <div className="Entrada">
            <div className ="PagLogin">
              <Login/>
            </div>
          </div>
        </div>

        <div className="rodape">
        </div>
      </div>     
    </div>
  );
}

export default App;