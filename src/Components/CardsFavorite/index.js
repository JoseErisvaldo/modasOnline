function CardsFavorite({ thumbnail, description, price,excluir }) {
  return (
    <>
      <div className="container-card">
        <div className="close-card-favorite" onClick={excluir}>
          <i class="bx bx-x"></i>
        </div>
        <div className="img-favorite">
          <img src={thumbnail} />
        </div>
        <div className="description-favorite">
          <h6>{description}</h6>
          <p> R$ {price} no PIX</p>
          <p>Ou 12x de {(price / 12).toFixed(2)}</p>
        </div>
        <div className="details-card-favorite">
          <div>
            <div className="favorite-contact">
              <i class="bx bxl-whatsapp"></i>Entrar em contato
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CardsFavorite
