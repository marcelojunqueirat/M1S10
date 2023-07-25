import './style.css'
import { useState } from "react"

function FormularioNovoMedicamento() {
  const [nome, setNome] = useState('')
  const [laboratorio, setLaboratorio] = useState('')
  const [preco, setPreco] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Cadastro teste sucesso!')
  }
  
  return (
    <>
      <h2>Formulário de cadastro de medicamentos</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Nome' 
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='Laboratório' 
          value={laboratorio}
          onChange={(e) => setLaboratorio(e.target.value)}
        />
        <input 
          type="number" 
          placeholder='Preço' 
          value={preco}
          onChange={(e) => setPreco(Number(e.target.value))}
        />

        <button type="submit" >Cadastrar Medicamento</button>
      </form>
    </>
  )
}

export default FormularioNovoMedicamento