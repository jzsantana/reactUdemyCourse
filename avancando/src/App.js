import './App.css';
import Barco from './assets/barco.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>
        Avançando em React
      </h1>

      {/* Imagem em public, quando a imagem estao em public podemos acessar diretamente 
      src
       */}
      <div>
        <img src="/estufa.jpg" alt="Foto de uma estufa de plantas"/>
      </div>

      <div>
        <img src={Barco} alt="Imagem de um barco na China"/>
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
    </div>
  );
}

export default App;
