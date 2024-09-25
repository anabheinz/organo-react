import { useState } from "react";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import Botao from "../Botao/Botao";



function Formulario({times, aoColaboradorCadastrado}) {

  const [nome, setNome] = useState('teste')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  function aoSalvar(evento) {
    evento.preventDefault()
    aoColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
}
  return(  
  <section className="formulario">
    <form onSubmit={aoSalvar}>
    <h2>Preencha os dados para criar um card de colaborador:</h2>

      <CampoTexto
      label="Nome"
      placeholder="Digite seu nome"
      value={nome}
      aoAlterado={valor => setNome(valor)}
      />

      <CampoTexto
      label="Cargo"
      placeholder="Digite seu cargo"
      value={cargo}
      aoAlterado={valor => setCargo(valor)}
      />

      <CampoTexto
      label="Imagem"
      placeholder="Digite o endereço da imagem"
      value={imagem}
      aoAlterado={imagem => setImagem(imagem)}/>

      <ListaSuspensa
      itens={times}
      valor={time}
      aoAlterado={valor => setTime(valor)}
      />

      <Botao>
      Criar Card
      </Botao>
    </form>
    
  </section>
)};

export default Formulario;
