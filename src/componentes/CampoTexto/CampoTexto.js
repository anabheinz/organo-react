import { useState } from 'react';
import './CampoTexto.css'

function CampoTexto({ texto, placeholder, label, aoAlterado }) {

    const [valor, setValor] = useState('')

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input onChange={aoDigitado} value={texto} placeholder={placeholder} />
        </div>
    );
}

export default CampoTexto;
