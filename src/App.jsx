import './App.css'
import Header from './components/Header'
import FormularioNovoMedicamento from './components/FormularioNovoMedicamento'
import CardMedicamento from './components/CardMedicamento'
import GridMedicamentos from './components/GridMedicamentos'
import { MedicamentoContext } from './context/MedicamentoContext'
import { useContext } from 'react'

function App() {

  const { listaMedicamentos } = useContext(MedicamentoContext)

  return (
    <>
      <Header />
      <FormularioNovoMedicamento />
      <GridMedicamentos listaMedicamentos={listaMedicamentos} />
    </>
  )
}

export default App
