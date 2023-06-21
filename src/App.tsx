import { MainMenu } from "./components/Menu/MainMenu";
import './App.scss';
import { Header } from "./components/Header/Header";

function App() {


  return (
    <div className="App">
      <MainMenu />
      <div className="page-wrapper">
        <Header />

      </div>


    </div>
  );
}

export default App;
