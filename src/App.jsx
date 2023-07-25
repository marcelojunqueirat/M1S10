import './App.css'
import Header from './components/Header'
import FormularioNovoMedicamento from './components/FormularioNovoMedicamento'
import CardMedicamento from './components/CardMedicamento'
import { MedicamentoContext } from './context/MedicamentoContext'
import { useContext } from 'react'

function App() {

  const { listaMedicamentos } = useContext(MedicamentoContext)

  return (
    <>
      <Header />
      <FormularioNovoMedicamento />
      <CardMedicamento key={listaMedicamentos[0].id} medicamento={listaMedicamentos[0]} />
    </>
  )
}

export default App
