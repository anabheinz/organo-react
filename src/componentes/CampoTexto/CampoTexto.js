import './CampoTexto.css'

function CampoTexto({ valor, placeholder, label, aoAlterado }) {

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input onChange={aoDigitado} value={valor} placeholder={placeholder} />
        </div>
    );
}

export default CampoTexto;
