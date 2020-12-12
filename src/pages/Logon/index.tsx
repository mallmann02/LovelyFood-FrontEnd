import React, {useState, FormEvent} from 'react';
import api from '../../services/api';
import { login } from '../../services/auth';

import './styles.css';

import { useHistory } from 'react-router-dom';

const Logon = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    async function handleLogin(e: FormEvent){
        e.preventDefault();
         try{
             const response = await api.post('sessions', {email, password});

             sessionStorage.setItem('authUserEmail', response.data.email);

             login(response.data.token);

             history.push('/admin');
         } catch (err){
             alert('Nenhum usuário adminstrador encontrado com este cadastro!');
         }
    }
    
    return(
        <div id="page-logon">
            <div id="logon-container">
                <div id="form">
                    <img />
                    

                    <form id="logon-form" onSubmit={handleLogin}>
                        <h1>Faça seu login</h1>
                        <input placeholder="Seu e-mail"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        
                        <input placeholder="Sua senha"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <button className="button" type="submit">
                            Entrar
                        </button>
                    </form>
                </div>

                <div>
                    <img />
                </div>
            </div>
        </div>
    );
}

export default Logon;