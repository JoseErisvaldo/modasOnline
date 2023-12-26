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

  function enviarParaWhatsApp(title) {
    // Construa a URL com os dados do produto e do cliente
    const url = `https://wa.me/5511958790531?text=Cliente:
    )}%0AProduto:${encodeURIComponent(title)}`

    // Abra a URL em uma nova janela ou guia
    window.open(url, '_blank')
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
              <div onClick={e => enviarParaWhatsApp(item.title)}>Enviar</div>
            </p>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
