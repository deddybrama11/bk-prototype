import './App.css';
import LoginGuruPage from "./pages/LoginGuruPage";
import LoginBKPage from "./pages/LoginBKPage";
import LoginSiswaPage from "./pages/LoginSiswaPage";
import SiswaPage from "./pages/SiswaPage";
import GuruPage from "./pages/GuruPage";
import BKPage from "./pages/BKPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginGuruPage}></Route>
        <Route exact path="/login-bk" component={LoginBKPage}></Route>
        <Route exact path="/login-siswa" component={LoginSiswaPage}></Route>
        <Route exact path="/login-guru" component={LoginGuruPage}></Route>
        <Route exact path="/siswa" component={SiswaPage}></Route>
        <Route exact path="/guru" component={GuruPage}></Route>
        <Route exact path="/bk" component={BKPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
