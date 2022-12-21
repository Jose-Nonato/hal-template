import "./styles.css"

export default function Integrante(props:any) {
    return(
        <div className="container">
            <div className="card">
                <img src={props.img} alt="Imagem Integrante" />
                <p><a href={props.link}>{props.nome}</a></p>
            </div>
        </div>
    );
}