import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../Services/ApiProducts'
import CardsCatalogo from '../../Components/Cards'
function DetalhesProducts() {
  const { id } = useParams()
  const [listDetails, setDetails] = useState(null)

  useEffect(() => {
    async function loadingDetails() {
      try {
        const response = await api.get(`/products/${id}`)
        setDetails(response.data)
      } catch (error) {
        console.error('Error loading details:', error)
      }
    }
    loadingDetails()
  }, [id])

  console.log(listDetails)

  return (
    <div>
      <h4></h4>
      {listDetails && (
        <div>
          <strong>
            Você está em: {listDetails.brand}{' '}
            <i class="bx bx-right-arrow-alt"></i> {listDetails.category}{' '}
            <i class="bx bx-right-arrow-alt"></i> {listDetails.title}
            <i class="bx bx-right-arrow-alt"></i> Código: {listDetails.id}
          </strong>
          <p>ID: {listDetails.id}</p>
          <p>Título: {listDetails.title}</p>
          <p>Descrição: {listDetails.description}</p>
          <p>Categoria: {listDetails.category}</p>
          {listDetails.brand && <p>Marca: {listDetails.brand}</p>}
          {/* Outras propriedades que você deseja exibir */}
        </div>
      )}
    </div>
  )
}

export default DetalhesProducts
