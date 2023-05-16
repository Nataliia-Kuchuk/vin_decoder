import "./App.css";
import { observer } from "mobx-react-lite";

import RoutesPage from "./routes/Routes";
import Header from "./components/Header/Header";

function App() {

  return <div className="App">
    <Header/>
   <RoutesPage/>
  </div>;
}

export default observer(App);
