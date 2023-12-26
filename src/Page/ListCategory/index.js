import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../Services/ApiProducts'
import CardsCatalogo from '../../Components/Cards'
import './style.css'

function ListCategory() {
  const { id } = useParams({})
  const [catalogoCategory, setCartegory] = useState([])
  useEffect(() => {
    async function loadingCategoty() {
      await api
        .get('/products', {
          params: {
            limit: 100
          }
        })
        .then(response => {
          setCartegory(response.data.products)
        })
    }
    loadingCategoty()
  }, [])

  const filter = catalogoCategory.filter(item => {
    return item.category.toUpperCase() === id
  })

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
    <div id="container-category">
      <h2>
        <span>
          <Link to={'/'} className="link-category">
            <i class="bx bx-chevron-left"></i>
          </Link>
        </span>
        Categoria {id}
      </h2>
      <div className="container-cards">
        {filter.map(item => (
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
export default ListCategory
