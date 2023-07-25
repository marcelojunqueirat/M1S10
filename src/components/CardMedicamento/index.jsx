import './style.css'
import { useContext } from "react"
import { MedicamentoContext } from "../../context/MedicamentoContext"

function CardMedicamento({ medicamento }) {
  const { FavoritarMedicamento } = useContext(MedicamentoContext)

  return (
    <div className="cartao">
      <div className="margem-cartao">
        <div className="coracao">
          <i
            onClick={() => FavoritarMedicamento(medicamento.id)}
            className={medicamento.favorito == true ? 'ri-heart-fill checked' : 'ri-heart-fill'}>
          </i>
        </div>
        <img className="imagem-cartao" src="./remedio.png" alt="Imagem de medicamento" />
        <div className="produto">
          <h3>{medicamento.nome}</h3>
        </div>
        <div className="produto">
          <h4>{medicamento.laboratorio}</h4>
        </div>
        <div className="valor">
          <p>R&#36; {medicamento.preco}</p>
        </div>
      </div>
    </div>
  )
}

export default CardMedicamento