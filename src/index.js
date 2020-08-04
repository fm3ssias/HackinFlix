import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

//Desafio master blaster
const pagina404 = () => (<div>Pagina 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

