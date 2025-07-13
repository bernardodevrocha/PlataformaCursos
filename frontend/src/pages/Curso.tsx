import Card from "react-bootstrap/Card"

export function Curso(){
    return(
        <Card style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <video src="../assets/videoTeste1.mp4" controls></video>
            
            <div id="video">
                <h3>Introdução ao React, curso completo do zero ao deploy</h3>
                <p>Este vídeo é a introdução sobre React</p>
            </div>

            <div>
                <p>Tempo de curso: 50 Horas</p>
                <p>Instrutor: Bernardo Rocha</p>
                <p>Descrição do curso</p>
            </div>
        </Card>
    )
}