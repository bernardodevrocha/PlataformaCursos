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
            })
        }catch(err){
            setError("Credencias inválidas" + err);
        }
    }

    return(
        <div>
            <h2>Cadastro</h2>
            <form action="" onSubmit={handleRegister}>
                <label htmlFor="">Nome:</label>
                <input type="text" />
            </form>
        </div>
    )
}