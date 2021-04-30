import logo from './logo.svg';
import './App.css'
import Pessoa from './components/Pessoa'

function App() {
  return (
    <div className="App">
    <Pessoa
      nome={"Tio Ben 2"}
      idade={64}
      frase={'Hello mundo'}
      foto={'https://www.einerd.com.br/wp-content/uploads/2019/08/Tio-Ben-poss%C3%ADvel-nova-morte-capa.jpg'}
/>
    </div>
  );
}

export default App;
