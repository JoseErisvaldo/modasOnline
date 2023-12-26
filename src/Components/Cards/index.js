import { Link } from 'react-router-dom'
import './style.css'

function CardsCatalogo({
  id,
  discountPercentage,
  title,
  description,
  thumbnail,
  price,
  enviarWhats
}) {
  return (
    <>
      <Link className='link-cards' to={`/detalhesproducts/${id}`}>
        <div className="cards">
          <div className="discountPercentage">
            <div>{discountPercentage.toFixed(0)}%</div>
            <p>
              <i class="bx bxs-down-arrow"></i>
            </p>
          </div>
          <div className="thumbnail">
            <img src={thumbnail} alt={title} />
          </div>
          <div className="id">Codigo: {id}</div>
          <div className="description">{description}</div>
          <div className="price-original">R$: {price}</div>
          <div>Avista no Pix: </div>
          <div className="discountPercentage-card">R$:{price}</div>
          <div className="juros">Ou 12x sem juros</div>
          <div className="">
            <div
              className="contact"
              onClick={() => enviarWhats(id, title, description, price)}
            >
              <i class="bx bxl-whatsapp"></i> Entrar em contato
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default CardsCatalogo
