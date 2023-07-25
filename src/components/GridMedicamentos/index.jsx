import './style.css'
import CardMedicamento from "../CardMedicamento"

function GridMedicamentos({listaMedicamentos}) {
  return (
    <div className="container">
      {listaMedicamentos.map(medicamento => (
        <CardMedicamento key={medicamento.id} medicamento={medicamento} />
      ))}
    </div>
  )
}

export default GridMedicamentos