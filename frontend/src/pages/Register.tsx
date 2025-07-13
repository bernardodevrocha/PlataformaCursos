import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export function Register(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if(senha !== confirmarSenha){
            setError("As senhas não coincidem");
            return;
        }

        try{
            await api.post('/register', {
                nome, email, senha
            });
            navigate('/');
        }catch(err){
            setError("Credencias inválidas" + err);
        }
    }

    return(
        <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
            <h2>Cadastro</h2>
            <form onSubmit={handleRegister}>
                <label>Nome:</label>
                <input type="text" placeholder="Digite seu nome" value={nome} onChange={e => setNome(e.target.value)} required /> <br />
                <label>Email:</label>
                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required /> <br />
                <label>Senha:</label>
                <input type="password" placeholder="Digite sua senha" value={senha} onChange={e => setSenha(e.target.value)} />
                <label>Senha:</label>
                <input type="password" placeholder="Confirme sua senha" value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)} /> <br />
                <button type="submit">Cadastrar</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    )
}