import { useEffect, useState, useRef } from 'react'
import api from '../../Services/ApiProducts'
import CardsCatalogo from '../../Components/Cards'
function Home() {
  const [listProducts, setProducts] = useState([])
  useEffect(() => {
    async function loadingProducts() {
      await api
        .get('/products', {
          params: {
            limit: 100
          }
        })
        .then(response => {
          setProducts(response.data.products)
        })
    }
    loadingProducts()
  }, [])

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
      <h1>Lista de produtos</h1>
      <div className="container-cards">
        {listProducts.map(item => (
          <CardsCatalogo
            key={item.id}
            discountPercentage={item.discountPercentage}
            title={item.title}
            description={item.description}
            price={item.price}
            id={item.id}
            enviarWhats={enviarWhats}
            thumbnail={item.thumbnail}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
