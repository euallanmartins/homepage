import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



const Main = () => {
  return (
    <main className="main">
      <section>
        <h2>Bem-vindo à Minha Homepage</h2>
        <p>Esta é uma homepage simples criada com React.</p>
      </section>
    </main>
  );
};

export default Main;
