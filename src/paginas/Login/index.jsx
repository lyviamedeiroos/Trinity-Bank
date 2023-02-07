import React from 'react';
import './style.css';
import Voltar from '../../componentes/Voltar';
import {Link} from 'react-router-dom';
function Login(){
  return(
    <div className='tudo'>
    <div className='tela-login'>
      <Voltar/>
      <div className='caixa-login'>
        <h2>Acesse sua conta</h2>
        <div className='inserir'>
          <div className='campo-texto'>
            <label for='email'>CPF</label>
            <input type='number' name='cpf' placeholder='Informe seu CPF'/>
          </div>
            <div className='campo-texto'>
            <label for='senha'>Senha</label>
            <input type='password' name='senha' placeholder='Senha'/>
          </div>
          <p>Esqueceu a senha?</p>
          <Link to={'/conta'}>
          <button className='login'>Entrar</button>
          </Link>
          <h4>
            Não tem acesso? <span id='cadastro'>Crie uma conta</span>
          </h4>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Login;