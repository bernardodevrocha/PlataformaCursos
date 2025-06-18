import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Dashboard(){
    const navigate = useNavigate();
    const [nomeUsuario, setNomeUsuario] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(!token){
            navigate('/')
        }else{
            setNomeUsuario('Bem-vindo usuário(a)');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return(
        <div>
            <h2>{nomeUsuario}</h2>
            <p>Essa é a dashboard da sua plataforma de cursos online.</p>
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}