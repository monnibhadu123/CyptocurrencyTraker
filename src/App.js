import "./styles.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import CoinPage from "./Pages/CoinPage";
import Homepage from './Pages/HomePage';

export default function App() {
 
  return (
     <BrowserRouter>
      <div className="App">
        <Header />
        <Route path="/HomePage" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
    </BrowserRouter>
  );
}
