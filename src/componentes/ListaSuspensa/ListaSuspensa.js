import './ListaSuspensa.css'


function ListaSuspensa({valor, label, itens, aoAlterado}){

    return (

        <div className="lista-suspensa">
            <h3>Time</h3>
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} value={valor}>
                <option value={""}></option>
                {itens.map(item => {
                return <option key={item}>{item}</option>})}
            </select>
        </div>

    )

}

export default ListaSuspensa