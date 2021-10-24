import "./App.css";
import LoginGuruPage from "./pages/LoginGuruPage";
import LoginBKPage from "./pages/LoginBKPage";
import LoginSiswaPage from "./pages/LoginSiswaPage";
import SiswaPage from "./pages/SiswaPage";
import GuruPage from "./pages/GuruPage";
import BKPage from "./pages/BKPage";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/login-bk" component={LoginBKPage}></Route>
      <Route path="/login-siswa" component={LoginSiswaPage}></Route>
      <Route path="/login-guru" component={LoginGuruPage}></Route>
      <Route path="/siswa" component={SiswaPage}></Route>
      <Route path="/guru" component={GuruPage}></Route>
      <Route path="/bk" component={BKPage}></Route>
      <Route exact path="/" component={LoginGuruPage}></Route>
    </div>
  );
}

export default App;
