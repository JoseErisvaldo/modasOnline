import { useEffect, useState, useRef } from 'react'
import api from '../../Services/ApiProducts'
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
      <div>
        {listProducts.map(item => (
          <div key={item.id}>
            <p>Titulo: {item.title}</p>
            <p>ID: {item.id}</p>
            <p>Descrição: {item.description}</p>
            <p>
              Imagem: <img src={item.thumbnail}></img>
            </p>
            <p>
              <div
                onClick={e =>
                  enviarWhats(item.id, item.title, item.description, item.price)
                }
              >
                Enviar
              </div>
            </p>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
