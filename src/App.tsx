import { MainMenu } from "./components/Menu/MainMenu";
import './App.scss';
import { Header } from "./components/Header/Header";
import { CallsPage } from "./Pages/CallsPage/CallsPage";

function App() {


  return (
    <div className="App">
      <MainMenu />
      <div className="page-wrapper">
        <Header />
        <CallsPage />
      </div>
    </div>
  );
}

export default App;
