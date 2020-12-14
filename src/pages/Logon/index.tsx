import React, {useState, FormEvent} from 'react';
import api from '../../services/api';
import { login } from '../../services/auth';

import brandLogoImg from '../../assets/images/LogoImg.png';

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
                <form className="logon-form" onSubmit={handleLogin}>
                    <h1>Login</h1>
                    
                    <div className="input-block">
                        <label>E-mail</label>
                        <input placeholder="lovelyfood@contato.com"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                        
                    <div className="input-block">
                        <label>Senha</label>
                        <input placeholder=""
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">
                        Entrar
                    </button>
                </form>

                <div className="brand-exposure">
                    <img src={brandLogoImg}/>

                    <label>Lovely Food &copy;</label>
                </div>
            </div>
        </div>
    );
}

export default Logon;