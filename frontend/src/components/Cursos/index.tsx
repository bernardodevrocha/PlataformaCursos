import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

type Curso = {
    id: number,
    title: string,
    instrutor: string,
    progresso: number
    imagem: string
}

export function Cursos(){
    const [nomeUsuario] = useState('');

    const [cursos, setCursos] = useState<Curso[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(!token){
            navigate('/')
        }else{        
            const cursosFalsos: Curso[] = [
                {
                    id: 1,
                    title: "React do Zero",
                    instrutor: "Bernardo Rocha",
                    progresso: 70,
                    imagem: 'https://via.placeholder.com/150'
                },
                {
                    id: 2,
                    title: 'Banco de Dados com MySQL',
                    instrutor: 'Maria Oliveira',
                    progresso: 35,
                    imagem: 'https://via.placeholder.com/150'
                }
            ]

            setCursos(cursosFalsos);
        }
    }, [navigate]);

    return(
        <div style={{ display: 'flex',justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap'}}>
            {cursos.map((curso) => (
                <Card style={{margin: "10px"}}>
                    <Card.Img src="" alt="Imagem do curso" />
                    <Card.Title>{curso.title}</Card.Title>
                    <Card.Title>{nomeUsuario}</Card.Title>
                    <Card.Text>{curso.instrutor}</Card.Text>

                    <Button href="/curso">Acessar Curso</Button>
                </Card>
            ))}
        </div>
    )
}