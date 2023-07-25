import { createContext, useState } from 'react'

export const MedicamentoContext = createContext()

export const MedicamentoContextProvider = ({ children }) => {
  const [listaMedicamentos, setListaMedicamentos] = useState(JSON.parse(localStorage.getItem("listaMedicamentos")) || [] )

  const AdicionarMedicamento = (nome, laboratorio, preco) => {
    if(nome.length == '' || laboratorio.length == '' || preco == 0){
      alert('Preencha todas as informações!')
      return
    }

    const novoMedicamento = {
      id: listaMedicamentos.length +1,
      nome: nome,
      laboratorio: laboratorio,
      preco: preco,
      favorito: false
    }

    const novaLista = [...listaMedicamentos, novoMedicamento]
    setListaMedicamentos(novaLista)
    alert('Medicamento cadastrado com sucesso!')
    localStorage.setItem("listaMedicamentos", JSON.stringify(novaLista))
  }

  const FavoritarMedicamento = () => {
    return alert('Sou o botão de favoritar')
  }


  return (
    <MedicamentoContext.Provider value={{ listaMedicamentos, AdicionarMedicamento, FavoritarMedicamento }}>
      {children}
    </MedicamentoContext.Provider>
  )
}