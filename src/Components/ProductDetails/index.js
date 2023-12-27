function ProductDetails(
  id,
  brand,
  category,
  title,
  description,
  images,
  price,
  discountPercentage,
  thumbnail
) {
  return (
    <div>
      <strong className="title-product">
        Você está em: {brand} <i class="bx bx-right-arrow-alt"></i> {category}{' '}
        <i class="bx bx-right-arrow-alt"></i> {title}
        <i class="bx bx-right-arrow-alt"></i> Código: {id}
      </strong>
      <div className="container-details">
        <h3>ID: {description}</h3>
        <div className="cards-details">
          <div className="card-um">
            <div className="img-left">
              <ul>
                <li>
                  {images && images[0] && (
                    <img src={images[0]} alt="Imagem do produto" />
                  )}
                </li>
                <li>
                  {images && images[0] && (
                    <img src={images[0]} alt="Imagem do produto" />
                  )}
                </li>
                <li>
                  {images && images[0] && (
                    <img src={images[0]} alt="Imagem do produto" />
                  )}
                </li>
              </ul>
            </div>
            <div className="img-right">
              <img src={thumbnail} />
            </div>
          </div>
          <div className="card-dois">
            <div>
              Vendido e entregue por:<strong> Modas.Online</strong>
            </div>
            <div className="price-original-details">R$: {price}</div>
            <div className="price-discount-details">R$: {price}</div>
            <div>
              À vista no PIX com até <strong>{discountPercentage}% OFF</strong>
            </div>
            <div className="price-parcelado-details">R$: {price}</div>
            <div>Em até 2x de R$ {price / 2} sem juros no cartão</div>
            <div>
              Ou em 12x no cartão{' '}
              <strong>
                {price !== undefined && <p>Preço: {price.toFixed(2)}</p>}
              </strong>
              sem juros
            </div>
            <div>Ver mais opções de pagamento</div>
            <div className="contact-details">
              <i class="bx bxl-whatsapp"></i>Entrar em contato
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
