import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Components/DashBoard';

import Inicio from './routes/Inicio';
import Aulas from './routes/Aulas';
import InicioAluno from './routes/InicioAluno';
import Agenda from './routes/Agenda';
import Configuracoes from './routes/Configuracoes';
import Contrato from './routes/Contato';
import Pagamentos from './routes/Pagamentos';
import Relatorios from './routes/Relatorios';
import Treinos from './routes/Treinos';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const router=createBrowserRouter([
  {
    path:"/",
    element: <Inicio/>
  },
  {
    path: "/Aulas",
    element: <Aulas/>
  },
  {
    path: "/InicioAluno",
    element: <InicioAluno/>
  },
  {
    path: "/Agenda",
    element: <Agenda/>
  },
  {
    path: "/Configuracoes",
    element: <Configuracoes/>
  },
  {
    path: "/Contrato",
    element: <Contrato/>
  },
  {
    path:"/Pagamentos",
    element: <Pagamentos/>
  },
  {
    path: "/Relatorios",
    element: <Relatorios/>
  },
  {
    path:"/Treinos",
    element: <Treinos/>
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
