import { Cursos } from "../components/Cursos";

export function Dashboard(){
    return(
        <div>
            {/* <h2>{nomeUsuario}</h2> */}
            <h1 style={{display: "flex", alignItems:'center',justifyContent:"center"}}>Seus Cursos:</h1>

            <div>
                <Cursos />
            </div>

        </div>
    )
}