import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../Services/ApiProducts'
import './style.css'

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

  function enviarWhats(id, item, description, price) {
    const link = ` 
      https://wa.me/5511958790531?text=
      %0AOlá gostaria de fazer saber a disponibilidade deste item:
      %0AID: ${encodeURIComponent(id)}
      %0AProduto: ${encodeURIComponent(item)}
      %0ADescrição: ${encodeURIComponent(description)}
      %0APreço: ${encodeURIComponent(price)}
    `
    let info = ``
    window.open(link, '_blank')
  }

  return (
    <div>
      {listDetails && (
        <div>
          <strong className="title-product">
            Você está em: {listDetails.brand}{' '}
            <i class="bx bx-right-arrow-alt"></i> {listDetails.category}{' '}
            <i class="bx bx-right-arrow-alt"></i> {listDetails.title}
            <i class="bx bx-right-arrow-alt"></i> Código: {listDetails.id}
          </strong>
          <div className="container-details">
            <h3>ID: {listDetails.description}</h3>
            <div className="cards-details">
              <div className="card-um">
                <div className="img-left">
                  <ul>
                    <li>
                      <img src={listDetails.images[0]} />
                    </li>
                    <li>
                      <img src={listDetails.images[1]} />
                    </li>
                    <li>
                      <img src={listDetails.images[2]} />
                    </li>
                  </ul>
                </div>
                <div className="img-right">
                  <img src={listDetails.thumbnail} />
                </div>
              </div>
              <div className="card-dois">
                <div>
                  Vendido e entregue por:<strong> Modas.Online</strong>
                </div>
                <div className="price-original-details">
                  R$: {listDetails.price}
                </div>
                <div className="price-discount-details">
                  R$: {listDetails.price}
                </div>
                <div>
                  À vista no PIX com até{' '}
                  <strong>
                    {listDetails.discountPercentage.toFixed(0)}% OFF
                  </strong>
                </div>
                <div className="price-parcelado-details">
                  R$: {listDetails.price}
                </div>
                <div>
                  Em até 2x de R$ {listDetails.price / 2} sem juros no cartão
                </div>
                <div>
                  Ou em 12x no cartão{' '}
                  <strong>{(listDetails.price / 12).toFixed(2)} </strong> sem
                  juros
                </div>
                <div>Ver mais opções de pagamento</div>
                <div
                  className="contact-details"
                  onClick={e =>
                    enviarWhats(
                      listDetails.id,
                      listDetails.title,
                      listDetails.description,
                      listDetails.price
                    )
                  }
                >
                  <i class="bx bxl-whatsapp"></i>Entrar em contato
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DetalhesProducts
